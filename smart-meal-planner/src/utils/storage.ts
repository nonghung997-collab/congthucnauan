import { PantryItem, ShoppingItem, MealPlan, UserPreferences } from '../types';

const STORAGE_KEYS = {
  FAVORITES: 'smp_favorites',
  PANTRY: 'smp_pantry',
  MEAL_PLAN: 'smp_meal_plan',
  SHOPPING_LIST: 'smp_shopping_list',
  PREFERENCES: 'smp_preferences',
  COOKIE_CONSENT: 'smp_cookie_consent'
} as const;

function safeGet<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;
    return JSON.parse(item) as T;
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
}

function safeSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error setting localStorage key "${key}":`, error);
  }
}

// Favorites (Stores recipe IDs or slugs)
export function getStoredFavorites(): string[] {
  return safeGet<string[]>(STORAGE_KEYS.FAVORITES, [
    'chicken-fried-rice',
    'shakshuka-poached-eggs',
    'garlic-butter-egg-rice'
  ]);
}

export function saveStoredFavorites(favorites: string[]): void {
  safeSet(STORAGE_KEYS.FAVORITES, favorites);
}

export function toggleStoredFavorite(slug: string): string[] {
  const current = getStoredFavorites();
  const exists = current.includes(slug);
  const updated = exists ? current.filter((id) => id !== slug) : [...current, slug];
  saveStoredFavorites(updated);
  return updated;
}

// Initial default pantry for instant zero-friction delightful experience
const DEFAULT_PANTRY: PantryItem[] = [
  {
    id: 'p-1',
    name: 'Eggs',
    normalizedName: 'egg',
    quantity: 6,
    unit: 'large',
    category: 'Dairy',
    expirationDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 days -> Use soon
    addedDate: new Date().toISOString().split('T')[0]
  },
  {
    id: 'p-2',
    name: 'Jasmine Rice',
    normalizedName: 'rice',
    quantity: 1,
    unit: 'kg',
    category: 'Pantry',
    expirationDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    addedDate: new Date().toISOString().split('T')[0]
  },
  {
    id: 'p-3',
    name: 'Chicken Breast',
    normalizedName: 'chicken',
    quantity: 450,
    unit: 'g',
    category: 'Protein',
    expirationDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 1 day -> Use soon
    addedDate: new Date().toISOString().split('T')[0]
  },
  {
    id: 'p-4',
    name: 'Garlic',
    normalizedName: 'garlic',
    quantity: 1,
    unit: 'bulb',
    category: 'Produce',
    expirationDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    addedDate: new Date().toISOString().split('T')[0]
  },
  {
    id: 'p-5',
    name: 'Soy Sauce',
    normalizedName: 'soy sauce',
    quantity: 1,
    unit: 'bottle',
    category: 'Pantry',
    expirationDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    addedDate: new Date().toISOString().split('T')[0]
  }
];

// Pantry
export function getStoredPantry(): PantryItem[] {
  return safeGet<PantryItem[]>(STORAGE_KEYS.PANTRY, DEFAULT_PANTRY);
}

export function saveStoredPantry(items: PantryItem[]): void {
  safeSet(STORAGE_KEYS.PANTRY, items);
}

// Shopping List
const DEFAULT_SHOPPING_LIST: ShoppingItem[] = [
  { id: 's-1', name: 'Fresh Basil', quantity: 1, unit: 'bunch', category: 'Produce', checked: false, recipeSource: 'Garlic Tomato Basil Pasta' },
  { id: 's-2', name: 'Cherry Tomatoes', quantity: 2, unit: 'pints', category: 'Produce', checked: false, recipeSource: 'Garlic Tomato Basil Pasta' },
  { id: 's-3', name: 'Parmesan Cheese', quantity: 1, unit: 'wedge', category: 'Dairy', checked: true, recipeSource: 'Garlic Tomato Basil Pasta' },
  { id: 's-4', name: 'Sesame Oil', quantity: 1, unit: 'bottle', category: 'Pantry', checked: false, recipeSource: 'Chicken Fried Rice' }
];

export function getStoredShoppingList(): ShoppingItem[] {
  return safeGet<ShoppingItem[]>(STORAGE_KEYS.SHOPPING_LIST, DEFAULT_SHOPPING_LIST);
}

export function saveStoredShoppingList(items: ShoppingItem[]): void {
  safeSet(STORAGE_KEYS.SHOPPING_LIST, items);
}

// User Preferences
export function getStoredPreferences(): UserPreferences {
  return safeGet<UserPreferences>(STORAGE_KEYS.PREFERENCES, {
    dietary: [],
    calorieTarget: 2000,
    mealsPerDay: 3,
    maxCookingTime: 30,
    budgetPreference: 'all'
  });
}

export function saveStoredPreferences(prefs: UserPreferences): void {
  safeSet(STORAGE_KEYS.PREFERENCES, prefs);
}

// Cookie / Analytics Consent
export function getCookieConsent(): boolean | null {
  return safeGet<boolean | null>(STORAGE_KEYS.COOKIE_CONSENT, null);
}

export function saveCookieConsent(consent: boolean): void {
  safeSet(STORAGE_KEYS.COOKIE_CONSENT, consent);
}
