import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { SurpriseMeModal } from './components/SurpriseMeModal';

// Pages
import { HomePage } from './pages/HomePage';
import { RecipesPage } from './pages/RecipesPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { MealPlannerPage } from './pages/MealPlannerPage';
import { PantryPage } from './pages/PantryPage';
import { ShoppingListPage } from './pages/ShoppingListPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { IngredientDetailPage } from './pages/IngredientDetailPage';
import { IngredientsIndexPage } from './pages/IngredientsIndexPage';
import { MealPlanDetailPage } from './pages/MealPlanDetailPage';
import { MealPlansIndexPage } from './pages/MealPlansIndexPage';
import { WhatToCookPage } from './pages/WhatToCookPage';
import { ClusterCollectionPage } from './pages/ClusterCollectionPage';
import { ArticlesIndexPage } from './pages/ArticlesIndexPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Data & Helpers
import { 
  getAllRecipes, 
  getRecipeBySlug, 
  getPopularRecipes, 
  getQuickRecipes, 
  getHealthyRecipes, 
  getBudgetRecipes, 
  getRelatedRecipes 
} from './data/recipes';
import { getAllIngredientHubs, getIngredientHub } from './data/ingredientHubs';
import { getAllCuratedMealPlans, getCuratedMealPlan, DEFAULT_7_DAY_MEAL_PLAN } from './data/mealPlans';
import { getAllWhatToCookHubs, getWhatToCookHub } from './data/whatToCookHubs';
import { getAllArticles, getArticleBySlug } from './data/articles';
import { findMatchingRecipes, getSurpriseRecipe } from './utils/matchingEngine';
import { 
  getStoredFavorites, 
  toggleStoredFavorite, 
  getStoredPantry, 
  saveStoredPantry, 
  getStoredShoppingList, 
  saveStoredShoppingList 
} from './utils/storage';
import { Recipe, PantryItem, ShoppingItem, MealPlan } from './types';
import { updateDocumentSeo } from './utils/seo';

