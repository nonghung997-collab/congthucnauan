import React, { useState } from 'react';
import { Recipe, RecipeMatchResult, PantryItem } from '../types';
import { IngredientInputHero } from '../components/IngredientInputHero';
import { RecipeCard } from '../components/RecipeCard';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  Sparkles, 
  Clock, 
  HeartHandshake, 
  ChefHat, 
  Calendar, 
  ShoppingBag, 
  Leaf, 
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Package
} from 'lucide-react';
import { POPULAR_HERO_INGREDIENTS } from '../data/synonyms';

interface HomePageProps {
  userIngredients: string[];
  matchedResults: RecipeMatchResult[];
  popularRecipes: Recipe[];
  quickRecipes: Recipe[];
  healthyRecipes: Recipe[];
  budgetRecipes: Recipe[];
  pantryItems: PantryItem[];
  favorites: string[];
  onAddIngredient: (ing: string) => void;
  onRemoveIngredient: (ing: string) => void;
  onClearIngredients: () => void;
  onToggleFavorite: (slug: string) => void;
  onSelectRecipe: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  userIngredients,
  matchedResults,
  popularRecipes,
  quickRecipes,
  healthyRecipes,
  budgetRecipes,
  pantryItems,
  favorites,
  onAddIngredient,
  onRemoveIngredient,
  onClearIngredients,
  onToggleFavorite,
  onSelectRecipe,
  onNavigate
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What can I cook with the ingredients I currently have in my kitchen?',
      a: 'Simply type or click the ingredients you have on hand in the box above (for example: chicken, eggs, and rice). Our Smart Match Engine instantly normalizes your ingredients and ranks recipes by the highest match percentage, fewest missing items, and fastest cooking times.'
    },
    {
      q: 'How does Smart Meal Planner help reduce food waste?',
      a: 'By matching meals against items already in your pantry and prioritizing ingredients expiring in the next 1 to 3 days. Instead of buying new groceries that go bad, you cross-utilize your current ingredients across delicious weekday meals.'
    },
    {
      q: 'Can I generate a customized 7-Day Meal Plan?',
      a: 'Yes! Navigate to our 7-Day Planner tool where you can set your daily calorie goal (e.g. 1500, 1800, 2000 kcal), choose your dietary style (High Protein, Mediterranean, Budget Friendly), and auto-generate an organized weekly shopping list with one click.'
    },
    {
      q: 'Do I need to create an account or provide an email?',
      a: 'No account, password, or credit card is ever required. All your pantry items, saved favorite recipes, shopping lists, and meal plans are saved directly in your browser using local storage.'
    },
    {
      q: 'Are the nutrition and calorie estimates exact?',
      a: 'Nutrition values are estimated averages calculated per standard serving. Real nutritional content varies depending on specific grocery brands, precise ingredient weights, and preparation methods. Our estimates provide helpful guidance for balanced meal planning.'
    }
  ];

  const handleScrollToResults = () => {
    const el = document.getElementById('recipe-results-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Ingredient Match Tool */}
      <IngredientInputHero
        selectedIngredients={userIngredients}
        onAddIngredient={onAddIngredient}
        onRemoveIngredient={onRemoveIngredient}
        onClearAll={onClearIngredients}
        onSubmit={handleScrollToResults}
        totalMatchesCount={matchedResults.length}
      />

      {/* 2. Matched Recipes Section */}
      <section id="recipe-results-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-stone-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Smart Recipe Results</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
              {userIngredients.length > 0
                ? `Recipes You Can Make Right Now (${matchedResults.length})`
                : 'Top Recommended Recipes'}
            </h2>
            {userIngredients.length > 0 && (
              <p className="text-sm text-stone-500 mt-1">
                Sorted by ingredient match score and fewest missing items.
              </p>
            )}
          </div>

          <button
            onClick={() => onNavigate('/recipes')}
            className="text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View All 50+ Recipes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Recipe Grid */}
        {matchedResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedResults.slice(0, 6).map((item) => (
              <RecipeCard
                key={item.recipe.id}
                recipe={item.recipe}
                matchResult={userIngredients.length > 0 ? item : undefined}
                isFavorite={favorites.includes(item.recipe.slug)}
                onToggleFavorite={onToggleFavorite}
                onSelect={onSelectRecipe}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-stone-100 rounded-3xl border border-stone-200">
            <ChefHat className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-800">No exact recipe matches found</h3>
            <p className="text-sm text-stone-500 mt-1 max-w-md mx-auto">
              Try adding basic pantry staples like oil, garlic, or eggs to unlock more meal options!
            </p>
          </div>
        )}
      </section>

      {/* AdSense Placement 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <AdPlaceholder format="horizontal" />
      </div>

      {/* 3. How It Works Section */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Zero Guesswork • Maximum Flavor
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-serif">
              How Smart Meal Planner Works
            </h2>
            <p className="text-base text-stone-600 mt-2">
              Transform random fridge contents into restaurant-worthy meals in 5 simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Enter Ingredients',
                desc: 'Type what you have in your fridge, freezer, and pantry.',
                icon: Package
              },
              {
                step: '02',
                title: 'Instant Recipe Match',
                desc: 'Our engine finds recipes using 80–100% of your items.',
                icon: Sparkles
              },
              {
                step: '03',
                title: 'Cook With Guidance',
                desc: 'Follow step-by-step cooking mode with built-in timers.',
                icon: ChefHat
              },
              {
                step: '04',
                title: 'Build 7-Day Plan',
                desc: 'Generate balanced weekly meals matching your calorie goal.',
                icon: Calendar
              },
              {
                step: '05',
                title: 'Smart Grocery List',
                desc: 'Get a categorized list of only the missing items you need.',
                icon: ShoppingBag
              }
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="relative p-6 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-extrabold text-emerald-700 font-serif block mb-3">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-emerald-700 mb-3 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-stone-900 mb-1">{s.title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Quick Meals Section (< 20 mins) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
              <Clock className="w-4 h-4" />
              <span>Fast Weeknight Dinners</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
              Quick Meals (Under 20 Minutes)
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/quick-meals')}
            className="text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
          >
            <span>See All Fast Meals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickRecipes.slice(0, 3).map((recipe) => (
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

      {/* 5. Browse Recipes by Key Ingredient Hubs */}
      <section className="py-14 bg-stone-100/70 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Pantry-Led Cooking
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
              Explore Recipes by Core Ingredient
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Click any ingredient to browse targeted recipes, storage hacks, and substitution tips.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {POPULAR_HERO_INGREDIENTS.map((item) => (
              <div
                key={item.slug}
                onClick={() => onNavigate(`/ingredients/${item.slug}`)}
                className="p-4 rounded-2xl bg-white border border-stone-200/80 hover:border-emerald-500 hover:shadow-md transition-all text-center cursor-pointer group"
              >
                <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <h3 className="font-bold text-sm text-stone-900 group-hover:text-emerald-700">
                  {item.name}
                </h3>
                <span className="text-[11px] text-stone-400 font-medium">Browse Recipes →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Food Waste Reduction Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-gradient-to-br from-emerald-800 to-stone-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-4 border border-emerald-400/30">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>Waste Less • Save More</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif leading-tight">
              Eat Better While Slashing Your Food Waste
            </h2>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
              Track expiring groceries in your digital pantry. Our system automatically alerts you when chicken, produce, or herbs need to be used within 3 days and matches them into delicious dinners.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('/pantry')}
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm shadow-md transition-transform active:scale-95 cursor-pointer"
              >
                Open My Pantry Tracker
              </button>
              <button
                onClick={() => onNavigate('/meal-planner')}
                className="px-6 py-3 rounded-xl bg-stone-800/90 hover:bg-stone-800 border border-stone-700 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                Generate 7-Day Plan
              </button>
            </div>
          </div>

          {/* Feature highlights badge box */}
          <div className="bg-stone-950/60 backdrop-blur-md p-6 rounded-2xl border border-stone-700/80 max-w-sm w-full space-y-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Prioritize Expiring Foods</span>
                <span className="text-stone-400 text-xs">Cook with what spoils first.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Cross-Utilize Groceries</span>
                <span className="text-stone-400 text-xs">Use shared base ingredients across the week.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Zero Waste Shopping List</span>
                <span className="text-stone-400 text-xs">Buy only what is missing—no duplicates.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Homepage FAQ Accordion */}
      <section className="py-14 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-serif">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200 bg-stone-50/50 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-stone-900 hover:text-emerald-700 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
