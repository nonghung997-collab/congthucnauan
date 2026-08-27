import React, { useState, useEffect } from 'react';
import { getCookieConsent, saveCookieConsent } from '../utils/storage';
import { ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onNavigate: (path: string) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === null) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    saveCookieConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    saveCookieConsent(false);
    setVisible(false);
  };

  return (
    <div 
      id="cookie-consent-banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-stone-900 text-stone-200 p-4 rounded-2xl shadow-2xl border border-stone-800 animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div className="flex-1 text-xs leading-relaxed text-stone-300">
          <p className="font-semibold text-white mb-1">Privacy & Kitchen Preferences</p>
          We use local browser storage to safely save your pantry, recipes, and shopping list on this device without requiring an account. Read our{' '}
          <button
            onClick={() => onNavigate('/privacy-policy')}
            className="text-emerald-400 underline hover:text-emerald-300 cursor-pointer"
          >
            Privacy Policy
          </button>.
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-2 pt-2 border-t border-stone-800">
        <button
          type="button"
          onClick={handleDecline}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
        >
          Essential Only
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
        >
          Got It
        </button>
      </div>
    </div>
  );
};
