import React, { useState } from 'react';
import { 
  ChefHat, 
  Search, 
  Sparkles, 
  Calendar, 
  ShoppingBag, 
  Bookmark, 
  Package, 
  Menu, 
  X,
  Compass
} from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  onSurpriseMe: () => void;
  favoritesCount: number;
  pantryCount: number;
  shoppingCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  onSurpriseMe,
  favoritesCount,
  pantryCount,
  shoppingCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Find Recipes', path: '/recipes', icon: ChefHat },
    { label: '7-Day Planner', path: '/meal-planner', icon: Calendar },
    { label: 'Pantry', path: '/pantry', icon: Package, badge: pantryCount },
    { label: 'Shopping List', path: '/shopping-list', icon: ShoppingBag, badge: shoppingCount },
    { label: 'Favorites', path: '/favorites', icon: Bookmark, badge: favoritesCount }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            id="brand-logo"
            onClick={() => handleNav('/')}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-stone-900 font-serif">
                Smart Meal <span className="text-emerald-600">Planner</span>
              </span>
              <span className="hidden sm:block text-[10px] font-medium uppercase tracking-wider text-stone-500 -mt-1">
                Cook Smarter • Waste Less
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  id={`nav-${item.path.replace('/', '') || 'home'}`}
                  onClick={() => handleNav(item.path)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 font-semibold'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  }`}
                >
                  <Icon className="w-4 h-4 text-stone-500 group-hover:text-stone-900" />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[11px] font-bold bg-emerald-600 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2">
            {/* Search Trigger */}
            <button
              id="global-search-btn"
              onClick={onOpenSearch}
              aria-label="Search recipes and ingredients"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-600 text-sm font-medium transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4 text-stone-400" />
              <span className="hidden lg:inline text-xs text-stone-500">Search...</span>
              <kbd className="hidden lg:inline px-1.5 py-0.5 text-[10px] font-mono bg-stone-200 text-stone-600 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Surprise Me CTA */}
            <button
              id="surprise-me-nav-btn"
              onClick={onSurpriseMe}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 active:scale-95 text-stone-950 font-bold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Surprise Me</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  id={`mobile-nav-${item.path.replace('/', '')}`}
                  onClick={() => handleNav(item.path)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 font-semibold'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-stone-500" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-2 border-t border-stone-100 flex flex-col gap-2 mt-2">
              <button
                id="mobile-surprise-btn"
                onClick={() => {
                  onSurpriseMe();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500 text-stone-950 font-bold text-sm cursor-pointer shadow-xs"
              >
                <Sparkles className="w-4 h-4" />
                <span>Surprise Me With a Recipe 🎲</span>
              </button>
              
              <div className="flex items-center justify-around pt-2 text-xs text-stone-500">
                <button onClick={() => handleNav('/what-to-cook')} className="hover:text-stone-900 cursor-pointer">What to Cook</button>
                <span>•</span>
                <button onClick={() => handleNav('/ingredients')} className="hover:text-stone-900 cursor-pointer">Ingredients</button>
                <span>•</span>
                <button onClick={() => handleNav('/articles')} className="hover:text-stone-900 cursor-pointer">Guides</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
