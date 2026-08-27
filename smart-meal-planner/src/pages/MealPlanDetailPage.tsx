import React, { useEffect, useState } from 'react';
import { MealPlan, ShoppingItem, IngredientCategory } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  Calendar, 
  Flame, 
  Dumbbell, 
  ShoppingBag, 
  Copy, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { updateDocumentSeo, injectJsonLd, removeJsonLd, buildFaqSchema } from '../utils/seo';

interface MealPlanDetailPageProps {
  plan: MealPlan;
  onApplyPlanToPlanner: (plan: MealPlan) => void;
  onAddShoppingItems: (items: Omit<ShoppingItem, 'id'>[]) => void;
  onSelectRecipe: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const MealPlanDetailPage: React.FC<MealPlanDetailPageProps> = ({
  plan,
  onApplyPlanToPlanner,
  onAddShoppingItems,
  onSelectRecipe,
  onNavigate
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  useEffect(() => {
    updateDocumentSeo({
      title: `${plan.title} - Smart 7-Day Meal Plan`,
      description: `${plan.description} Target daily intake: ${plan.targetDailyCalories} kcal. Complete with categorized grocery shopping list.`,
      canonicalPath: `/meal-plans/${plan.slug}`
    });

    if (plan.faqs && plan.faqs.length > 0) {
      injectJsonLd(`jsonld-faq-${plan.slug}`, buildFaqSchema(plan.faqs));
    }

    return () => {
      removeJsonLd(`jsonld-faq-${plan.slug}`);
    };
  }, [plan]);

  const handleUsePlan = () => {
    onApplyPlanToPlanner(plan);
    setActionSuccess('Meal plan loaded into your interactive 7-Day Planner!');
    setTimeout(() => {
      setActionSuccess(null);
      onNavigate('/meal-planner');
    }, 1200);
  };

  const handleAddGroceryList = () => {
    if (!plan.groceryList) return;
    const itemsToAdd: Omit<ShoppingItem, 'id'>[] = [];
    Object.entries(plan.groceryList).forEach(([cat, list]) => {
      if (Array.isArray(list)) {
        list.forEach((name: string) => {
          itemsToAdd.push({
            name,
            quantity: 1,
            unit: 'pkg',
            category: (cat as IngredientCategory) || 'Pantry',
            checked: false,
            recipeSource: plan.title
          });
        });
      }
    });

    onAddShoppingItems(itemsToAdd);
    setActionSuccess(`Added ${itemsToAdd.length} grocery items to your Shopping List!`);
    setTimeout(() => setActionSuccess(null), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Curated Meal Plans', url: '/meal-plans' },
          { name: plan.title, url: `/meal-plans/${plan.slug}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-900 to-stone-900 rounded-3xl p-6 sm:p-10 text-white mb-8 shadow-xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>7-Day Structured Meal Blueprint</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight leading-tight">
          {plan.title}
        </h1>

        <p className="mt-3 text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          {plan.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 text-orange-400 font-bold bg-stone-950/40 px-3 py-1.5 rounded-xl border border-stone-700">
            <Flame className="w-4 h-4" />
            <span>Target {plan.targetDailyCalories} kcal / day</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold bg-stone-950/40 px-3 py-1.5 rounded-xl border border-stone-700">
            <Dumbbell className="w-4 h-4" />
            <span>{plan.dietaryTags.join(' • ')}</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleUsePlan}
            className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:scale-98 text-stone-950 font-extrabold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Open in Interactive Planner →</span>
          </button>

          {plan.groceryList && (
            <button
              type="button"
              onClick={handleAddGroceryList}
              className="px-5 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 border border-stone-600 text-white font-bold text-sm transition-colors cursor-pointer flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Export Shopping List</span>
            </button>
          )}
        </div>

        {actionSuccess && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-in fade-in duration-150">
            <CheckCircle2 className="w-4 h-4" />
            <span>{actionSuccess}</span>
          </div>
        )}
      </div>

      {/* 7-Day Day-by-Day Cards */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif mb-6">
          Day-by-Day Meal Schedule
        </h2>

        <div className="space-y-4">
          {plan.days.map((day, idx) => {
            const dayCalories = (day.breakfast?.calories || 0) + (day.lunch?.calories || 0) + (day.dinner?.calories || 0);
            const dayProtein = (day.breakfast?.protein || 0) + (day.lunch?.protein || 0) + (day.dinner?.protein || 0);

            return (
              <div
                key={day.dayName}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="md:w-32 shrink-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Day 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-extrabold text-stone-900">{day.dayName}</h3>
                  <span className="text-xs font-semibold text-stone-500 mt-1 block">
                    {dayCalories} kcal • {dayProtein}g protein
                  </span>
                </div>

                {/* 3 Meals */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
                  {[
                    { label: 'Breakfast', recipe: day.breakfast },
                    { label: 'Lunch', recipe: day.lunch },
                    { label: 'Dinner', recipe: day.dinner }
                  ].map((slot) => {
                    if (!slot.recipe) return null;
                    return (
                      <div
                        key={slot.label}
                        onClick={() => onSelectRecipe(slot.recipe!.slug)}
                        className="p-3 rounded-2xl bg-stone-50 hover:bg-emerald-50 border border-stone-100 hover:border-emerald-200 transition-all cursor-pointer group"
                      >
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400 block mb-1">
                          {slot.label}
                        </span>
                        <h4 className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-emerald-700 line-clamp-1">
                          {slot.recipe.name}
                        </h4>
                        <span className="text-[11px] text-stone-500 block mt-0.5">
                          {slot.recipe.totalTime}m • {slot.recipe.calories} kcal
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Categorized Grocery List */}
      {plan.groceryList && (
        <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-stone-200 gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                Weekly Grocery Master List
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                All base ingredients required to cook the entire 7-day schedule.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddGroceryList}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors cursor-pointer shadow-2xs self-start sm:self-auto"
            >
              + Add All to My Shopping List
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(plan.groceryList).map(([category, items]) => {
              if (!Array.isArray(items)) return null;
              return (
                <div key={category} className="bg-white p-4 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    {category}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {items.map((it: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />

      {/* FAQs */}
      {plan.faqs && plan.faqs.length > 0 && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 mb-8">
          <h3 className="text-xl font-bold text-stone-900 font-serif mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <span>Frequently Asked Questions</span>
          </h3>

          <div className="space-y-3">
            {plan.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200 bg-stone-50/50 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-stone-900 hover:text-emerald-700 cursor-pointer"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 transition-transform ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
