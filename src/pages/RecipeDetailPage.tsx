import React, { useState, useEffect } from 'react';
import { Recipe, PantryItem, ShoppingItem } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { RecipeCard } from '../components/RecipeCard';
import { CookingModeModal } from '../components/CookingModeModal';
import { 
  Clock, 
  Flame, 
  Dumbbell, 
  Users, 
  Bookmark, 
  Sparkles, 
  Plus, 
  Minus, 
  Check, 
  ShoppingBag, 
  Play, 
  ChevronDown,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Share2,
  CheckCircle2
} from 'lucide-react';
import { injectJsonLd, removeJsonLd, buildRecipeSchema, updateDocumentSeo } from '../utils/seo';
import { normalizeIngredient } from '../data/synonyms';

interface RecipeDetailPageProps {
  recipe: Recipe;
  relatedRecipes: Recipe[];
  pantryItems: PantryItem[];
  favorites: string[];
  onToggleFavorite: (slug: string) => void;
  onAddShoppingItem: (item: Omit<ShoppingItem, 'id'>) => void;
  onSelectRecipe: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({
  recipe,
  relatedRecipes,
  pantryItems,
  favorites,
  onToggleFavorite,
  onAddShoppingItem,
  onSelectRecipe,
  onNavigate
}) => {
  const [servings, setServings] = useState<number>(recipe.servings || 4);
  const [isCookingModeOpen, setIsCookingModeOpen] = useState<boolean>(false);
  const [checkedSteps, setCheckedSteps] = useState<number[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [addedToListMessage, setAddedToListMessage] = useState<string | null>(null);

  const isFavorite = favorites.includes(recipe.slug);

  // SEO & JSON-LD injection
  useEffect(() => {
    updateDocumentSeo({
      title: `${recipe.name} Recipe - Ready in ${recipe.totalTime} mins`,
      description: `${recipe.description} Complete with step-by-step instructions, nutrition breakdown, and ingredient substitutions.`,
      ogImage: recipe.image,
      ogType: 'article'
    });

    injectJsonLd(`jsonld-recipe-${recipe.slug}`, buildRecipeSchema(recipe));

    return () => {
      removeJsonLd(`jsonld-recipe-${recipe.slug}`);
    };
  }, [recipe]);

  // Scaling calculation multiplier
  const scaleMultiplier = servings / (recipe.servings || 4);

  // Check pantry matching for ingredients
  const normalizedPantryNames = pantryItems.map((p) => normalizeIngredient(p.name));

  const ingredientStatuses = recipe.ingredients.map((ing) => {
    const ingNorm = ing.normalizedName ? normalizeIngredient(ing.normalizedName) : normalizeIngredient(ing.name);
    const inPantry = normalizedPantryNames.some(
      (pName) => pName === ingNorm || pName.includes(ingNorm) || ingNorm.includes(pName)
    );
    const scaledAmount = Number((ing.amount * scaleMultiplier).toFixed(2)).toString().replace(/\.00$/, '');
    return {
      ...ing,
      scaledAmount,
      inPantry
    };
  });

  const missingIngredients = ingredientStatuses.filter((i) => !i.inPantry);

  const handleAddAllMissingToShoppingList = () => {
    missingIngredients.forEach((item) => {
      onAddShoppingItem({
        name: item.name,
        quantity: Number(item.scaledAmount) || 1,
        unit: item.unit,
        category: item.category || 'Pantry',
        checked: false,
        recipeSource: recipe.name
      });
    });
    setAddedToListMessage(`Added ${missingIngredients.length} item(s) to your Shopping List!`);
    setTimeout(() => setAddedToListMessage(null), 4000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.name,
          text: recipe.description,
          url: window.location.href
        });
      } catch (err) {
        // Ignored
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setAddedToListMessage('Recipe link copied to clipboard!');
      setTimeout(() => setAddedToListMessage(null), 3000);
    }
  };

