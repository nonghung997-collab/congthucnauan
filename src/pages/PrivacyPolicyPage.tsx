import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updateDocumentSeo({
      title: 'Privacy Policy - Smart Meal Planner',
      description: 'Smart Meal Planner privacy policy. We respect your data and do not collect personal identifying information without consent.',
      canonicalPath: '/privacy-policy'
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} onNavigate={onNavigate} />

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6 text-stone-700 leading-relaxed text-sm">
        <div className="flex items-center gap-2 text-emerald-700 mb-2">
          <ShieldCheck className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-wider">Privacy & Data Governance</span>
        </div>

        <h1 className="text-3xl font-extrabold text-stone-900 font-serif">
          Privacy Policy
        </h1>
        <p className="text-xs text-stone-400">Last updated: August 2026</p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-stone-900">1. Information We Collect</h2>
          <p>
            Smart Meal Planner is designed to operate primarily in client-side local browser storage. We do not require users to create an account, provide names, or disclose credit card details to use core features like finding recipes, building meal plans, or tracking pantry inventory.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-stone-900">2. Local Storage Usage</h2>
          <p>
            Your saved recipes (Favorites), pantry items, custom meal plan entries, and shopping list items are stored locally in your browser (HTML5 Local Storage). You can clear this data at any time by clearing your browser cache or using the "Clear" buttons within the app.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-stone-900">3. Advertising & Cookies</h2>
          <p>
            We may use third-party advertising partners such as Google AdSense to serve non-personalized or personalized advertisements when you visit our website. These partners may place cookies on your browser to measure ad impressions and relevance in compliance with standard web standards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-stone-900">4. Analytics</h2>
          <p>
            We may collect anonymous aggregated telemetry (such as page views and browser types) to understand how users interact with our recipe finder and optimize app performance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-stone-900">5. Contact</h2>
          <p>
            If you have questions regarding this Privacy Policy, please reach out via our{' '}
            <button onClick={() => onNavigate('/contact')} className="text-emerald-700 underline font-semibold">
              Contact Page
            </button>.
          </p>
        </section>
      </div>
    </div>
  );
};
