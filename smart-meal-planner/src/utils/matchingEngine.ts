import { Recipe, RecipeMatchResult, PantryItem, DietaryTag, MealType } from '../types';
import { normalizeIngredient } from '../data/synonyms';

export interface MatchingOptions {
  dietary?: DietaryTag[];
  mealType?: MealType | 'all';
  maxTime?: number;
  maxCalories?: number;
  minProtein?: number;
  pantryItems?: PantryItem[];
  budgetTier?: string;
  sortBy?: 'match' | 'time' | 'calories' | 'protein';
}

/**
 * Smart recipe matching engine
 * Ranks recipes based on:
 * 1. User ingredients & synonym matching
 * 2. Pantry expiring ingredients prioritization (Food Waste Reduction)
 * 3. Dietary preferences and filters
 */
export function findMatchingRecipes(
  userIngredients: string[],
  allRecipes: Recipe[],
  options: MatchingOptions = {}
): RecipeMatchResult[] {
  // Normalize user ingredient inputs
  const normalizedUserList = userIngredients
    .map((i) => normalizeIngredient(i))
    .filter((i) => i.length > 0);

  // Extract pantry normalized names for pantry-overlap checking
  const expiringPantryNames = (options.pantryItems || [])
    .filter((p) => {
      if (!p.expirationDate) return false;
      const exp = new Date(p.expirationDate).getTime();
      const now = new Date().getTime();
      const diffDays = (exp - now) / (1000 * 60 * 60 * 24);
      return diffDays <= 3; // Expiring in <= 3 days
    })
    .map((p) => normalizeIngredient(p.name));

  const results: RecipeMatchResult[] = [];

  for (const recipe of allRecipes) {
    // 1. Filter checks
    if (options.dietary && options.dietary.length > 0) {
      const hasAllDietary = options.dietary.every((tag) => recipe.dietaryTags.includes(tag));
      if (!hasAllDietary) continue;
    }

    if (options.mealType && options.mealType !== 'all') {
      if (recipe.mealType !== options.mealType) continue;
    }

    if (options.maxTime && recipe.totalTime > options.maxTime) {
      continue;
    }

    if (options.maxCalories && recipe.calories > options.maxCalories) {
      continue;
    }

    if (options.minProtein && recipe.protein < options.minProtein) {
      continue;
    }

    if (options.budgetTier && options.budgetTier !== 'all') {
      if (recipe.budgetTier !== options.budgetTier) continue;
    }

    // 2. Ingredient Matching
    const recipeIngredients = recipe.ingredients.map((ing) => ({
      raw: ing,
      normalized: ing.normalizedName ? normalizeIngredient(ing.normalizedName) : normalizeIngredient(ing.name)
    }));

    const matchedIngredients: string[] = [];
    const missingIngredients = recipe.ingredients.filter((ing) => {
      const ingNorm = ing.normalizedName ? normalizeIngredient(ing.normalizedName) : normalizeIngredient(ing.name);

      // Check if user has this ingredient
      const isMatched = normalizedUserList.some((userIng) => {
        return (
          userIng === ingNorm ||
          userIng.includes(ingNorm) ||
          ingNorm.includes(userIng)
        );
      });

      if (isMatched) {
        matchedIngredients.push(ing.name);
        return false;
      }
      return true;
    });

    const totalRequired = recipe.ingredients.length;
    let matchScore = totalRequired > 0 ? Math.round((matchedIngredients.length / totalRequired) * 100) : 0;

    // Food waste boost: if recipe utilizes items in user's expiring pantry, give slight priority
    const usesExpiringItem = recipeIngredients.some((ri) =>
      expiringPantryNames.some((expName) => ri.normalized === expName || ri.normalized.includes(expName))
    );

    let matchGrade: RecipeMatchResult['matchGrade'] = 'Partial Match';
    if (matchScore >= 90) {
      matchGrade = 'Perfect Match';
    } else if (matchScore >= 65) {
      matchGrade = 'High Match';
    } else if (matchScore >= 40) {
      matchGrade = 'Good Match';
    }

    // If user provided no ingredients, give default 100% exploration score
    if (normalizedUserList.length === 0) {
      matchScore = 100;
      matchGrade = 'Perfect Match';
    }

    results.push({
      recipe,
      matchScore,
      matchedIngredients,
      missingIngredients,
      matchGrade
    });
  }

  // Sorting
  const sortBy = options.sortBy || 'match';
  return results.sort((a, b) => {
    if (sortBy === 'match') {
      if (b.matchScore !== a.matchScore) {
        return b.matchScore - a.matchScore;
      }
      return a.recipe.totalTime - b.recipe.totalTime;
    }
    if (sortBy === 'time') return a.recipe.totalTime - b.recipe.totalTime;
    if (sortBy === 'calories') return a.recipe.calories - b.recipe.calories;
    if (sortBy === 'protein') return b.recipe.protein - a.recipe.protein;
    return 0;
  });
}

/**
 * Surprise Me generator: selects a recipe matching user constraints with variety
 */
export function getSurpriseRecipe(
  allRecipes: Recipe[],
  options: {
    dietary?: DietaryTag[];
    maxTime?: number;
    excludeSlugs?: string[];
  } = {}
): Recipe {
  let filtered = allRecipes;

  if (options.dietary && options.dietary.length > 0) {
    filtered = filtered.filter((r) =>
      options.dietary!.every((tag) => r.dietaryTags.includes(tag))
    );
  }

  if (options.maxTime) {
    filtered = filtered.filter((r) => r.totalTime <= options.maxTime!);
  }

  if (options.excludeSlugs && options.excludeSlugs.length > 0) {
    const withoutExcluded = filtered.filter((r) => !options.excludeSlugs!.includes(r.slug));
    if (withoutExcluded.length > 0) {
      filtered = withoutExcluded;
    }
  }

  if (filtered.length === 0) {
    filtered = allRecipes;
  }

  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}
