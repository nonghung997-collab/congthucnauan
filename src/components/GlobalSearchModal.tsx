import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChefHat, Sparkles, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { getAllRecipes } from '../data/recipes';
import { getAllIngredientHubs } from '../data/ingredientHubs';
import { getAllCuratedMealPlans } from '../data/mealPlans';
import { getAllArticles } from '../data/articles';
import { Recipe, IngredientHub, MealPlan, Article } from '../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.toLowerCase().trim();

  // Search through all entities
  const recipes = getAllRecipes();
  const ingredients = getAllIngredientHubs();
  const mealPlans = getAllCuratedMealPlans();
  const articles = getAllArticles();

  const matchingRecipes = trimmed
    ? recipes.filter(
        (r) =>
          r.name.toLowerCase().includes(trimmed) ||
          r.description.toLowerCase().includes(trimmed) ||
          r.tags.some((t) => t.toLowerCase().includes(trimmed)) ||
          r.ingredients.some((i) => i.name.toLowerCase().includes(trimmed))
      ).slice(0, 5)
    : recipes.slice(0, 3);

  const matchingIngredients = trimmed
    ? ingredients.filter(
        (i) =>
          i.name.toLowerCase().includes(trimmed) ||
          i.title.toLowerCase().includes(trimmed)
      ).slice(0, 4)
    : ingredients.slice(0, 4);

  const matchingMealPlans = trimmed
    ? mealPlans.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed)
      ).slice(0, 2)
    : mealPlans.slice(0, 2);

  const matchingArticles = trimmed
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(trimmed) ||
          a.excerpt.toLowerCase().includes(trimmed)
      ).slice(0, 2)
    : [];

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 p-4 animate-in fade-in duration-150">
      <div 
        id="global-search-dialog"
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh]"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-200">
          <Search className="w-5 h-5 text-stone-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search recipes, ingredients, meal plans, or guides..."
            className="w-full bg-transparent border-none outline-none text-base text-stone-900 placeholder:text-stone-400 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 mr-2 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-stone-500 bg-stone-100 hover:bg-stone-200 rounded-md cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-6">
          {/* Recipes Section */}
          {matchingRecipes.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                <span className="flex items-center gap-1.5">
                  <ChefHat className="w-3.5 h-3.5 text-emerald-600" />
                  Recipes
                </span>
                <span>{matchingRecipes.length} found</span>
              </div>
              <div className="space-y-1.5">
                {matchingRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    onClick={() => handleSelect(`/recipes/${recipe.slug}`)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50/70 border border-transparent hover:border-emerald-200 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-stone-900 group-hover:text-emerald-700">
                          {recipe.name}
                        </h4>
                        <p className="text-xs text-stone-500">
                          {recipe.totalTime}m • {recipe.calories} kcal • {recipe.cuisine}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients Section */}
          {matchingIngredients.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Ingredient Guides
              </div>
              <div className="grid grid-cols-2 gap-2">
                {matchingIngredients.map((ing) => (
                  <div
                    key={ing.slug}
                    onClick={() => handleSelect(`/ingredients/${ing.slug}`)}
                    className="p-2.5 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 transition-all cursor-pointer group"
                  >
                    <h5 className="text-xs font-bold text-stone-900 group-hover:text-amber-800">
                      {ing.name} Recipes
                    </h5>
                    <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                      What can I cook with {ing.name.toLowerCase()}?
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Meal Plans Section */}
          {matchingMealPlans.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                7-Day Meal Plans
              </div>
              <div className="space-y-1.5">
                {matchingMealPlans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => handleSelect(`/meal-plans/${plan.slug}`)}
                    className="p-2.5 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-100 hover:border-blue-300 transition-all cursor-pointer"
                  >
                    <h5 className="text-xs font-bold text-blue-950">{plan.title}</h5>
                    <p className="text-[11px] text-blue-700/80 line-clamp-1">{plan.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles Section */}
          {matchingArticles.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                Guides & Articles
              </div>
              <div className="space-y-1.5">
                {matchingArticles.map((article) => (
                  <div
                    key={article.slug}
                    onClick={() => handleSelect(`/articles/${article.slug}`)}
                    className="p-2.5 rounded-xl bg-purple-50/50 hover:bg-purple-50 border border-purple-100 transition-all cursor-pointer"
                  >
                    <h5 className="text-xs font-bold text-purple-950">{article.title}</h5>
                    <p className="text-[11px] text-purple-700 line-clamp-1">{article.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>Search any keyword like "chicken", "eggs", "20 minutes", or "budget"</span>
          <span className="hidden sm:inline">Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};
