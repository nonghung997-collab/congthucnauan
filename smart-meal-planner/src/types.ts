export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export type CuisineType = 
  | 'Asian'
  | 'Italian'
  | 'Mexican'
  | 'Mediterranean'
  | 'American'
  | 'Vietnamese-inspired'
  | 'Indian'
  | 'Middle Eastern'
  | 'Healthy Fusion';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type BudgetTier = 'Budget Friendly' | 'Standard' | 'Premium';

export type DietaryTag = 
  | 'Vegetarian'
  | 'Vegan'
  | 'Gluten-Free'
  | 'Dairy-Free'
  | 'High-Protein'
  | 'Low-Calorie'
  | 'Low-Carb'
  | 'Keto-Friendly'
  | 'Quick-Meal'
  | 'Family-Friendly'
  | 'One-Pot'
  | 'Under-20-Mins';

export type IngredientCategory = 'Produce' | 'Protein' | 'Dairy' | 'Pantry' | 'Spices' | 'Bakery' | 'Other';

export interface RecipeIngredient {
  name: string;
  normalizedName: string;
  amount: number;
  unit: string;
  category: IngredientCategory;
  optional?: boolean;
}

export interface InstructionStep {
  stepNumber: number;
  instruction: string;
  tip?: string;
  durationMinutes?: number;
}

export interface NutritionInfo {
  calories: number;
  protein: number; // in grams
  carbs: number;   // in grams
  fat: number;     // in grams
  fiber?: number;  // in grams
  sugar?: number;  // in grams
  sodium?: number; // in mg
}

export interface Substitution {
  original: string;
  alternatives: string[];
  note?: string;
}

export interface RecipeFAQ {
  question: string;
  answer: string;
}

export interface Recipe {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  prepTime: number; // minutes
  cookTime: number; // minutes
  totalTime: number; // minutes
  servings: number;
  calories: number; // per serving
  protein: number;  // g
  carbs: number;    // g
  fat: number;      // g
  difficulty: Difficulty;
  mealType: MealType;
  cuisine: CuisineType;
  budgetTier: BudgetTier;
  dietaryTags: DietaryTag[];
  tags: string[];
  keywords: string[];
  ingredients: RecipeIngredient[];
  instructions: InstructionStep[];
  substitutions: Substitution[];
  tips: string[];
  faqs: RecipeFAQ[];
  relatedRecipeSlugs?: string[];
  primaryIngredientSlug?: string;
}

export interface RecipeMatchResult {
  recipe: Recipe;
  matchScore: number; // 0 - 100%
  matchedIngredients: string[];
  missingIngredients: RecipeIngredient[];
  matchGrade: 'Perfect Match' | 'High Match' | 'Good Match' | 'Partial Match';
}

export interface PantryItem {
  id: string;
  name: string;
  normalizedName: string;
  quantity: number;
  unit: string;
  category: IngredientCategory;
  expirationDate?: string; // YYYY-MM-DD
  addedDate: string;
}

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: IngredientCategory;
  checked: boolean;
  recipeSource?: string;
}

export interface MealPlanDay {
  dayName: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  breakfast?: Recipe;
  lunch?: Recipe;
  dinner?: Recipe;
  snack?: Recipe;
}

export interface MealPlan {
  id: string;
  title: string;
  description: string;
  slug: string;
  targetDailyCalories: number;
  days: MealPlanDay[];
  dietaryTags: string[];
  createdAt: string;
  groceryList?: Record<string, string[]>;
  faqs?: RecipeFAQ[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Meal Planning' | 'Cooking Tips' | 'Ingredients' | 'Healthy Meals' | 'Budget Meals' | 'Food Waste';
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  lastUpdated: string;
  heroImage: string;
  toc: { id: string; title: string }[];
  content: {
    heading?: string;
    id?: string;
    paragraphs: string[];
    callout?: string;
    checklist?: string[];
  }[];
  relatedRecipeSlugs: string[];
  faqs: RecipeFAQ[];
}

export interface IngredientHub {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  heroImage: string;
  shortAnswer: string;
  intro: string;
  storageTips: string[];
  cookingTips: string[];
  substitutions: { original: string; replaceWith: string; reason?: string; note?: string }[];
  faqs: RecipeFAQ[];
  popularCombos?: { comboName: string; description: string; recipeSlugs: string[] }[];
  h1?: string;
  primaryKeyword?: string;
}

export interface WhatToCookHub {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  targetAudience: string;
  keyAdvice: string[];
  filterCriteria: {
    maxTime?: number;
    maxCalories?: number;
    dietary?: DietaryTag;
    ingredient?: string;
    mealType?: MealType;
  };
  faqs: RecipeFAQ[];
}

export interface UserPreferences {
  dietary: DietaryTag[];
  calorieTarget: number;
  mealsPerDay: number;
  maxCookingTime: number;
  budgetPreference: 'all' | 'budget-friendly';
}
