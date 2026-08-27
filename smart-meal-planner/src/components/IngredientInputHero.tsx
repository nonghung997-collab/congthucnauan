import React, { useState, KeyboardEvent } from 'react';
import { Search, Plus, X, Sparkles, ChefHat, Trash2, ArrowRight } from 'lucide-react';
import { POPULAR_HERO_INGREDIENTS } from '../data/synonyms';

interface IngredientInputHeroProps {
  selectedIngredients: string[];
  onAddIngredient: (ingredient: string) => void;
  onRemoveIngredient: (ingredient: string) => void;
  onClearAll: () => void;
  onSubmit: () => void;
  totalMatchesCount: number;
}

export const IngredientInputHero: React.FC<IngredientInputHeroProps> = ({
  selectedIngredients,
  onAddIngredient,
  onRemoveIngredient,
  onClearAll,
  onSubmit,
  totalMatchesCount
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = (val?: string) => {
    const text = (val || inputValue).trim();
    if (!text) return;

    // Handle comma-separated ingredients
    if (text.includes(',')) {
      text.split(',').forEach((part) => {
        const cleaned = part.trim();
        if (cleaned && !selectedIngredients.includes(cleaned.toLowerCase())) {
          onAddIngredient(cleaned);
        }
      });
    } else {
      if (!selectedIngredients.some((i) => i.toLowerCase() === text.toLowerCase())) {
        onAddIngredient(text);
      }
    }
    setInputValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim()) {
        handleAdd();
      } else {
        onSubmit();
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-emerald-50/50 via-white to-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Zero Waste • No Signup Required • 100% Free</span>
        </div>

        {/* H1 SEO Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 font-serif max-w-3xl mx-auto leading-tight">
          What Can I Cook With <br className="hidden sm:block" />
          <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2">
            What I Have?
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-medium">
          Enter the ingredients in your kitchen and discover delicious recipes you can make today.
        </p>

        {/* Primary Interactive Box */}
        <div className="mt-8 bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-stone-200 text-left">
          {/* Selected Ingredients Pill Box */}
          {selectedIngredients.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-4 p-3 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 mr-1">
                Your Ingredients ({selectedIngredients.length}):
              </span>
              {selectedIngredients.map((ing) => (
                <span
                  key={ing}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-bold bg-white text-emerald-900 border border-emerald-300 shadow-2xs animate-in zoom-in-90 duration-150"
                >
                  <span className="capitalize">{ing}</span>
                  <button
                    type="button"
                    onClick={() => onRemoveIngredient(ing)}
                    aria-label={`Remove ${ing}`}
                    className="hover:text-rose-600 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
              <button
                type="button"
                onClick={onClearAll}
                className="ml-auto text-xs text-stone-500 hover:text-rose-600 flex items-center gap-1 font-medium transition-colors cursor-pointer px-2 py-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            </div>
          )}

          {/* Input Row */}
          <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
            <div className="relative flex-1">
              <input
                id="hero-ingredient-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type ingredients: Chicken, eggs, rice, tomatoes..."
                className="w-full h-13 pl-4 pr-12 rounded-2xl border-2 border-stone-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 outline-none text-base font-medium text-stone-900 transition-all placeholder:text-stone-400 bg-stone-50/50 focus:bg-white"
              />
              {inputValue.trim() && (
                <button
                  type="button"
                  onClick={() => handleAdd()}
                  className="absolute right-2 top-2 h-9 px-3 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              )}
            </div>

            {/* Find Recipes CTA Button */}
            <button
              id="hero-find-recipes-btn"
              type="button"
              onClick={onSubmit}
              className="h-13 px-7 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <ChefHat className="w-5 h-5" />
              <span>Find Recipes →</span>
            </button>
          </div>

          {/* Quick Ingredient Suggestion Chips */}
          <div className="mt-4 pt-4 border-t border-stone-100">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2">
              Popular Pantry Staples (Click to add):
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {POPULAR_HERO_INGREDIENTS.map((item) => {
                const isSelected = selectedIngredients.some(
                  (i) => i.toLowerCase() === item.name.toLowerCase()
                );
                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => {
                      if (isSelected) {
                        onRemoveIngredient(item.name.toLowerCase());
                      } else {
                        onAddIngredient(item.name.toLowerCase());
                      }
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer select-none ${
                      isSelected
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 border border-stone-200/70'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {isSelected ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3 text-stone-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Match Counter Indicator */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-stone-500 font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>
            {selectedIngredients.length > 0
              ? `Found ${totalMatchesCount} matching recipe${totalMatchesCount === 1 ? '' : 's'} with your ingredients!`
              : `Ready to match across 50+ chef-crafted healthy recipes`}
          </span>
        </div>
      </div>
    </section>
  );
};
