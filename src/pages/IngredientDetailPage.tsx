import React, { useEffect, useState } from 'react';
import { IngredientHub, Recipe } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RecipeCard } from '../components/RecipeCard';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  Sparkles, 
  Package, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Flame, 
  Lightbulb, 
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { updateDocumentSeo, injectJsonLd, removeJsonLd, buildFaqSchema } from '../utils/seo';

interface IngredientDetailPageProps {
  hub: IngredientHub;
  recipes: Recipe[];
  favorites: string[];
  onToggleFavorite: (slug: string) => void;
  onSelectRecipe: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const IngredientDetailPage: React.FC<IngredientDetailPageProps> = ({
  hub,
  recipes,
  favorites,
  onToggleFavorite,
  onSelectRecipe,
  onNavigate
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    updateDocumentSeo({
      title: hub.title,
      description: hub.metaDescription,
      ogImage: hub.heroImage,
      ogType: 'article'
    });

    if (hub.faqs && hub.faqs.length > 0) {
      injectJsonLd(`jsonld-faq-${hub.slug}`, buildFaqSchema(hub.faqs));
    }

    return () => {
      removeJsonLd(`jsonld-faq-${hub.slug}`);
    };
  }, [hub]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Ingredients', url: '/ingredients' },
          { name: hub.name, url: `/ingredients/${hub.slug}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-white mb-10 shadow-xl">
        <div className="absolute inset-0 opacity-30">
          <img
            src={hub.heroImage}
            alt={hub.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />

        <div className="relative p-6 sm:p-12 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pantry Ingredient Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight leading-tight">
            {hub.h1}
          </h1>

          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            {hub.shortAnswer}
          </p>

          <div className="mt-6 flex items-center gap-4 text-xs text-stone-400">
            <span>{recipes.length} Featured Recipes</span>
            <span>•</span>
            <span>Nutrition & Storage Guide</span>
          </div>
        </div>
      </div>

      {/* 2-Column Culinary Tips & Substitutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Storage Hacks */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <Package className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">
              Storage & Shelf-Life Tips
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
            {hub.storageTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cooking Hacks */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
              <Lightbulb className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">
              Chef Cooking Hacks
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
            {hub.cookingTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Substitutions Guide Table */}
      {hub.substitutions && hub.substitutions.length > 0 && (
        <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200 mb-12">
          <h3 className="text-xl font-bold text-stone-900 font-serif mb-4 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-emerald-700" />
            <span>Best Substitutions for {hub.name}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {hub.substitutions.map((sub, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-white border border-stone-200 text-xs">
                <span className="font-bold text-stone-900 block text-sm">{sub.original}</span>
                <span className="text-emerald-700 font-semibold mt-1 block">↳ Swap: {sub.substitute}</span>
                {sub.note && <p className="text-stone-500 text-[11px] mt-1">{sub.note}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recipes Matching this Ingredient */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
              Delicious {hub.name} Recipes ({recipes.length})
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              Tested home-cooked recipes featuring {hub.name.toLowerCase()} as a primary ingredient.
            </p>
          </div>
        </div>

        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
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
          <div className="p-8 text-center bg-white rounded-3xl border border-stone-200">
            <p className="text-stone-500 text-sm">More recipes for this ingredient are on the way!</p>
          </div>
        )}
      </section>

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />

      {/* FAQ Accordion */}
      {hub.faqs && hub.faqs.length > 0 && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 mb-8">
          <h3 className="text-xl font-bold text-stone-900 font-serif mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <span>Frequently Asked Questions About {hub.name}</span>
          </h3>

          <div className="space-y-3">
            {hub.faqs.map((faq, idx) => {
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
