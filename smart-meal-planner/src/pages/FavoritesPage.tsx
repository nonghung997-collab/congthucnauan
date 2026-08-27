import React from 'react';
import { Recipe } from '../types';
import { RecipeCard } from '../components/RecipeCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Bookmark, ChefHat, ArrowRight } from 'lucide-react';

interface FavoritesPageProps {
  favoriteRecipes: Recipe[];
  onToggleFavorite: (slug: string) => void;
  onSelectRecipe: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({
  favoriteRecipes,
  onToggleFavorite,
  onSelectRecipe,
  onNavigate
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Favorites', url: '/favorites' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold mb-2">
            <Bookmark className="w-3.5 h-3.5 fill-rose-800" />
            <span>Saved in Browser</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
            Saved Favorite Recipes ({favoriteRecipes.length})
          </h1>
          <p className="text-sm text-stone-600 mt-1">
            Quickly access your go-to breakfasts, weeknight dinners, and meal prep staples.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('/recipes')}
          className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
        >
          <span>Browse More Recipes</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Favorites Grid */}
      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectRecipe}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-3xl border border-stone-200 p-8">
          <Bookmark className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-stone-800">You have no saved recipes yet</h3>
          <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
            Click the bookmark icon on any recipe card to save it here for instant access!
          </p>
          <button
            onClick={() => onNavigate('/recipes')}
            className="mt-6 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-transform active:scale-95 cursor-pointer"
          >
            Explore Recipes Now
          </button>
        </div>
      )}

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />
    </div>
  );
};
