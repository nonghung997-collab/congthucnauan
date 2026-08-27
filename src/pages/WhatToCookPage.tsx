import React, { useEffect, useState } from 'react';
import { WhatToCookHub, Recipe } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RecipeCard } from '../components/RecipeCard';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  Sparkles, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  ChefHat, 
  ArrowRight,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { updateDocumentSeo, injectJsonLd, removeJsonLd, buildFaqSchema } from '../utils/seo';

interface WhatToCookPageProps {
  hub?: WhatToCookHub;
  allHubs: WhatToCookHub[];
  recipes: Recipe[];
  favorites: string[];
  onToggleFavorite: (slug: string) => void;
  onSelectRecipe: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const WhatToCookPage: React.FC<WhatToCookPageProps> = ({
  hub,
  allHubs,
  recipes,
  favorites,
  onToggleFavorite,
  onSelectRecipe,
  onNavigate
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (hub) {
      updateDocumentSeo({
        title: hub.title,
        description: hub.metaDescription,
        ogImage: hub.heroImage,
        ogType: 'article'
      });

      if (hub.faqs && hub.faqs.length > 0) {
        injectJsonLd(`jsonld-what-to-cook-${hub.slug}`, buildFaqSchema(hub.faqs));
      }
    } else {
      updateDocumentSeo({
        title: 'What to Cook Tonight: Fast & Easy Dinner Ideas',
        description: 'Instant inspiration when you do not know what to cook. Fast 20-minute dinners, high-protein meals, and cozy pantry recipes.',
        canonicalPath: '/what-to-cook'
      });
    }

    return () => {
      if (hub) removeJsonLd(`jsonld-what-to-cook-${hub.slug}`);
    };
  }, [hub]);

  // If viewing a specific hub (e.g. what-to-cook-tonight)
  if (hub) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { name: 'What to Cook', url: '/what-to-cook' },
            { name: hub.title, url: `/what-to-cook/${hub.slug}` }
          ]}
          onNavigate={onNavigate}
        />

        {/* Hero Header */}
        <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-white mb-10 shadow-xl">
          <div className="absolute inset-0 opacity-30">
            <img
              src={hub.heroImage}
              alt={hub.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />

          <div className="relative p-6 sm:p-12 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dinner Inspiration Guide</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight leading-tight">
              {hub.h1}
            </h1>

            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              {hub.intro}
            </p>
          </div>
        </div>

        {/* Key Culinary Advice Cards */}
        {hub.keyAdvice && hub.keyAdvice.length > 0 && (
          <div className="bg-amber-50 rounded-3xl p-6 sm:p-8 border border-amber-200 mb-10">
            <h3 className="text-lg font-bold text-amber-950 mb-3 font-serif flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-amber-700" />
              <span>Chef's Rapid Weeknight Strategy</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hub.keyAdvice.map((advice, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-amber-200/80 text-xs sm:text-sm text-stone-700 leading-relaxed">
                  <span className="font-bold text-amber-800 block mb-1">Rule 0{i + 1}</span>
                  {advice}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filtered Recipe Grid */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif mb-6">
            Recommended Meals ({recipes.length})
          </h2>

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
        </section>

        {/* AdSense Placement */}
        <AdPlaceholder format="horizontal" />

        {/* FAQs */}
        {hub.faqs && hub.faqs.length > 0 && (
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 mb-8">
            <h3 className="text-xl font-bold text-stone-900 font-serif mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              <span>Frequently Asked Questions</span>
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
  }

  // Directory of all "What to Cook" hubs
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'What to Cook', url: '/what-to-cook' }]} onNavigate={onNavigate} />

      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Instant Dinner Inspiration</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-serif tracking-tight">
          What to Cook Guides
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-2">
          Find the perfect meal solution for tonight based on your primary ingredient, time limit, or craving.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {allHubs.map((h) => (
          <div
            key={h.slug}
            onClick={() => onNavigate(`/what-to-cook/${h.slug}`)}
            className="bg-white rounded-3xl border border-stone-200 shadow-xs hover:shadow-lg hover:border-amber-400 transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
          >
            <div className="aspect-16/9 overflow-hidden bg-stone-100">
              <img
                src={h.heroImage}
                alt={h.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors font-serif">
                {h.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 line-clamp-2 mt-2 leading-relaxed">
                {h.intro}
              </p>
            </div>
            <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800">
              <span>Read Guide & Recipes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      <AdPlaceholder format="horizontal" />
    </div>
  );
};
