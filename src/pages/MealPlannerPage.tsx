import React, { useState } from 'react';
import { Recipe, MealPlan, MealPlanDay, ShoppingItem } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  Calendar, 
  Sparkles, 
  ShoppingBag, 
  RotateCw, 
  Flame, 
  Dumbbell, 
  Clock, 
  Check, 
  Copy, 
  Printer, 
  ChevronRight,
  ArrowRight,
  Plus,
  Trash2,
  X
} from 'lucide-react';
import { getAllRecipes } from '../data/recipes';

interface MealPlannerPageProps {
  currentMealPlan: MealPlan;
  onUpdateMealPlan: (plan: MealPlan) => void;
  onAddShoppingItems: (items: Omit<ShoppingItem, 'id'>[]) => void;
  onSelectRecipe: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const MealPlannerPage: React.FC<MealPlannerPageProps> = ({
  currentMealPlan,
  onUpdateMealPlan,
  onAddShoppingItems,
  onSelectRecipe,
  onNavigate
}) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [isSwapModalOpen, setIsSwapModalOpen] = useState<boolean>(false);
  const [swapTarget, setSwapTarget] = useState<{ dayIndex: number; mealType: 'breakfast' | 'lunch' | 'dinner' } | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [shoppingNotification, setShoppingNotification] = useState<string | null>(null);

  const allRecipes = getAllRecipes();
  const selectedDay = currentMealPlan.days[selectedDayIndex] || currentMealPlan.days[0];

  // Helper to open meal swap picker
  const handleOpenSwap = (dayIndex: number, mealType: 'breakfast' | 'lunch' | 'dinner') => {
    setSwapTarget({ dayIndex, mealType });
    setIsSwapModalOpen(true);
  };

  // Execute meal swap
  const handleSelectSwapRecipe = (newRecipe: Recipe) => {
    if (!swapTarget) return;
    const { dayIndex, mealType } = swapTarget;

    const updatedDays = [...currentMealPlan.days];
    const targetDay = { ...updatedDays[dayIndex] };

    targetDay[mealType] = newRecipe;
    updatedDays[dayIndex] = targetDay;

    onUpdateMealPlan({
      ...currentMealPlan,
      days: updatedDays
    });

    setIsSwapModalOpen(false);
    setSwapTarget(null);
  };

  // Auto-generate shopping list from 7-day meal plan
  const handleExportShoppingList = () => {
    const itemsToAdd: Omit<ShoppingItem, 'id'>[] = [];

    currentMealPlan.days.forEach((day) => {
      [day.breakfast, day.lunch, day.dinner].forEach((recipe) => {
        if (!recipe) return;
        recipe.ingredients.forEach((ing) => {
          itemsToAdd.push({
            name: ing.name,
            quantity: ing.amount,
            unit: ing.unit,
            category: ing.category || 'Pantry',
            checked: false,
            recipeSource: `${day.dayName} - ${recipe.name}`
          });
        });
      });
    });

    onAddShoppingItems(itemsToAdd);
    setShoppingNotification(`Generated ${itemsToAdd.length} shopping list items from your 7-Day Plan!`);
    setTimeout(() => setShoppingNotification(null), 4000);
  };

