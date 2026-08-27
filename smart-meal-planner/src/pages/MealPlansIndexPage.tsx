import React, { useEffect } from 'react';
import { MealPlan } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Calendar, Flame, Dumbbell, ArrowRight } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';

interface MealPlansIndexPageProps {
  mealPlans: MealPlan[];
  onNavigate: (path: string) => void;
}

export const MealPlansIndexPage: React.FC<MealPlansIndexPageProps> = ({
  mealPlans,
  onNavigate
}) => {
  useEffect(() => {
    updateDocumentSeo({
      title: 'Curated 7-Day Meal Plans - Smart Meal Planner',
      description: 'Explore balanced 7-day meal plans for high-protein diets, budget-friendly cooking, and healthy Mediterranean lifestyles. Includes complete shopping lists.',
      canonicalPath: '/meal-plans'
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Meal Plans', url: '/meal-plans' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>Chef-Curated Weekly Blueprints</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-serif tracking-tight">
          7-Day Meal Plans
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-2">
          Structured, dietitian-approved weekly meal plans complete with nutrition breakdowns, prep tips, and automated grocery lists.
        </p>
      </div>

      {/* Grid of Meal Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {mealPlans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => onNavigate(`/meal-plans/${plan.slug}`)}
            className="bg-white rounded-3xl border border-stone-200 shadow-xs hover:shadow-lg hover:border-emerald-400 transition-all p-6 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 inline-block mb-3">
                {plan.targetDietary}
              </span>
              <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors font-serif">
                {plan.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 line-clamp-3 mt-2 leading-relaxed">
                {plan.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs font-bold text-orange-600">
                <Flame className="w-4 h-4" />
                <span>{plan.totalCaloriesAvg} kcal / day</span>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                <span>View Plan</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />
    </div>
  );
};
