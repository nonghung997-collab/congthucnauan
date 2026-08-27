import React, { useEffect } from 'react';
import { IngredientHub } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Sparkles, ArrowRight, Package } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';

interface IngredientsIndexPageProps {
  hubs: IngredientHub[];
  onNavigate: (path: string) => void;
}

export const IngredientsIndexPage: React.FC<IngredientsIndexPageProps> = ({
  hubs,
  onNavigate
}) => {
  useEffect(() => {
    updateDocumentSeo({
      title: 'Browse Recipes by Ingredient - Smart Meal Planner',
      description: 'Explore recipes, storage hacks, cooking tips, and substitutions for top kitchen ingredients like chicken, eggs, rice, potatoes, and tomatoes.',
      canonicalPath: '/ingredients'
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Ingredient Guides', url: '/ingredients' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
          <Package className="w-3.5 h-3.5" />
          <span>Ingredient-Led Cooking Hubs</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-serif tracking-tight">
          What Can I Cook With...?
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-2">
          Select any pantry ingredient below to find instant recipes, smart storage techniques, and easy substitutions.
        </p>
      </div>

      {/* Ingredients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {hubs.map((hub) => (
          <div
            key={hub.slug}
            onClick={() => onNavigate(`/ingredients/${hub.slug}`)}
            className="bg-white rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-lg hover:border-emerald-400 transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="aspect-16/9 overflow-hidden bg-stone-100">
                <img
                  src={hub.heroImage}
                  alt={hub.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors font-serif">
                  {hub.name} Recipes & Guide
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 line-clamp-2 mt-2 leading-relaxed">
                  {hub.shortAnswer}
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
              <span>Explore {hub.name} Meals</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />
    </div>
  );
};