  // Copy plain text meal plan to clipboard
  const handleCopyPlan = () => {
    let text = `📅 7-DAY MEAL PLAN (${currentMealPlan.title})\n`;
    text += `Target Daily Calories: ${currentMealPlan.targetDailyCalories} kcal\n\n`;

    currentMealPlan.days.forEach((d) => {
      text += `--- ${d.dayName} ---\n`;
      if (d.breakfast) text += `🍳 Breakfast: ${d.breakfast.name} (${d.breakfast.calories} kcal)\n`;
      if (d.lunch) text += `🥗 Lunch: ${d.lunch.name} (${d.lunch.calories} kcal)\n`;
      if (d.dinner) text += `🍲 Dinner: ${d.dinner.name} (${d.dinner.calories} kcal)\n\n`;
    });

    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  const calculateDayCalories = (day: MealPlanDay) => {
    return (day.breakfast?.calories || 0) + (day.lunch?.calories || 0) + (day.dinner?.calories || 0);
  };

  const calculateDayProtein = (day: MealPlanDay) => {
    return (day.breakfast?.protein || 0) + (day.lunch?.protein || 0) + (day.dinner?.protein || 0);
  };

  const calculateDayCarbs = (day: MealPlanDay) => {
    return (day.breakfast?.carbs || 0) + (day.lunch?.carbs || 0) + (day.dinner?.carbs || 0);
  };

  const calculateDayFat = (day: MealPlanDay) => {
    return (day.breakfast?.fat || 0) + (day.lunch?.fat || 0) + (day.dinner?.fat || 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: '7-Day Meal Planner', url: '/meal-planner' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Interactive Weekly Blueprint</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
            Interactive 7-Day Meal Planner
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-1">
            Customize daily breakfast, lunch, and dinner. Track your macros and auto-generate an organized grocery list.
          </p>
        </div>

        {/* Global Plan Actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleExportShoppingList}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Auto-Generate Shopping List</span>
          </button>

          <button
            type="button"
            onClick={handleCopyPlan}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            <Copy className="w-4 h-4" />
            <span>{copiedNotification ? 'Copied!' : 'Copy Plan'}</span>
          </button>
        </div>
      </div>

      {shoppingNotification && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-sm font-bold flex items-center justify-between animate-in fade-in duration-200">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-700" />
            <span>{shoppingNotification}</span>
          </div>
          <button
            onClick={() => onNavigate('/shopping-list')}
            className="text-xs bg-emerald-700 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-800 transition-colors cursor-pointer font-extrabold"
          >
            View Shopping List →
          </button>
        </div>
      )}

      {/* Day Selector Ribbon (Monday through Sunday) */}
      <div className="grid grid-cols-7 gap-1.5 sm:gap-2 mb-8 bg-white p-2 rounded-2xl border border-stone-200 shadow-xs overflow-x-auto">
        {currentMealPlan.days.map((day, idx) => {
          const isSelected = selectedDayIndex === idx;
          const dayCals = calculateDayCalories(day);
          return (
            <button
              key={day.dayName}
              type="button"
              onClick={() => setSelectedDayIndex(idx)}
              className={`p-2 sm:p-3 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-sm font-bold'
                  : 'hover:bg-stone-100 text-stone-700'
              }`}
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-80">
                {day.dayName.slice(0, 3)}
              </span>
              <span className="text-xs sm:text-sm font-extrabold mt-0.5">
                {day.dayName.slice(0, 3)}
              </span>
              <span className="text-[10px] mt-1 opacity-75 font-mono">
                {dayCals} kcal
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Day View */}
      {selectedDay && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-100 gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Day {selectedDayIndex + 1} of 7
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
                {selectedDay.dayName} Meal Blueprint
              </h2>
            </div>

            {/* Daily Nutrition Macro Summary */}
            <div className="flex items-center gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <div className="text-center px-2">
                <span className="text-[10px] uppercase font-bold text-stone-400 block">Total</span>
                <span className="text-sm font-extrabold text-stone-900 font-mono">
                  {calculateDayCalories(selectedDay)} <span className="text-[10px] font-normal text-stone-500">kcal</span>
                </span>
              </div>
              <div className="w-px h-6 bg-stone-200" />
              <div className="text-center px-2">
                <span className="text-[10px] uppercase font-bold text-emerald-600 block">Protein</span>
                <span className="text-sm font-extrabold text-emerald-800 font-mono">
                  {calculateDayProtein(selectedDay)}g
                </span>
              </div>
              <div className="w-px h-6 bg-stone-200" />
              <div className="text-center px-2">
                <span className="text-[10px] uppercase font-bold text-amber-600 block">Carbs</span>
                <span className="text-sm font-extrabold text-amber-800 font-mono">
                  {calculateDayCarbs(selectedDay)}g
                </span>
              </div>
              <div className="w-px h-6 bg-stone-200" />
              <div className="text-center px-2">
                <span className="text-[10px] uppercase font-bold text-rose-600 block">Fat</span>
                <span className="text-sm font-extrabold text-rose-800 font-mono">
                  {calculateDayFat(selectedDay)}g
                </span>
              </div>
            </div>
          </div>

          {/* 3 Meals: Breakfast, Lunch, Dinner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: 'breakfast' as const, label: 'Breakfast', recipe: selectedDay.breakfast, color: 'border-amber-200 bg-amber-50/30' },
              { type: 'lunch' as const, label: 'Lunch', recipe: selectedDay.lunch, color: 'border-emerald-200 bg-emerald-50/30' },
              { type: 'dinner' as const, label: 'Dinner', recipe: selectedDay.dinner, color: 'border-blue-200 bg-blue-50/30' }
            ].map(({ type, label, recipe, color }) => (
              <div
                key={type}
                className={`rounded-2xl border p-5 flex flex-col justify-between ${color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-stone-500">
                      {label}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleOpenSwap(selectedDayIndex, type)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer"
                    >
                      <RotateCw className="w-3 h-3" />
                      <span>Swap Meal</span>
                    </button>
                  </div>

                  {recipe ? (
                    <div>
                      <div className="aspect-16/10 rounded-xl overflow-hidden mb-3 bg-stone-100">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4
                        onClick={() => onSelectRecipe(recipe.slug)}
                        className="text-base font-bold text-stone-900 hover:text-emerald-700 cursor-pointer font-serif line-clamp-1"
                      >
                        {recipe.name}
                      </h4>
                      <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                        {recipe.description}
                      </p>

                      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-stone-200/60 text-xs font-semibold text-stone-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-stone-400" />
                          {recipe.totalTime}m
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-orange-600 font-bold">
                          <Flame className="w-3.5 h-3.5" />
                          {recipe.calories} kcal
                        </span>
                        <span>•</span>
                        <span className="text-emerald-700 font-bold">
                          {recipe.protein}g protein
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <p className="text-xs text-stone-400">No meal planned yet</p>
                      <button
                        onClick={() => handleOpenSwap(selectedDayIndex, type)}
                        className="mt-2 text-xs font-bold text-emerald-600 underline cursor-pointer"
                      >
                        Select a Recipe
                      </button>
                    </div>
                  )}
                </div>

                {recipe && (
                  <button
                    type="button"
                    onClick={() => onSelectRecipe(recipe.slug)}
                    className="mt-4 w-full py-2 rounded-xl bg-white border border-stone-200 hover:border-emerald-400 text-stone-800 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
                  >
                    <span>View Recipe Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />

      {/* Swap Recipe Modal */}
      {isSwapModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-stone-200 max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-150">
            <div className="p-5 border-b border-stone-100 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-serif">
                  Swap {swapTarget?.mealType} Recipe
                </h3>
                <p className="text-xs text-stone-500">
                  Pick a recipe to replace your current plan selection.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSwapModalOpen(false)}
                className="p-2 rounded-full text-stone-400 hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto divide-y divide-stone-100 flex-1">
              {allRecipes.map((r) => (
                <div
                  key={r.id}
                  onClick={() => handleSelectSwapRecipe(r)}
                  className="py-3 flex items-center justify-between gap-4 hover:bg-stone-50 p-3 rounded-2xl cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-stone-900">{r.name}</h4>
                      <span className="text-xs text-stone-500">
                        {r.totalTime}m • {r.calories} kcal • {r.protein}g protein
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
