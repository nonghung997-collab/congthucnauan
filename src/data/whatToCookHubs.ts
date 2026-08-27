import { WhatToCookHub } from '../types';

export const WHAT_TO_COOK_HUBS: WhatToCookHub[] = [
  {
    slug: 'what-to-cook-tonight',
    title: 'What to Cook Tonight: 10 Fast Weeknight Dinner Solutions',
    h1: 'What to Cook Tonight When You Have No Plan',
    metaDescription: 'Stuck wondering what to make for dinner tonight? Discover 10 fast, delicious meals ready in under 25 minutes with common kitchen ingredients.',
    heroImage: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80',
    intro: 'It is 6:30 PM, you are hungry, tired, and staring into the fridge. Skip expensive takeout. Here is our curated collection of fast, crowd-pleasing dinners that come together with pantry basics in under 25 minutes.',
    targetAudience: 'Busy professionals, parents, and anyone looking for instant dinner inspiration without a trip to the store.',
    keyAdvice: [
      'Look for the protein-grain-veggie trifecta: A quick sear of protein + leftover grain or pasta + quick-sautéed vegetable.',
      'One-pan cooking saves clean-up time and keeps energy high after a long workday.',
      'Rely on high-impact flavor boosters like soy sauce, garlic, butter, lemon, or parmesan.'
    ],
    filterCriteria: {
      maxTime: 25,
      mealType: 'dinner'
    },
    faqs: [
      { question: 'What is the absolute fastest hot dinner I can cook?', answer: 'Garlic butter egg rice or 10-minute quesadillas take under 10 minutes from stove to table.' },
      { question: 'How can I cook dinner with minimal dishes?', answer: 'Choose sheet pan recipes (like sheet-pan fajitas or salmon) or one-pan pasta skillet recipes.' }
    ]
  },
  {
    slug: 'what-to-cook-for-dinner',
    title: 'What to Cook For Dinner: 25+ Easy Dinner Ideas',
    h1: 'Easy & Delicious Dinner Ideas for Any Night of the Week',
    metaDescription: 'Explore our complete dinner inspiration guide. From budget-friendly comfort food to healthy low-calorie dinners.',
    heroImage: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810a9?auto=format&fit=crop&w=1200&q=80',
    intro: 'Dinner should be the most comforting part of your day, not a source of stress. Whether cooking for one or feeding a family of four, explore categorized recipes that match your diet and time constraints.',
    targetAudience: 'Home cooks searching for weekly rotation variety and healthy weeknight inspiration.',
    keyAdvice: [
      'Pick 2 core proteins for the week to keep grocery shopping simple and affordable.',
      'Batch-cook base carbs like jasmine rice or roast sweet potatoes on Sunday for instant weeknight assembly.'
    ],
    filterCriteria: {
      mealType: 'dinner'
    },
    faqs: [
      { question: 'How do I stop making the same 3 dinners every week?', answer: 'Use the Smart Meal Planner tool: input 2 ingredients in your pantry and let the engine suggest new cultural variations you have never tried.' }
    ]
  },
  {
    slug: 'what-to-cook-with-chicken',
    title: 'What to Cook With Chicken: 12 Easy Chicken Dinner Ideas',
    h1: 'What to Cook With Chicken in Your Fridge',
    metaDescription: 'Have raw chicken breasts, thighs, or leftovers? Discover quick stir-fries, crispy skillets, and fragrant soups.',
    heroImage: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80',
    intro: 'Chicken is the most searched ingredient in home cooking. If you have chicken on hand, you can make everything from quick skillet cutlets to comforting Pho and zesty fajitas.',
    targetAudience: 'Anyone holding raw chicken or leftover rotisserie chicken.',
    keyAdvice: [
      'Slice chicken thinly for quick cooking.',
      'Use lemon or soy marinades to tenderize.'
    ],
    filterCriteria: {
      ingredient: 'chicken',
      mealType: 'dinner'
    },
    faqs: [
      { question: 'Can I swap chicken breasts and thighs?', answer: 'Yes! Thighs take 2–3 minutes longer to cook but are more forgiving and remain extra juicy.' }
    ]
  },
  {
    slug: 'what-to-cook-with-eggs',
    title: 'What to Cook With Eggs: Beyond Breakfast Dinner Ideas',
    h1: 'What to Cook With Eggs for Fast, Cheap Meals',
    metaDescription: 'Turn a carton of eggs into high-protein Shakshuka, savory fried rice, creamy soups, and gourmet omelets in 15 minutes or less.',
    heroImage: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1200&q=80',
    intro: 'Eggs are nature’s fastest fast food. When your fridge seems empty, 2 or 3 eggs combined with rice, canned tomatoes, or spinach make an incredible restaurant-quality meal.',
    targetAudience: 'College students, budget-conscious cooks, and anyone needing a quick protein fix.',
    keyAdvice: [
      'Cook over gentle heat to retain silky moisture.',
      'Combine with aromatic garlic or scallions for deep savory flavor.'
    ],
    filterCriteria: {
      ingredient: 'eggs'
    },
    faqs: [
      { question: 'Is egg protein bioavailable?', answer: 'Yes, egg protein has one of the highest biological values (100) of any food source on the planet.' }
    ]
  }
];

export function getWhatToCookHub(slug: string): WhatToCookHub | undefined {
  return WHAT_TO_COOK_HUBS.find((h) => h.slug === slug);
}

export function getAllWhatToCookHubs(): WhatToCookHub[] {
  return WHAT_TO_COOK_HUBS;
}
