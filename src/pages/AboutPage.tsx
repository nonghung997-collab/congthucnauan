import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ChefHat, ShieldCheck, Heart, Sparkles, Leaf, Users, CheckCircle2 } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updateDocumentSeo({
      title: 'About Us & Editorial Standards - Smart Meal Planner',
      description: 'Learn about our mission to help home cooks Cook Smarter, Waste Less, and Eat Better. Discover our culinary standards and zero-waste algorithms.',
      canonicalPath: '/about'
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
          <ChefHat className="w-3.5 h-3.5" />
          <span>Our Mission & Culinary Philosophy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-serif tracking-tight">
          Cook Smarter. Waste Less. Eat Better.
        </h1>
        <p className="text-base sm:text-lg text-stone-600 mt-3">
          We built Smart Meal Planner to solve the everyday dilemma: "What can I cook with what I have right now?"
        </p>
      </div>

      {/* Story & Philosophy */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-8 text-stone-700 leading-relaxed text-sm sm:text-base mb-10">
        <div>
          <h2 className="text-2xl font-extrabold text-stone-900 font-serif mb-3">
            Why Smart Meal Planner Exists
          </h2>
          <p className="mb-4">
            Every week, millions of households throw away perfectly good produce, herbs, and dairy simply because they do not know what to make with random ingredients in their fridge. At the same time, ordering delivery or takeout adds up to thousands of dollars in annual expenses.
          </p>
          <p>
            Smart Meal Planner combines an intelligent ingredient normalization engine with tested recipes to give you immediate dinner solutions without needing a trip to the supermarket.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <Leaf className="w-6 h-6 text-emerald-700 mb-2" />
            <h3 className="font-bold text-stone-900 mb-1">Zero Food Waste</h3>
            <p className="text-xs text-stone-600">
              We prioritize ingredients that spoil fast so you save money and protect the planet.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <Sparkles className="w-6 h-6 text-amber-700 mb-2" />
            <h3 className="font-bold text-stone-900 mb-1">Practical Cooking</h3>
            <p className="text-xs text-stone-600">
              Under 30-minute meals with simple pantry staples and realistic ingredient substitutions.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
            <ShieldCheck className="w-6 h-6 text-blue-700 mb-2" />
            <h3 className="font-bold text-stone-900 mb-1">Privacy First</h3>
            <p className="text-xs text-stone-600">
              No account creation, passwords, or tracking cookies required. Your pantry stays in your browser.
            </p>
          </div>
        </div>

        {/* Editorial Standards */}
        <div className="pt-4 border-t border-stone-100">
          <h2 className="text-2xl font-extrabold text-stone-900 font-serif mb-3">
            Editorial & Nutrition Standards
          </h2>
          <p className="mb-3">
            Every recipe published on Smart Meal Planner is structured with precise ingredient quantities, step-by-step instructions, and estimated nutritional values (calories, protein, carbs, and fat).
          </p>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Standardized portion sizes (servings scalable with one click).</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Real-world pantry synonyms for intuitive fuzzy matching.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Accessible substitutions for common food allergies and dietary lifestyles.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
