import React, { useEffect } from 'react';
import { Recipe } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RecipeCard } from '../components/RecipeCard';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { Sparkles, Clock, Flame, DollarSign } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';

interface ClusterCollectionPageProps {
  type: 'quick' | 'healthy' | 'budget';
  recipes: Recipe[];
  favorites: string[];
  onToggleFavorite: (slug: string) => void;
  onSelectRecipe: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const ClusterCollectionPage: React.FC<ClusterCollectionPageProps> = ({
  type,
  recipes,
  favorites,
  onToggleFavorite,
  onSelectRecipe,
  onNavigate
}) => {
  const metaConfig = {
    quick: {
      title: 'Quick Meals: Delicious Dinners Under 20 Minutes',
      desc: 'Fast, healthy, and easy dinners ready in 20 minutes or less with simple pantry ingredients.',
      h1: 'Quick Meals (Under 20 Mins)',
      badge: 'Fast & Easy',
      path: '/quick-meals',
      icon: Clock,
      themeColor: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    healthy: {
      title: 'Healthy & High-Protein Meal Ideas',
      desc: 'Nutrient-rich, calorie-conscious meals packed with clean protein and fresh produce.',
      h1: 'Healthy & Balanced Meals',
      badge: 'Nutrient Rich',
      path: '/healthy-meals',
      icon: Sparkles,
      themeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    budget: {
      title: 'Budget-Friendly Meals: Cheap & Delicious Dinners',
      desc: 'Satisfying meals made with low-cost pantry essentials without sacrificing flavor.',
      h1: 'Budget-Friendly Meals',
      badge: 'Affordable Cooking',
      path: '/budget-meals',
      icon: DollarSign,
      themeColor: 'bg-blue-100 text-blue-900 border-blue-300'
    }
  }[type];

  useEffect(() => {
    updateDocumentSeo({
      title: metaConfig.title,
      description: metaConfig.desc,
      canonicalPath: metaConfig.path
    });
  }, [type]);

  const Icon = metaConfig.icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: metaConfig.h1, url: metaConfig.path }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3 border ${metaConfig.themeColor}`}>
          <Icon className="w-3.5 h-3.5" />
          <span>{metaConfig.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-serif tracking-tight">
          {metaConfig.h1}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-2">
          {metaConfig.desc}
        </p>
      </div>

      {/* Grid of recipes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />
    </div>
  );
};
