import React, { useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { injectJsonLd, removeJsonLd, buildBreadcrumbSchema } from '../utils/seo';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (url: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const fullList = [{ name: 'Home', url: '/' }, ...items];

  useEffect(() => {
    injectJsonLd('jsonld-breadcrumbs', buildBreadcrumbSchema(fullList));
    return () => {
      removeJsonLd('jsonld-breadcrumbs');
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-xs sm:text-sm text-stone-500 overflow-x-auto whitespace-nowrap py-1">
      <ol className="flex items-center gap-1.5 list-none p-0 m-0">
        {fullList.map((crumb, idx) => {
          const isLast = idx === fullList.length - 1;
          return (
            <li key={crumb.url + idx} className="flex items-center gap-1.5">
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />}
              {isLast ? (
                <span className="font-semibold text-stone-800 truncate max-w-xs" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => onNavigate(crumb.url)}
                  className="hover:text-emerald-700 transition-colors flex items-center gap-1 cursor-pointer font-medium"
                >
                  {idx === 0 && <Home className="w-3.5 h-3.5" />}
                  <span>{crumb.name}</span>
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