export default function App() {
  // Routing state
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || '/');

  // App domain states
  const [userIngredients, setUserIngredients] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [pantryItems, setPantryItems] = useState<PantryItem[]>([]);
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  const [currentMealPlan, setCurrentMealPlan] = useState<MealPlan>(DEFAULT_7_DAY_MEAL_PLAN);

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [surpriseRecipe, setSurpriseRecipe] = useState<Recipe | null>(null);

  const allRecipes = useMemo(() => getAllRecipes(), []);

  // Initialize data from localStorage on mount
  useEffect(() => {
    setFavorites(getStoredFavorites());
    setPantryItems(getStoredPantry());
    setShoppingList(getStoredShoppingList());

    // Listen for browser Back / Forward buttons
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation handler
  const handleNavigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Recipe selection helper
  const handleSelectRecipe = (slug: string) => {
    handleNavigate(`/recipes/${slug}`);
  };

  // Favorites toggle
  const handleToggleFavorite = (slug: string) => {
    const updated = toggleStoredFavorite(slug);
    setFavorites(updated);
  };

  // Ingredient input management
  const handleAddIngredient = (ing: string) => {
    const cleaned = ing.toLowerCase().trim();
    if (cleaned && !userIngredients.includes(cleaned)) {
      setUserIngredients((prev) => [...prev, cleaned]);
    }
  };

  const handleRemoveIngredient = (ing: string) => {
    setUserIngredients((prev) => prev.filter((i) => i.toLowerCase() !== ing.toLowerCase()));
  };

  const handleClearIngredients = () => {
    setUserIngredients([]);
  };

  // Pantry management
  const handleAddPantryItem = (item: Omit<PantryItem, 'id' | 'addedDate'>) => {
    const newItem: PantryItem = {
      ...item,
      id: `p-${Date.now()}`,
      addedDate: new Date().toISOString().split('T')[0]
    };
    const updated = [newItem, ...pantryItems];
    setPantryItems(updated);
    saveStoredPantry(updated);
  };

  const handleRemovePantryItem = (id: string) => {
    const updated = pantryItems.filter((i) => i.id !== id);
    setPantryItems(updated);
    saveStoredPantry(updated);
  };

  const handleCookWithExpiring = (expiringList: string[]) => {
    setUserIngredients(expiringList);
    handleNavigate('/');
  };

  // Shopping list management
  const handleAddShoppingItem = (item: Omit<ShoppingItem, 'id'>) => {
    const newItem: ShoppingItem = {
      ...item,
      id: `s-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`
    };
    const updated = [newItem, ...shoppingList];
    setShoppingList(updated);
    saveStoredShoppingList(updated);
  };

  const handleAddMultipleShoppingItems = (items: Omit<ShoppingItem, 'id'>[]) => {
    const newItems: ShoppingItem[] = items.map((item, idx) => ({
      ...item,
      id: `s-${Date.now()}-${idx}`
    }));
    const updated = [...newItems, ...shoppingList];
    setShoppingList(updated);
    saveStoredShoppingList(updated);
  };

  const handleToggleShoppingItem = (id: string) => {
    const updated = shoppingList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setShoppingList(updated);
    saveStoredShoppingList(updated);
  };

  const handleRemoveShoppingItem = (id: string) => {
    const updated = shoppingList.filter((item) => item.id !== id);
    setShoppingList(updated);
    saveStoredShoppingList(updated);
  };

  const handleClearCompletedShopping = () => {
    const updated = shoppingList.filter((item) => !item.checked);
    setShoppingList(updated);
    saveStoredShoppingList(updated);
  };

  const handleClearAllShopping = () => {
    setShoppingList([]);
    saveStoredShoppingList([]);
  };

  // Surprise Me Trigger
  const handleTriggerSurpriseMe = () => {
    const randomPick = getSurpriseRecipe(allRecipes);
    setSurpriseRecipe(randomPick);
    setIsSurpriseOpen(true);
  };

  const handleTryAnotherSurprise = () => {
    const exclude = surpriseRecipe ? [surpriseRecipe.slug] : [];
    const randomPick = getSurpriseRecipe(allRecipes, { excludeSlugs: exclude });
    setSurpriseRecipe(randomPick);
  };

  // Matched recipes based on user ingredients
  const matchedResults = useMemo(() => {
    return findMatchingRecipes(userIngredients, allRecipes, { pantryItems });
  }, [userIngredients, allRecipes, pantryItems]);

  // Derived curated collections
  const popularRecipes = useMemo(() => getPopularRecipes(allRecipes), [allRecipes]);
  const quickRecipes = useMemo(() => getQuickRecipes(allRecipes), [allRecipes]);
  const healthyRecipes = useMemo(() => getHealthyRecipes(allRecipes), [allRecipes]);
  const budgetRecipes = useMemo(() => getBudgetRecipes(allRecipes), [allRecipes]);
  const favoriteRecipesList = useMemo(() => {
    return allRecipes.filter((r) => favorites.includes(r.slug));
  }, [allRecipes, favorites]);

  // Dynamic Route Resolver
  const renderCurrentPage = () => {
    // 1. Homepage: `/`
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          userIngredients={userIngredients}
          matchedResults={matchedResults}
          popularRecipes={popularRecipes}
          quickRecipes={quickRecipes}
          healthyRecipes={healthyRecipes}
          budgetRecipes={budgetRecipes}
          pantryItems={pantryItems}
          favorites={favorites}
          onAddIngredient={handleAddIngredient}
          onRemoveIngredient={handleRemoveIngredient}
          onClearIngredients={handleClearIngredients}
          onToggleFavorite={handleToggleFavorite}
          onSelectRecipe={handleSelectRecipe}
          onNavigate={handleNavigate}
        />
      );
    }

    // 2. All Recipes: `/recipes`
    if (currentPath === '/recipes') {
      return (
        <RecipesPage
          recipes={allRecipes}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectRecipe={handleSelectRecipe}
          onNavigate={handleNavigate}
        />
      );
    }

    // 3. Single Recipe Detail: `/recipes/:slug`
    if (currentPath.startsWith('/recipes/')) {
      const slug = currentPath.replace('/recipes/', '').split('?')[0];
      const recipe = getRecipeBySlug(slug);
      if (recipe) {
        const related = getRelatedRecipes(recipe, allRecipes);
        return (
          <RecipeDetailPage
            recipe={recipe}
            relatedRecipes={related}
            pantryItems={pantryItems}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onAddShoppingItem={handleAddShoppingItem}
            onSelectRecipe={handleSelectRecipe}
            onNavigate={handleNavigate}
          />
        );
      }
      return <NotFoundPage onNavigate={handleNavigate} />;
    }

    // 4. Interactive 7-Day Meal Planner: `/meal-planner`
    if (currentPath === '/meal-planner') {
      return (
        <MealPlannerPage
          currentMealPlan={currentMealPlan}
          onUpdateMealPlan={setCurrentMealPlan}
          onAddShoppingItems={handleAddMultipleShoppingItems}
          onSelectRecipe={handleSelectRecipe}
          onNavigate={handleNavigate}
        />
      );
    }

    // 5. Curated Meal Plans Index: `/meal-plans`
    if (currentPath === '/meal-plans') {
      return (
        <MealPlansIndexPage
          mealPlans={getAllCuratedMealPlans()}
          onNavigate={handleNavigate}
        />
      );
    }

    // 6. Curated Meal Plan Detail: `/meal-plans/:slug`
    if (currentPath.startsWith('/meal-plans/')) {
      const slug = currentPath.replace('/meal-plans/', '').split('?')[0];
      const plan = getCuratedMealPlan(slug);
      if (plan) {
        return (
          <MealPlanDetailPage
            plan={plan}
            onApplyPlanToPlanner={(p) => setCurrentMealPlan(p)}
            onAddShoppingItems={handleAddMultipleShoppingItems}
            onSelectRecipe={handleSelectRecipe}
            onNavigate={handleNavigate}
          />
        );
      }
      return <NotFoundPage onNavigate={handleNavigate} />;
    }

    // 7. Pantry & Expiration Tracker: `/pantry`
    if (currentPath === '/pantry') {
      return (
        <PantryPage
          pantryItems={pantryItems}
          onAddPantryItem={handleAddPantryItem}
          onRemovePantryItem={handleRemovePantryItem}
          onCookWithExpiring={handleCookWithExpiring}
          onNavigate={handleNavigate}
        />
      );
    }

    // 8. Smart Shopping List: `/shopping-list`
    if (currentPath === '/shopping-list') {
      return (
        <ShoppingListPage
          shoppingItems={shoppingList}
          onToggleItem={handleToggleShoppingItem}
          onAddItem={handleAddShoppingItem}
          onRemoveItem={handleRemoveShoppingItem}
          onClearCompleted={handleClearCompletedShopping}
          onClearAll={handleClearAllShopping}
          onNavigate={handleNavigate}
        />
      );
    }

    // 9. Saved Favorites: `/favorites`
    if (currentPath === '/favorites') {
      return (
        <FavoritesPage
          favoriteRecipes={favoriteRecipesList}
          onToggleFavorite={handleToggleFavorite}
          onSelectRecipe={handleSelectRecipe}
          onNavigate={handleNavigate}
        />
      );
    }

    // 10. Ingredients Directory: `/ingredients`
    if (currentPath === '/ingredients') {
      return (
        <IngredientsIndexPage
          hubs={getAllIngredientHubs()}
          onNavigate={handleNavigate}
        />
      );
    }

    // 11. Ingredient Landing Hub: `/ingredients/:slug`
    if (currentPath.startsWith('/ingredients/')) {
      const slug = currentPath.replace('/ingredients/', '').split('?')[0];
      const hub = getIngredientHub(slug);
      if (hub) {
        const matchingRecipesForIng = allRecipes.filter((r) =>
          r.ingredients.some(
            (ing) =>
              ing.name.toLowerCase().includes(hub.primaryKeyword.toLowerCase()) ||
              (ing.normalizedName && ing.normalizedName.toLowerCase().includes(hub.primaryKeyword.toLowerCase()))
          )
        );
        return (
          <IngredientDetailPage
            hub={hub}
            recipes={matchingRecipesForIng}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectRecipe={handleSelectRecipe}
            onNavigate={handleNavigate}
          />
        );
      }
      return <NotFoundPage onNavigate={handleNavigate} />;
    }

    // 12. What to Cook Hubs: `/what-to-cook` and `/what-to-cook/:slug`
    if (currentPath === '/what-to-cook') {
      return (
        <WhatToCookPage
          allHubs={getAllWhatToCookHubs()}
          recipes={popularRecipes}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectRecipe={handleSelectRecipe}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPath.startsWith('/what-to-cook/')) {
      const slug = currentPath.replace('/what-to-cook/', '').split('?')[0];
      const hub = getWhatToCookHub(slug);
      if (hub) {
        let filtered = allRecipes;
        if (hub.filterCriteria.maxTime) {
          filtered = filtered.filter((r) => r.totalTime <= hub.filterCriteria.maxTime!);
        }
        if (hub.filterCriteria.mealType) {
          filtered = filtered.filter((r) => r.mealType === hub.filterCriteria.mealType!);
        }
        if (hub.filterCriteria.ingredient) {
          filtered = filtered.filter((r) =>
            r.ingredients.some((i) => i.name.toLowerCase().includes(hub.filterCriteria.ingredient!.toLowerCase()))
          );
        }
        return (
          <WhatToCookPage
            hub={hub}
            allHubs={getAllWhatToCookHubs()}
            recipes={filtered}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectRecipe={handleSelectRecipe}
            onNavigate={handleNavigate}
          />
        );
      }
      return <NotFoundPage onNavigate={handleNavigate} />;
    }

    // 13. Cluster Pages: `/quick-meals`, `/healthy-meals`, `/budget-meals`
    if (currentPath === '/quick-meals') {
      return (
        <ClusterCollectionPage
          type="quick"
          recipes={quickRecipes}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectRecipe={handleSelectRecipe}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPath === '/healthy-meals') {
      return (
        <ClusterCollectionPage
          type="healthy"
          recipes={healthyRecipes}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectRecipe={handleSelectRecipe}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPath === '/budget-meals') {
      return (
        <ClusterCollectionPage
          type="budget"
          recipes={budgetRecipes}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectRecipe={handleSelectRecipe}
          onNavigate={handleNavigate}
        />
      );
    }

    // 14. Articles Index: `/articles`
    if (currentPath === '/articles') {
      return (
        <ArticlesIndexPage
          articles={getAllArticles()}
          onNavigate={handleNavigate}
        />
      );
    }

    // 15. Article Detail: `/articles/:slug`
    if (currentPath.startsWith('/articles/')) {
      const slug = currentPath.replace('/articles/', '').split('?')[0];
      const article = getArticleBySlug(slug);
      if (article) {
        const related = allRecipes.filter((r) => article.relatedRecipeSlugs.includes(r.slug));
        return (
          <ArticleDetailPage
            article={article}
            relatedRecipes={related}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectRecipe={handleSelectRecipe}
            onNavigate={handleNavigate}
          />
        );
      }
      return <NotFoundPage onNavigate={handleNavigate} />;
    }

    // 16. Institutional Pages
    if (currentPath === '/about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={handleNavigate} />;
    }
    if (currentPath === '/privacy-policy') {
      return <PrivacyPolicyPage onNavigate={handleNavigate} />;
    }
    if (currentPath === '/terms') {
      return <TermsPage onNavigate={handleNavigate} />;
    }

    // Default Fallback
    return <NotFoundPage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900 selection:bg-emerald-200 selection:text-emerald-950">
      {/* Top Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSurpriseMe={handleTriggerSurpriseMe}
        favoritesCount={favorites.length}
        pantryCount={pantryItems.length}
        shoppingCount={shoppingList.filter((i) => !i.checked).length}
      />

      {/* Main Routed Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Rich Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Search Dialog (Cmd+K) */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Surprise Me 🎲 Modal */}
      <SurpriseMeModal
        isOpen={isSurpriseOpen}
        recipe={surpriseRecipe}
        onClose={() => setIsSurpriseOpen(false)}
        onCook={(slug) => {
          setIsSurpriseOpen(false);
          handleSelectRecipe(slug);
        }}
        onTryAnother={handleTryAnotherSurprise}
      />

      {/* Privacy-friendly Cookie Consent Banner */}
      <CookieBanner onNavigate={handleNavigate} />
    </div>
  );
}
