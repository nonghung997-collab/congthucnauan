import { Article } from '../types';

export const CONTENT_ARTICLES: Article[] = [
  {
    slug: 'how-to-meal-plan-for-a-week',
    title: 'How to Meal Plan for a Week: The Complete Step-by-Step Beginner’s Guide',
    excerpt: 'Save 4+ hours every week, cut your grocery bill by 30%, and eliminate daily "what’s for dinner?" stress with this proven 5-step meal planning system.',
    category: 'Meal Planning',
    readTime: '6 min read',
    author: {
      name: 'Smart Kitchen Editorial',
      role: 'Culinary & Nutrition Team',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    publishedDate: '2026-07-15',
    lastUpdated: '2026-08-20',
    heroImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    toc: [
      { id: 'why-plan', title: 'Why Weekly Meal Planning Works' },
      { id: 'step-1-audit', title: 'Step 1: The 5-Minute Pantry Audit' },
      { id: 'step-2-anchor', title: 'Step 2: Choose 2 Anchor Proteins' },
      { id: 'step-3-schedule', title: 'Step 3: Map Meals to Your Real Schedule' },
      { id: 'step-4-list', title: 'Step 4: Generate a Categorized Grocery List' },
      { id: 'step-5-prep', title: 'Step 5: 45-Minute Power Prep' }
    ],
    content: [
      {
        heading: 'Why Weekly Meal Planning Works',
        id: 'why-plan',
        paragraphs: [
          'The average household wastes up to 30% of the groceries they buy, equating to over $1,500 annually in discarded produce and expired ingredients.',
          'Meal planning is not about rigid military discipline or eating the same dry chicken breast out of plastic containers 7 days in a row. It is simply having a blueprint so you never face the dreaded 6 PM decision paralysis.'
        ]
      },
      {
        heading: 'Step 1: The 5-Minute Pantry Audit',
        id: 'step-1-audit',
        paragraphs: [
          'Before opening a grocery delivery app or walking into the store, check what is already expiring in your fridge and pantry. Building a meal plan around existing ingredients immediately cuts grocery costs and reduces household food waste.'
        ],
        checklist: [
          'Check produce drawer for greens or herbs needing quick use',
          'Inspect dairy and meats near expiration',
          'Review opened grains, rice, pasta, and canned goods in the pantry'
        ]
      },
      {
        heading: 'Step 2: Choose 2 Anchor Proteins & 2 Base Carbs',
        id: 'step-2-anchor',
        paragraphs: [
          'The secret to streamlined cooking is ingredient overlap. Rather than buying 7 different meats for 7 dinners, select two anchor proteins (e.g., chicken breasts and eggs) and two versatile bases (e.g., jasmine rice and pasta).',
          'From those 4 foundation items, you can create chicken fried rice on Monday, garlic tomato pasta on Tuesday, sheet pan fajitas on Wednesday, and Shakshuka on Thursday.'
        ],
        callout: 'Pro Tip: Cross-utilizing ingredients ensures you buy fewer items in bulk and use 100% of each package before it spoils.'
      },
      {
        heading: 'Step 3: Map Meals to Your Real Schedule',
        id: 'step-3-schedule',
        paragraphs: [
          'Be honest with your weekly calendar. On late workdays or kids sports nights, plan 10-to-15-minute meals like quesadillas or egg drop soup. Reserve weekend evenings or lighter days for creative cooking or batch soups.'
        ]
      },
      {
        heading: 'Step 4: Generate a Categorized Grocery List',
        id: 'step-4-list',
        paragraphs: [
          'Organizing your shopping list by supermarket aisles (Produce, Protein, Dairy, Pantry) saves 20 minutes in store and eliminates backtrack walking.'
        ]
      }
    ],
    relatedRecipeSlugs: ['chicken-fried-rice', 'sheet-pan-chicken-fajitas', 'garlic-tomato-basil-pasta'],
    faqs: [
      { question: 'How long does weekly meal planning take?', answer: 'With our interactive 7-Day Meal Planner tool, generating a personalized weekly plan and shopping list takes less than 2 minutes.' },
      { question: 'What if plans change mid-week?', answer: 'Keep 1 or 2 flexible "pantry emergency meals" like canned tuna salad or pasta that do not rely on perishable produce.' }
    ]
  },
  {
    slug: 'how-to-reduce-food-waste-at-home',
    title: 'How to Reduce Food Waste at Home: 8 Practical Kitchen Habits',
    excerpt: 'Simple, high-impact strategies to keep produce fresher longer, repurpose leftovers creatively, and save money every month.',
    category: 'Food Waste',
    readTime: '5 min read',
    author: {
      name: 'Smart Kitchen Editorial',
      role: 'Culinary & Nutrition Team',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    publishedDate: '2026-07-22',
    lastUpdated: '2026-08-18',
    heroImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    toc: [
      { id: 'impact', title: 'The Cost of Food Waste' },
      { id: 'first-in-first-out', title: '1. Establish a "Use First" Bin' },
      { id: 'proper-storage', title: '2. Master Proper Produce Storage' },
      { id: 'repurpose-stems', title: '3. Repurpose Veggie Scraps into Broth' },
      { id: 'freezer-habits', title: '4. Freeze Herbs, Bread & Sauces' }
    ],
    content: [
      {
        heading: 'The Cost of Food Waste',
        id: 'impact',
        paragraphs: [
          'Food waste in homes accounts for a massive portion of all food discarded globally. Simple shifts in how we store and track pantry items transform our environmental footprint while keeping more money in our pockets.'
        ]
      },
      {
        heading: '1. Establish a "Use First" Bin in Your Refrigerator',
        id: 'first-in-first-out',
        paragraphs: [
          'Dedicate one clear container or top-shelf spot for items expiring in the next 48 hours: half-used bell peppers, opened cream, or lingering herbs. When planning dinner, start by using something from this bin.'
        ]
      },
      {
        heading: '2. Master Proper Produce Storage',
        id: 'proper-storage',
        paragraphs: [
          'Keep ethylene gas producers (apples, bananas, ripe tomatoes) away from sensitive produce (leafy greens, potatoes). Store herbs in a glass with an inch of water like cut flowers in the fridge.'
        ]
      }
    ],
    relatedRecipeSlugs: ['korean-egg-drop-soup', 'chicken-fried-rice', 'creamy-potato-leek-soup'],
    faqs: [
      { question: 'How can the Smart Meal Planner help track expirations?', answer: 'Use the built-in Pantry tool to record expiration dates; the app automatically tags items as "Use Soon" and suggests recipes that feature them.' }
    ]
  },
  {
    slug: 'easy-meals-with-5-ingredients',
    title: '10 Incredible Weeknight Dinners With 5 Ingredients or Fewer',
    excerpt: 'Short on groceries and energy? These 10 flavorful dinners require just 5 main ingredients without sacrificing taste or nutrition.',
    category: 'Cooking Tips',
    readTime: '4 min read',
    author: {
      name: 'Smart Kitchen Editorial',
      role: 'Culinary & Nutrition Team',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    publishedDate: '2026-08-05',
    lastUpdated: '2026-08-25',
    heroImage: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810a9?auto=format&fit=crop&w=1200&q=80',
    toc: [
      { id: 'power-of-5', title: 'Why 5-Ingredient Dinners Win' },
      { id: 'top-picks', title: 'Top 5-Ingredient Meal Concepts' },
      { id: 'pantry-basics', title: 'The Free Flavor Enhancers' }
    ],
    content: [
      {
        heading: 'Why 5-Ingredient Dinners Win',
        id: 'power-of-5',
        paragraphs: [
          'When recipes demand 18 different specialty spices and rare condiments, cooking feels like an exhausting chore. Simple, minimalist recipes let fresh primary ingredients shine.'
        ]
      },
      {
        heading: 'Top 5-Ingredient Meal Concepts',
        id: 'top-picks',
        paragraphs: [
          '1. Garlic Butter Egg Rice (Rice, Eggs, Butter, Garlic, Soy Sauce)',
          '2. Burst Tomato Basil Pasta (Pasta, Cherry Tomatoes, Garlic, Olive Oil, Basil)',
          '3. Honey Soy Salmon (Salmon, Soy Sauce, Honey, Garlic, Lemon)',
          '4. Black Bean Quesadilla (Tortillas, Black Beans, Cheddar, Cumin, Salsa)'
        ]
      }
    ],
    relatedRecipeSlugs: ['garlic-butter-egg-rice', 'garlic-tomato-basil-pasta', 'honey-soy-glazed-salmon'],
    faqs: [
      { question: 'Do salt, pepper, and water count as ingredients?', answer: 'In culinary convention, basic tap water, salt, and black pepper are assumed kitchen staples and not counted in the 5 core ingredients.' }
    ]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return CONTENT_ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticles(): Article[] {
  return CONTENT_ARTICLES;
}
