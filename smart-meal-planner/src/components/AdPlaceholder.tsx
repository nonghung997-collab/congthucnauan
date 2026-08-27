import React from 'react';

interface AdPlaceholderProps {
  slot?: string;
  format?: 'horizontal' | 'rectangle' | 'banner';
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  slot = 'default',
  format = 'horizontal',
  className = ''
}) => {
  const adsenseClientId = (import.meta as any).env?.VITE_ADSENSE_CLIENT_ID;
  const adsenseSlotId = (import.meta as any).env?.VITE_ADSENSE_SLOT_ID;

  // If real AdSense is configured via env, render the actual ins tag
  if (adsenseClientId && adsenseSlotId) {
    return (
      <div className={`my-6 flex justify-center overflow-hidden ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adsenseClientId}
          data-ad-slot={adsenseSlotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Graceful, non-intrusive placeholder
  const heightClass =
    format === 'rectangle' ? 'h-48' : format === 'banner' ? 'h-24' : 'h-28';

  return (
    <aside
      aria-label="Advertisement"
      className={`my-6 w-full rounded-xl border border-dashed border-stone-300/80 bg-stone-100/60 p-3 text-center flex flex-col items-center justify-center select-none ${heightClass} ${className}`}
    >
      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600 mb-1">
        Advertisement
      </span>
      <span className="text-xs text-stone-500 font-medium">
        Support free meal planning tools & food waste reduction
      </span>
    </aside>
  );
};
