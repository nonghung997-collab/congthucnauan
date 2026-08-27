import React, { useState, useMemo } from 'react';
import { Recipe, DietaryTag, CuisineType, Difficulty, BudgetTier } from '../types';
import { RecipeCard } from '../components/RecipeCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Filter, Search, RotateCcw, Clock, Flame, Dumbbell, Sparkles } from 'lucide-react';

interface RecipesPageProps {
  recipes: Recipe[];
  favorites: string[];
  onToggleFavorite: (slug: string) => void;
  onSelectRecipe: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const RecipesPage: React.FC<RecipesPageProps> = ({
  recipes,
  favorites,
  onToggleFavorite,
  onSelectRecipe,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all');
  const [selectedDiet, setSelectedDiet] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedBudget, setSelectedBudget] = useState<string>('all');
  const [maxTime, setMaxTime] = useState<number>(60);
  const [maxCalories, setMaxCalories] = useState<number>(800);
  const [sortBy, setSortBy] = useState<'popular' | 'time' | 'calories' | 'protein'>('popular');

  const filteredRecipes = useMemo(() => {
    return recipes.filter((r) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = r.name.toLowerCase().includes(q);
        const matchesDesc = r.description.toLowerCase().includes(q);
        const matchesIng = r.ingredients.some((i) => i.name.toLowerCase().includes(q));
        const matchesTag = r.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesIng && !matchesTag) return false;
      }

      // Cuisine
      if (selectedCuisine !== 'all' && r.cuisine !== selectedCuisine) return false;

      // Diet
      if (selectedDiet !== 'all' && !r.dietaryTags.includes(selectedDiet as DietaryTag)) return false;

      // Difficulty
      if (selectedDifficulty !== 'all' && r.difficulty !== selectedDifficulty) return false;

      // Budget
      if (selectedBudget !== 'all' && r.budgetTier !== selectedBudget) return false;

      // Time & Calories
      if (r.totalTime > maxTime) return false;
      if (r.calories > maxCalories) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'time') return a.totalTime - b.totalTime;
      if (sortBy === 'calories') return a.calories - b.calories;
      if (sortBy === 'protein') return b.protein - a.protein;
      return 0; // Default popular order
    });
  }, [
    recipes,
    searchQuery,
    selectedCuisine,
    selectedDiet,
    selectedDifficulty,
    selectedBudget,
    maxTime,
    maxCalories,
    sortBy
  ]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCuisine('all');
    setSelectedDiet('all');
    setSelectedDifficulty('all');
    setSelectedBudget('all');
    setMaxTime(60);
    setMaxCalories(800);
    setSortBy('popular');
  };

  const cuisines: CuisineType[] = ['Asian', 'Italian', 'Mexican', 'Mediterranean', 'American', 'Vietnamese-inspired', 'Indian'];
  const diets: DietaryTag[] = ['Vegetarian', 'Vegan', 'Gluten-Free', 'High-Protein', 'Low-Calorie', 'Quick-Meal', 'One-Pot'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'All Recipes', url: '/recipes' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
          Browse All Recipes ({filteredRecipes.length})
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-1">
          Explore our complete collection of healthy, quick, and budget-friendly home-cooked recipes.
        </p>
      </div>

      {/* Filter and Search Bar Container */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200 shadow-xs mb-8 space-y-4">
        {/* Top Search & Sort Row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by recipe name, ingredient (e.g. chicken, eggs), or keyword..."
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-stone-200 focus:border-emerald-600 outline-none text-sm bg-stone-50/50 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-500 whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="h-11 px-3 rounded-xl border border-stone-200 bg-white text-xs font-semibold text-stone-800 outline-none focus:border-emerald-600"
            >
              <option value="popular">Recommended</option>
              <option value="time">Fastest Cooking Time</option>
              <option value="calories">Lowest Calories</option>
              <option value="protein">Highest Protein</option>
            </select>

            <button
              type="button"
              onClick={handleResetFilters}
              title="Reset all filters"
              className="h-11 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="pt-3 border-t border-stone-100 space-y-3">
          {/* Cuisine Row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="font-bold text-stone-400 uppercase text-[10px] tracking-wider shrink-0">Cuisine:</span>
            <button
              onClick={() => setSelectedCuisine('all')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer shrink-0 ${
                selectedCuisine === 'all' ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All
            </button>
            {cuisines.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCuisine(selectedCuisine === c ? 'all' : c)}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer shrink-0 ${
                  selectedCuisine === c ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Diet Row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="font-bold text-stone-400 uppercase text-[10px] tracking-wider shrink-0">Diet:</span>
            <button
              onClick={() => setSelectedDiet('all')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer shrink-0 ${
                selectedDiet === 'all' ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All Diets
            </button>
            {diets.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDiet(selectedDiet === d ? 'all' : d)}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer shrink-0 ${
                  selectedDiet === d ? 'bg-emerald-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Sliders: Max Time & Calories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-3 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
              <Clock className="w-4 h-4 text-stone-400 shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                  <span>Max Cooking Time</span>
                  <span className="text-emerald-700 font-bold">{maxTime} minutes</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={maxTime}
                  onChange={(e) => setMaxTime(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-stone-200 rounded-lg"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
              <Flame className="w-4 h-4 text-orange-500 shrink-0" />
              <div className="flex-1">
                <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                  <span>Max Calories</span>
                  <span className="text-orange-600 font-bold">{maxCalories} kcal</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="800"
                  step="25"
                  value={maxCalories}
                  onChange={(e) => setMaxCalories(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer h-1.5 bg-stone-200 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favorites.includes(recipe.slug)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectRecipe}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-3xl border border-stone-200 p-8">
          <Filter className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-stone-800">No recipes matched your active filters</h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-sm mx-auto">
            Try adjusting your maximum cooking time, calorie limit, or resetting the search query.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer shadow-xs"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />
    </div>
  );
};
