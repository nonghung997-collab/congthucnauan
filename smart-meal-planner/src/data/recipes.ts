import { Recipe } from '../types';
import { ASIAN_RECIPES } from './recipes_asian';
import { ITALIAN_MED_RECIPES } from './recipes_italian_med';
import { MEXICAN_AMERICAN_RECIPES } from './recipes_mexican_american';
import { HEALTHY_QUICK_RECIPES } from './recipes_healthy_quick';
import { MORE_RECIPES } from './recipes_more';
import { BATCH3_RECIPES } from './recipes_batch3';

export const ALL_RECIPES: Recipe[] = [
  ...ASIAN_RECIPES,
  ...ITALIAN_MED_RECIPES,
  ...MEXICAN_AMERICAN_RECIPES,
  ...HEALTHY_QUICK_RECIPES,
  ...MORE_RECIPES,
  ...BATCH3_RECIPES
];

export function getAllRecipes(): Recipe[] {
  return ALL_RECIPES;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return ALL_RECIPES.find((r) => r.slug === slug || r.id === slug);
}

export function getRecipesByPrimaryIngredient(ingredientSlug: string): Recipe[] {
  const norm = ingredientSlug.toLowerCase().trim();
  return ALL_RECIPES.filter((r) => 
    r.primaryIngredientSlug === norm ||
    r.tags.includes(norm) ||
    r.ingredients.some(i => i.normalizedName.includes(norm) || norm.includes(i.normalizedName))
  );
}

export function getRelatedRecipes(recipe: Recipe, count = 3): Recipe[] {
  if (recipe.relatedRecipeSlugs && recipe.relatedRecipeSlugs.length > 0) {
    const matched = recipe.relatedRecipeSlugs
      .map((slug) => getRecipeBySlug(slug))
      .filter((r): r is Recipe => r !== undefined);
    if (matched.length >= count) return matched.slice(0, count);
  }

  return ALL_RECIPES
    .filter((r) => r.id !== recipe.id && (r.cuisine === recipe.cuisine || r.mealType === recipe.mealType))
    .slice(0, count);
}

export function getPopularRecipes(limit = 6): Recipe[] {
  return ALL_RECIPES.slice(0, limit);
}

export function getQuickRecipes(maxMinutes = 20, limit = 6): Recipe[] {
  return ALL_RECIPES.filter((r) => r.totalTime <= maxMinutes).slice(0, limit);
}

export function getHealthyRecipes(limit = 6): Recipe[] {
  return ALL_RECIPES.filter((r) => r.calories <= 450 && r.protein >= 15).slice(0, limit);
}

export function getBudgetRecipes(limit = 6): Recipe[] {
  return ALL_RECIPES.filter((r) => r.budgetTier === 'Budget Friendly').slice(0, limit);
}
