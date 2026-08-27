import React from 'react';
import { ChefHat, Heart, ShieldCheck, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-stone-800">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2">
            <div 
              onClick={() => handleNav('/')}
              className="flex items-center gap-2.5 cursor-pointer mb-3 inline-flex"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-stone-950 font-bold">
                <ChefHat className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-serif">
                Smart Meal <span className="text-emerald-400">Planner</span>
              </span>
            </div>
            <p className="text-sm text-stone-400 font-medium leading-relaxed max-w-sm mb-4">
              Cook Smarter. Waste Less. Eat Better. Find instant recipes using whatever ingredients you have, plan 7-day meals, and track pantry expirations.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700 text-xs text-stone-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Free • No Sign-up Required</span>
            </div>
          </div>

          {/* Col 2: Core Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3">
              Core Tools
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button onClick={() => handleNav('/')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Ingredient Matcher
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/meal-planner')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  7-Day Meal Planner
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/pantry')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Pantry & Expiration Tracker
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/shopping-list')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Smart Shopping List
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/favorites')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Saved Favorites
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Recipe Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3">
              Recipe Collections
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button onClick={() => handleNav('/quick-meals')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Quick Meals (Under 20 Mins)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/healthy-meals')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Healthy & Low-Calorie
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/budget-meals')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Budget-Friendly Meals
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/meal-plans')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Curated Meal Plans
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/what-to-cook')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  What to Cook Tonight
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Ingredients & Guides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-3">
              Ingredients & Guides
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button onClick={() => handleNav('/ingredients/chicken')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Chicken Recipes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/ingredients/eggs')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Egg Meals
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/ingredients/rice')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Rice Bowls & Fried Rice
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/articles')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Meal Planning Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/about')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  About & Content Standards
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Nutrition & Editorial Disclaimer */}
        <div className="py-6 border-b border-stone-800 text-xs text-stone-500 leading-relaxed">
          <p>
            <strong className="text-stone-400 font-semibold">Important Nutrition Disclaimer:</strong> Smart Meal Planner provides recipe calculations and estimated nutritional information for general culinary and organizational purposes only. Exact nutritional values vary based on specific brands, ingredient quantities, preparation methods, and serving sizes. This application does not provide medical or personalized dietary advice.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Smart Meal Planner. Built with craftsmanship for home cooks worldwide.</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('/about')} className="hover:text-stone-200 cursor-pointer">
              About
            </button>
            <button onClick={() => handleNav('/contact')} className="hover:text-stone-200 cursor-pointer">
              Contact
            </button>
            <button onClick={() => handleNav('/privacy-policy')} className="hover:text-stone-200 cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('/terms')} className="hover:text-stone-200 cursor-pointer">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