  const toggleStep = (stepNumber: number) => {
    if (checkedSteps.includes(stepNumber)) {
      setCheckedSteps(checkedSteps.filter((s) => s !== stepNumber));
    } else {
      setCheckedSteps([...checkedSteps, stepNumber]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Recipes', url: '/recipes' },
          { name: recipe.cuisine, url: `/recipes?cuisine=${recipe.cuisine}` },
          { name: recipe.name, url: `/recipes/${recipe.slug}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Section */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
            {recipe.cuisine}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-700">
            {recipe.difficulty}
          </span>
          {recipe.dietaryTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-serif tracking-tight leading-tight">
          {recipe.name}
        </h1>

        <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
          {recipe.description}
        </p>

        {/* Quick Action Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onToggleFavorite(recipe.slug)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
              isFavorite
                ? 'bg-rose-50 border-rose-200 text-rose-600'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-rose-600' : ''}`} />
            <span>{isFavorite ? 'Saved in Favorites' : 'Save to Favorites'}</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-stone-400" />
            <span>Share Recipe</span>
          </button>

          <button
            type="button"
            onClick={() => setIsCookingModeOpen(true)}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-transform active:scale-95 cursor-pointer ml-auto"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Start Cooking Mode 🚀</span>
          </button>
        </div>

        {addedToListMessage && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2 animate-in fade-in duration-150">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>{addedToListMessage}</span>
          </div>
        )}
      </div>

      {/* Hero Image & Nutrition Fast Bar */}
      <div className="rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 mb-8 shadow-sm">
        <div className="aspect-16/9 sm:aspect-21/9 w-full overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 6-Metric Stat Ribbon */}
        <div className="grid grid-cols-3 sm:grid-cols-6 divide-x divide-stone-200 bg-stone-50 text-center py-4 px-2 border-t border-stone-200">
          <div className="p-2">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-stone-400">Prep</span>
            <span className="text-sm sm:text-base font-extrabold text-stone-800">{recipe.prepTime}m</span>
          </div>
          <div className="p-2">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-stone-400">Cook</span>
            <span className="text-sm sm:text-base font-extrabold text-stone-800">{recipe.cookTime}m</span>
          </div>
          <div className="p-2">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-stone-400">Total</span>
            <span className="text-sm sm:text-base font-extrabold text-stone-800">{recipe.totalTime}m</span>
          </div>
          <div className="p-2">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-stone-400">Calories</span>
            <span className="text-sm sm:text-base font-extrabold text-orange-600">
              {Math.round(recipe.calories * scaleMultiplier)} kcal
            </span>
          </div>
          <div className="p-2">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-stone-400">Protein</span>
            <span className="text-sm sm:text-base font-extrabold text-emerald-700">
              {Math.round(recipe.protein * scaleMultiplier)}g
            </span>
          </div>
          <div className="p-2">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-stone-400">Difficulty</span>
            <span className="text-sm sm:text-base font-extrabold text-stone-800">{recipe.difficulty}</span>
          </div>
        </div>
      </div>

      {/* Main 2-Column Content Grid: Ingredients vs Instructions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left Column: Scalable Ingredients (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs sticky top-20">
            {/* Servings Scaler Header */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div>
                <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                  <span>Ingredients</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                    {recipe.ingredients.length}
                  </span>
                </h2>
                <span className="text-xs text-stone-500">Adjust servings below:</span>
              </div>

              {/* - / + Scaler */}
              <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-xl border border-stone-200">
                <button
                  type="button"
                  onClick={() => setServings(Math.max(1, servings - 1))}
                  aria-label="Decrease servings"
                  className="w-7 h-7 rounded-lg bg-white hover:bg-stone-200 flex items-center justify-center text-stone-800 font-bold transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-bold text-sm text-stone-900">
                  {servings}
                </span>
                <button
                  type="button"
                  onClick={() => setServings(Math.min(12, servings + 1))}
                  aria-label="Increase servings"
                  className="w-7 h-7 rounded-lg bg-white hover:bg-stone-200 flex items-center justify-center text-stone-800 font-bold transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Ingredient List with Pantry matching indicators */}
            <div className="divide-y divide-stone-100 py-2">
              {ingredientStatuses.map((ing, idx) => (
                <div
                  key={idx}
                  className="py-3 flex items-start justify-between text-sm gap-2"
                >
                  <div className="flex items-start gap-2.5">
                    <div
                      className={`w-4 h-4 rounded-full mt-0.5 shrink-0 flex items-center justify-center text-[10px] ${
                        ing.inPantry
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                      title={ing.inPantry ? 'In your pantry!' : 'Missing item'}
                    >
                      {ing.inPantry ? '✓' : '•'}
                    </div>
                    <div>
                      <span className="font-semibold text-stone-900">{ing.name}</span>
                      {ing.notes && (
                        <span className="block text-xs text-stone-400 italic">({ing.notes})</span>
                      )}
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold text-stone-700 shrink-0">
                    {ing.scaledAmount} {ing.unit}
                  </span>
                </div>
              ))}
            </div>

            {/* Missing items helper & Shopping List CTA */}
            {missingIngredients.length > 0 && (
              <div className="mt-4 pt-4 border-t border-stone-100">
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/80 mb-3 text-xs text-amber-900">
                  <span className="font-bold block mb-0.5">
                    You are missing {missingIngredients.length} item{missingIngredients.length > 1 ? 's' : ''}:
                  </span>
                  <span className="text-amber-800">
                    {missingIngredients.map((i) => i.name).join(', ')}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleAddAllMissingToShoppingList}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-emerald-400" />
                  <span>Add Missing Items to Shopping List</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Step-by-Step Instructions & Chef Tips (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-serif">
                Instructions
              </h2>
              <span className="text-xs text-stone-500 font-medium">
                {checkedSteps.length} of {recipe.instructions.length} steps completed
              </span>
            </div>

            <div className="space-y-6">
              {recipe.instructions.map((step) => {
                const isChecked = checkedSteps.includes(step.stepNumber);
                return (
                  <div
                    key={step.stepNumber}
                    onClick={() => toggleStep(step.stepNumber)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-emerald-50/50 border-emerald-200 opacity-75'
                        : 'bg-stone-50/50 border-stone-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <button
                        type="button"
                        className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                          isChecked
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white border border-stone-300 text-stone-700'
                        }`}
                      >
                        {isChecked ? <Check className="w-4 h-4" /> : step.stepNumber}
                      </button>

                      <div className="flex-1">
                        <p className={`text-sm sm:text-base leading-relaxed ${isChecked ? 'line-through text-stone-500' : 'text-stone-900 font-medium'}`}>
                          {step.instruction}
                        </p>

                        {step.tip && (
                          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium">
                            <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                            <span>Chef Tip: {step.tip}</span>
                          </div>
                        )}

                        {step.durationMinutes && (
                          <span className="mt-2 block text-xs text-stone-400 font-mono">
                            ⏱ Estimated time: {step.durationMinutes} min{step.durationMinutes > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ingredient Substitutions Box */}
          {recipe.substitutions && recipe.substitutions.length > 0 && (
            <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200">
              <h3 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2 font-serif">
                <span>Ingredient Substitutions & Swaps</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recipe.substitutions.map((sub, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-stone-200 text-xs">
                    <span className="font-bold text-stone-900 block">{sub.original}</span>
                    <span className="text-emerald-700 font-medium">↳ Swap with: {sub.substitute}</span>
                    {sub.note && (
                      <span className="block text-stone-500 text-[11px] mt-0.5">{sub.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Nutrition Breakdown */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 mb-3 font-serif">
              Estimated Nutritional Values (Per Serving)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-4">
              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100">
                <span className="block text-xs text-stone-400 font-bold uppercase">Calories</span>
                <span className="text-xl font-extrabold text-orange-600">
                  {Math.round(recipe.calories * scaleMultiplier)}
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100">
                <span className="block text-xs text-stone-400 font-bold uppercase">Protein</span>
                <span className="text-xl font-extrabold text-emerald-700">
                  {Math.round(recipe.protein * scaleMultiplier)}g
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100">
                <span className="block text-xs text-stone-400 font-bold uppercase">Carbs</span>
                <span className="text-xl font-extrabold text-blue-600">
                  {Math.round(recipe.carbs * scaleMultiplier)}g
                </span>
              </div>
              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-100">
                <span className="block text-xs text-stone-400 font-bold uppercase">Fat</span>
                <span className="text-xl font-extrabold text-purple-600">
                  {Math.round(recipe.fat * scaleMultiplier)}g
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-stone-100/70 border border-stone-200 text-[11px] text-stone-500 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <span>
                <strong>Nutrition Disclaimer:</strong> Nutritional data is calculated based on standard ingredients and estimated serving sizes. Exact figures vary by ingredient brand and cooking method. Not intended as medical dietary guidance.
              </span>
            </div>
          </div>

          {/* Recipe FAQs */}
          {recipe.faqs && recipe.faqs.length > 0 && (
            <div className="bg-white rounded-3xl p-6 border border-stone-200">
              <h3 className="text-lg font-bold text-stone-900 mb-4 font-serif flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-600" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-2.5">
                {recipe.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-stone-200 bg-stone-50 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-3.5 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-stone-900 hover:text-emerald-700 cursor-pointer"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-stone-400 transition-transform ${
                            isOpen ? 'rotate-180 text-emerald-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 text-xs text-stone-600 leading-relaxed border-t border-stone-200/60 pt-2.5">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />

      {/* Related Recipes Row */}
      {relatedRecipes.length > 0 && (
        <section className="mt-12 pt-8 border-t border-stone-200">
          <h2 className="text-2xl font-extrabold text-stone-900 font-serif mb-6">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedRecipes.slice(0, 3).map((rel) => (
              <RecipeCard
                key={rel.id}
                recipe={rel}
                isFavorite={favorites.includes(rel.slug)}
                onToggleFavorite={onToggleFavorite}
                onSelect={onSelectRecipe}
              />
            ))}
          </div>
        </section>
      )}

      {/* Full-Screen Cooking Mode Modal */}
      {isCookingModeOpen && (
        <CookingModeModal
          recipe={recipe}
          onClose={() => setIsCookingModeOpen(false)}
        />
      )}
    </div>
  );
};
