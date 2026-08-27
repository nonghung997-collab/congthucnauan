import { MealPlan } from '../types';
import { getRecipeBySlug } from './recipes';

export const CURATED_MEAL_PLANS: MealPlan[] = [
  {
    id: '7-day-smart-meal-plan',
    slug: '7-day-meal-plan',
    title: 'Balanced 7-Day Smart Weekly Meal Plan',
    description: 'A complete, nutritionally balanced 7-day plan engineered to minimize food waste by cross-utilizing fresh ingredients like chicken, eggs, rice, and greens.',
    targetDailyCalories: 1800,
    dietaryTags: ['High-Protein', 'Balanced', 'Food-Waste-Optimized', 'Family-Friendly'],
    createdAt: '2026-08-01',
    groceryList: {
      Produce: ['Baby spinach (2 bags)', 'Ripe avocados (4)', 'Bell peppers (3)', 'Onions & garlic', 'Cherry tomatoes (2 pints)', 'Lemons (3)'],
      Protein: ['Chicken breasts (2 lbs)', 'Salmon fillets (2)', 'Large eggs (2 dozen)', 'Canned chunk light tuna (4 cans)', 'Extra-firm tofu (1 block)'],
      Pantry: ['Jasmine or basmati rice (2 lbs)', 'Dry pasta (penne/spaghetti)', 'Canned black beans (3 cans)', 'Canned chickpeas (2 cans)', 'Soy sauce & Olive oil'],
      Dairy: ['Feta cheese', 'Shredded cheddar / Mexican blend', 'Butter']
    },
    faqs: [
      {
        question: 'Can I swap lunch and dinner recipes?',
        answer: 'Absolutely! All meals are balanced with protein and fiber, so feel free to eat lunch leftovers for dinner or swap slots.'
      },
      {
        question: 'How does this plan prevent food waste?',
        answer: 'Ingredients like baby spinach and avocados appear in both morning breakfasts and midday salads so you finish containers before they spoil.'
      }
    ],
    days: [
      {
        dayName: 'Monday',
        breakfast: getRecipeBySlug('fluffy-spinach-feta-omelet'),
        lunch: getRecipeBySlug('quick-tuna-avocado-salad'),
        dinner: getRecipeBySlug('chicken-fried-rice')
      },
      {
        dayName: 'Tuesday',
        breakfast: getRecipeBySlug('avocado-egg-toast'),
        lunch: getRecipeBySlug('mediterranean-chickpea-salad'),
        dinner: getRecipeBySlug('sheet-pan-chicken-fajitas')
      },
      {
        dayName: 'Wednesday',
        breakfast: getRecipeBySlug('shakshuka-poached-eggs'),
        lunch: getRecipeBySlug('mediterranean-tuna-pasta-salad'),
        dinner: getRecipeBySlug('teriyaki-chicken-bowl')
      },
      {
        dayName: 'Thursday',
        breakfast: getRecipeBySlug('fluffy-spinach-feta-omelet'),
        lunch: getRecipeBySlug('black-bean-burrito-bowl'),
        dinner: getRecipeBySlug('garlic-tomato-basil-pasta')
      },
      {
        dayName: 'Friday',
        breakfast: getRecipeBySlug('avocado-egg-toast'),
        lunch: getRecipeBySlug('crispy-black-bean-cheese-quesadilla'),
        dinner: getRecipeBySlug('honey-soy-glazed-salmon')
      },
      {
        dayName: 'Saturday',
        breakfast: getRecipeBySlug('sweet-potato-black-bean-hash'),
        lunch: getRecipeBySlug('korean-egg-drop-soup'),
        dinner: getRecipeBySlug('loaded-beef-taco-skillet')
      },
      {
        dayName: 'Sunday',
        breakfast: getRecipeBySlug('shakshuka-poached-eggs'),
        lunch: getRecipeBySlug('garlic-butter-egg-rice'),
        dinner: getRecipeBySlug('vietnamese-chicken-noodle-soup')
      }
    ]
  },
  {
    id: 'cheap-weekly-meal-plan',
    slug: 'cheap-weekly-meal-plan',
    title: 'Budget-Friendly Under $50 Weekly Meal Plan',
    description: 'Eat delicious, wholesome home-cooked meals for under $50 total grocery spend using versatile staples like eggs, rice, canned beans, potatoes, and pasta.',
    targetDailyCalories: 1700,
    dietaryTags: ['Budget Friendly', 'Under-$50', 'Quick-Meals'],
    createdAt: '2026-08-01',
    groceryList: {
      Produce: ['Russet potatoes (5 lb bag)', 'Sweet potatoes (2 lbs)', 'Yellow onions (3 lb bag)', 'Garlic bulb (2 heads)', 'Carrots (1 lb)'],
      Protein: ['Eggs (2 dozen)', 'Canned black beans (4 cans)', 'Dry red lentils (1 lb)', 'Canned tuna (3 cans)'],
      Pantry: ['White rice (5 lb bag)', 'Dry spaghetti (2 boxes)', 'Canned crushed tomatoes (2 large cans)', 'Vegetable oil & basic spices (cumin, paprika, turmeric)'],
      Dairy: ['Butter (1 stick)', 'Shredded cheese (1 bag)']
    },
    faqs: [
      {
        question: 'How do you keep the grocery bill under $50?',
        answer: 'By building meals around dry lentils, bulk rice, potatoes, and eggs, your cost-per-serving drops to between $1.20 and $2.10 per plate.'
      }
    ],
    days: [
      {
        dayName: 'Monday',
        breakfast: getRecipeBySlug('avocado-egg-toast'),
        lunch: getRecipeBySlug('garlic-butter-egg-rice'),
        dinner: getRecipeBySlug('garlic-tomato-basil-pasta')
      },
      {
        dayName: 'Tuesday',
        breakfast: getRecipeBySlug('shakshuka-poached-eggs'),
        lunch: getRecipeBySlug('black-bean-burrito-bowl'),
        dinner: getRecipeBySlug('creamy-potato-leek-soup')
      },
      {
        dayName: 'Wednesday',
        breakfast: getRecipeBySlug('fluffy-spinach-feta-omelet'),
        lunch: getRecipeBySlug('crispy-black-bean-cheese-quesadilla'),
        dinner: getRecipeBySlug('chinese-tomato-egg-stir-fry')
      },
      {
        dayName: 'Thursday',
        breakfast: getRecipeBySlug('avocado-egg-toast'),
        lunch: getRecipeBySlug('mediterranean-chickpea-salad'),
        dinner: getRecipeBySlug('golden-turmeric-lentil-dahl')
      },
      {
        dayName: 'Friday',
        breakfast: getRecipeBySlug('shakshuka-poached-eggs'),
        lunch: getRecipeBySlug('korean-egg-drop-soup'),
        dinner: getRecipeBySlug('chicken-fried-rice')
      },
      {
        dayName: 'Saturday',
        breakfast: getRecipeBySlug('sweet-potato-black-bean-hash'),
        lunch: getRecipeBySlug('garlic-butter-egg-rice'),
        dinner: getRecipeBySlug('loaded-beef-taco-skillet')
      },
      {
        dayName: 'Sunday',
        breakfast: getRecipeBySlug('shakshuka-poached-eggs'),
        lunch: getRecipeBySlug('vietnamese-chicken-noodle-soup'),
        dinner: getRecipeBySlug('creamy-potato-leek-soup')
      }
    ]
  },
  {
    id: 'healthy-weekly-meal-plan',
    slug: 'healthy-weekly-meal-plan',
    title: 'Clean Eating Mediterranean Weekly Meal Plan',
    description: 'Whole foods, heart-healthy extra virgin olive oil, vibrant fresh vegetables, lean wild seafood, and wholesome plant proteins.',
    targetDailyCalories: 1650,
    dietaryTags: ['Mediterranean', 'Heart-Healthy', 'Clean-Eating'],
    createdAt: '2026-08-01',
    groceryList: {
      Produce: ['Fresh baby spinach', 'Cherry tomatoes', 'Cucumbers', 'Asparagus', 'Lemons', 'Fresh basil'],
      Protein: ['Salmon fillets', 'Cod or white fish fillets', 'Chicken tenders', 'Canned chickpeas', 'Eggs'],
      Pantry: ['Extra virgin olive oil', 'Kalamata olives', 'Quinoa or brown rice', 'Canned whole peeled tomatoes'],
      Dairy: ['Greek yogurt', 'Feta cheese block']
    },
    faqs: [
      {
        question: 'Is this plan suitable for lowering cholesterol?',
        answer: 'Yes, it is centered around the Mediterranean dietary pattern which is rich in monounsaturated fatty acids (olive oil), omega-3s (salmon), and soluble fiber (chickpeas).'
      }
    ],
    days: [
      {
        dayName: 'Monday',
        breakfast: getRecipeBySlug('fluffy-spinach-feta-omelet'),
        lunch: getRecipeBySlug('mediterranean-chickpea-salad'),
        dinner: getRecipeBySlug('mediterranean-baked-cod')
      },
      {
        dayName: 'Tuesday',
        breakfast: getRecipeBySlug('avocado-egg-toast'),
        lunch: getRecipeBySlug('quick-tuna-avocado-salad'),
        dinner: getRecipeBySlug('garlic-tomato-basil-pasta')
      },
      {
        dayName: 'Wednesday',
        breakfast: getRecipeBySlug('shakshuka-poached-eggs'),
        lunch: getRecipeBySlug('mediterranean-chickpea-salad'),
        dinner: getRecipeBySlug('sheet-pan-lemon-salmon-asparagus')
      },
      {
        dayName: 'Thursday',
        breakfast: getRecipeBySlug('fluffy-spinach-feta-omelet'),
        lunch: getRecipeBySlug('mediterranean-tuna-pasta-salad'),
        dinner: getRecipeBySlug('crispy-tofu-stir-fry')
      },
      {
        dayName: 'Friday',
        breakfast: getRecipeBySlug('shakshuka-poached-eggs'),
        lunch: getRecipeBySlug('black-bean-burrito-bowl'),
        dinner: getRecipeBySlug('honey-soy-glazed-salmon')
      },
      {
        dayName: 'Saturday',
        breakfast: getRecipeBySlug('avocado-egg-toast'),
        lunch: getRecipeBySlug('korean-egg-drop-soup'),
        dinner: getRecipeBySlug('greek-lemon-potatoes')
      },
      {
        dayName: 'Sunday',
        breakfast: getRecipeBySlug('sweet-potato-black-bean-hash'),
        lunch: getRecipeBySlug('golden-turmeric-lentil-dahl'),
        dinner: getRecipeBySlug('lemon-garlic-chicken-skillet')
      }
    ]
  }
];

export const DEFAULT_7_DAY_MEAL_PLAN: MealPlan = CURATED_MEAL_PLANS[0];

export function getCuratedMealPlan(slug: string): MealPlan | undefined {
  return CURATED_MEAL_PLANS.find((p) => p.slug === slug || p.id === slug);
}

export function getAllCuratedMealPlans(): MealPlan[] {
  return CURATED_MEAL_PLANS;
}
