import React from 'react';
import { Recipe, RecipeMatchResult } from '../types';
import { Clock, Flame, Dumbbell, Bookmark, ChevronRight, Sparkles } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  matchResult?: RecipeMatchResult;
  isFavorite: boolean;
  onToggleFavorite: (slug: string) => void;
  onSelect: (slug: string) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  matchResult,
  isFavorite,
  onToggleFavorite,
  onSelect
}) => {
  return (
    <div
      id={`recipe-card-${recipe.slug}`}
      onClick={() => onSelect(recipe.slug)}
      className="group relative flex flex-col bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all duration-200 overflow-hidden cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-100">
        <img
          src={recipe.image}
          alt={recipe.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Match Score Badge (if user entered ingredients) */}
        {matchResult && (
          <div className="absolute top-3 left-3">
            {matchResult.matchScore === 100 ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-600 text-white shadow-sm">
                <Sparkles className="w-3 h-3" />
                100% Match
              </span>
            ) : matchResult.matchScore >= 60 ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-stone-950 shadow-sm">
                {matchResult.matchScore}% Match
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-stone-800/80 text-white backdrop-blur-xs">
                {matchResult.matchScore}% Match
              </span>
            )}
          </div>
        )}

        {/* Favorite Button */}
        <button
          type="button"
          aria-label={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe.slug);
          }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-150 cursor-pointer ${
            isFavorite
              ? 'bg-rose-500 text-white shadow-sm scale-105'
              : 'bg-stone-900/40 text-white hover:bg-stone-900/70'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
        </button>

        {/* Missing Ingredient count if applicable */}
        {matchResult && matchResult.missingIngredients.length > 0 && matchResult.matchScore < 100 && (
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center px-2.5 py-1 rounded-lg bg-stone-950/70 backdrop-blur-xs text-[11px] text-stone-200">
            <span>Needs {matchResult.missingIngredients.length} item{matchResult.missingIngredients.length > 1 ? 's' : ''}</span>
            <span className="text-amber-300 font-medium truncate max-w-[140px]">
              +{matchResult.missingIngredients[0].name}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-stone-100 text-stone-600">
              {recipe.cuisine}
            </span>
            <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700">
              {recipe.difficulty}
            </span>
            {recipe.budgetTier === 'Budget Friendly' && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700">
                $ Budget Friendly
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-bold text-base sm:text-lg text-stone-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
            {recipe.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-stone-500 line-clamp-2 mt-1 leading-relaxed">
            {recipe.description}
          </p>
        </div>

        {/* Quick Nutrition & Time Stats */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-medium">{recipe.totalTime}m</span>
          </div>

          <div className="flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span className="font-medium">{recipe.calories} kcal</span>
          </div>

          <div className="flex items-center gap-1">
            <Dumbbell className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-medium">{recipe.protein}g protein</span>
          </div>
        </div>
      </div>
    </div>
  );
};
