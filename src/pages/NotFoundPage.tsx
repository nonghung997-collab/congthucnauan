import React from 'react';
import { ChefHat, ArrowLeft, Home, Search } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-stone-200 shadow-xl">
        <span className="text-6xl mb-4 block">🍳</span>
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-1">
          404 Page Not Found
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif mb-2">
          Recipe Out of Stock!
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mb-6 leading-relaxed">
          The kitchen page you are looking for might have been eaten, moved, or never existed. Let’s get you back to cooking!
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/recipes')}
            className="flex-1 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Browse Recipes</span>
          </button>
        </div>
      </div>
    </div>
  );
};
