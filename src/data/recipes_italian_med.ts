import { Recipe } from '../types';

export const ITALIAN_MED_RECIPES: Recipe[] = [
  {
    id: 'garlic-tomato-basil-pasta',
    slug: 'garlic-tomato-basil-pasta',
    name: '15-Minute Garlic Tomato & Basil Pasta',
    description: 'Sweet burst cherry tomatoes simmered in extra virgin olive oil with sliced garlic, fresh basil, and al dente pasta.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810a9?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    servings: 3,
    calories: 390,
    protein: 11,
    carbs: 62,
    fat: 12,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Italian',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Quick-Meal', 'Under-20-Mins', 'Family-Friendly'],
    tags: ['pasta', 'tomatoes', 'garlic', 'italian', 'quick-dinner'],
    keywords: ['tomato garlic pasta', 'what to make with tomatoes and pasta', 'easy 15 minute pasta'],
    primaryIngredientSlug: 'tomatoes',
    ingredients: [
      { name: 'Spaghetti or Penne Pasta', normalizedName: 'pasta', amount: 300, unit: 'g', category: 'Pantry' },
      { name: 'Cherry Tomatoes (halved)', normalizedName: 'tomato', amount: 2, unit: 'cups', category: 'Produce' },
      { name: 'Garlic (thinly sliced)', normalizedName: 'garlic', amount: 4, unit: 'cloves', category: 'Produce' },
      { name: 'Extra Virgin Olive Oil', normalizedName: 'olive oil', amount: 3, unit: 'tbsp', category: 'Pantry' },
      { name: 'Fresh Basil or Dried Oregano', normalizedName: 'basil', amount: 0.25, unit: 'cup', category: 'Produce' },
      { name: 'Parmesan Cheese (grated)', normalizedName: 'parmesan', amount: 0.25, unit: 'cup', category: 'Dairy', optional: true }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Boil pasta in salted water according to package directions until al dente. Reserve 1/2 cup of starchy pasta water before draining.', durationMinutes: 8 },
      { stepNumber: 2, instruction: 'In a large pan, heat olive oil over medium-low heat. Add sliced garlic and cook gently for 1 minute until fragrant.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Add cherry tomatoes with a pinch of salt and red pepper flakes. Cook for 5 minutes, pressing lightly until tomatoes burst into a saucy emulsion.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Toss drained pasta and fresh basil into the pan with 2-3 tbsp pasta water. Toss vigorously until glossy.', durationMinutes: 2 },
      { stepNumber: 5, instruction: 'Top with grated parmesan and black pepper.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Cherry Tomatoes', alternatives: ['Canned Whole Peeled Tomatoes', 'Diced Tomatoes'] },
      { original: 'Spaghetti', alternatives: ['Penne', 'Fusilli', 'Gluten-Free Pasta'] }
    ],
    tips: ['Saving starchy pasta water is the Italian secret to turning olive oil and tomato juices into a silky coating sauce.'],
    faqs: [
      { question: 'Can I add protein to this?', answer: 'Yes! Grilled chicken strips, canned tuna, shrimp, or chickpeas pair perfectly.' }
    ],
    relatedRecipeSlugs: ['creamy-tomato-spinach-pasta', 'shakshuka-poached-eggs', 'mediterranean-chickpea-salad']
  },
  {
    id: 'shakshuka-poached-eggs',
    slug: 'shakshuka-poached-eggs',
    name: 'Classic Mediterranean Shakshuka',
    description: 'Gently poached eggs in a rich, spiced tomato and bell pepper sauce seasoned with cumin, paprika, and fresh herbs.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    servings: 2,
    calories: 280,
    protein: 16,
    carbs: 18,
    fat: 16,
    difficulty: 'Easy',
    mealType: 'breakfast',
    cuisine: 'Mediterranean',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'High-Protein', 'One-Pot'],
    tags: ['eggs', 'tomatoes', 'bell pepper', 'shakshuka', 'one-pan'],
    keywords: ['shakshuka recipe', 'what to make with eggs and tomatoes', 'healthy brunch idea'],
    primaryIngredientSlug: 'eggs',
    ingredients: [
      { name: 'Large Eggs', normalizedName: 'egg', amount: 4, unit: 'large', category: 'Dairy' },
      { name: 'Canned Diced Tomatoes (or fresh)', normalizedName: 'canned tomato', amount: 1, unit: 'can (400g)', category: 'Pantry' },
      { name: 'Red Bell Pepper (diced)', normalizedName: 'bell pepper', amount: 1, unit: 'medium', category: 'Produce' },
      { name: 'Yellow Onion (chopped)', normalizedName: 'onion', amount: 1, unit: 'medium', category: 'Produce' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 2, unit: 'cloves', category: 'Produce' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 1.5, unit: 'tbsp', category: 'Pantry' },
      { name: 'Cumin & Paprika', normalizedName: 'cumin', amount: 1, unit: 'tsp each', category: 'Spices' },
      { name: 'Feta Cheese (crumbled)', normalizedName: 'feta', amount: 2, unit: 'tbsp', category: 'Dairy', optional: true }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Heat olive oil in a deep skillet over medium heat. Sauté onion and bell pepper for 4-5 minutes until soft.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Add garlic, cumin, paprika, salt, and black pepper. Sauté for 1 minute until fragrant.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Pour in crushed tomatoes and simmer on medium-low for 8 minutes until sauce thickens slightly.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Use a spoon to make 4 small wells in the sauce. Gently crack an egg into each well.', durationMinutes: 2 },
      { stepNumber: 5, instruction: 'Cover with lid and cook on low heat for 5-7 minutes until egg whites are set but yolks remain runny. Garnish with feta and cilantro.', durationMinutes: 6 }
    ],
    substitutions: [
      { original: 'Canned Tomatoes', alternatives: ['4 fresh chopped ripe tomatoes'] },
      { original: 'Feta Cheese', alternatives: ['Goat Cheese', 'Parmesan', 'Omit for dairy-free'] }
    ],
    tips: ['Cook with lid on low heat so the steam gently cooks the egg tops without burning the sauce beneath.'],
    faqs: [
      { question: 'What to serve with Shakshuka?', answer: 'Warm crusty sourdough bread, pita, or roasted potatoes are ideal for dipping.' }
    ],
    relatedRecipeSlugs: ['garlic-tomato-basil-pasta', 'greek-lemon-potatoes', 'mediterranean-chickpea-salad']
  },
  {
    id: 'mediterranean-chickpea-salad',
    slug: 'mediterranean-chickpea-salad',
    name: 'Zesty Mediterranean Chickpea & Cucumber Salad',
    description: 'A crunchy, refreshing 10-minute protein salad with tender chickpeas, crisp cucumbers, tomatoes, red onion, and lemon-herb dressing.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    servings: 3,
    calories: 290,
    protein: 12,
    carbs: 38,
    fat: 11,
    difficulty: 'Easy',
    mealType: 'lunch',
    cuisine: 'Mediterranean',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Under-20-Mins', 'Low-Calorie'],
    tags: ['chickpeas', 'cucumber', 'tomatoes', 'salad', 'no-cook'],
    keywords: ['chickpea salad', 'healthy meal prep salad', 'canned chickpea recipes', 'no-cook dinner'],
    primaryIngredientSlug: 'tomatoes',
    ingredients: [
      { name: 'Canned Chickpeas (rinsed & drained)', normalizedName: 'chickpeas', amount: 1, unit: 'can (400g)', category: 'Pantry' },
      { name: 'Cucumber (diced)', normalizedName: 'cucumber', amount: 1, unit: 'large', category: 'Produce' },
      { name: 'Cherry Tomatoes (halved)', normalizedName: 'tomato', amount: 1.5, unit: 'cups', category: 'Produce' },
      { name: 'Red Onion (finely diced)', normalizedName: 'red onion', amount: 0.5, unit: 'small', category: 'Produce' },
      { name: 'Extra Virgin Olive Oil', normalizedName: 'olive oil', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Fresh Lemon Juice', normalizedName: 'lemon', amount: 2, unit: 'tbsp', category: 'Produce' },
      { name: 'Dried Oregano & Salt', normalizedName: 'oregano', amount: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'In a large salad bowl, combine drained chickpeas, diced cucumber, halved tomatoes, and diced red onion.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'In a small jar, shake olive oil, lemon juice, dried oregano, salt, and black pepper.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Pour dressing over the salad and toss well to coat. Serve immediately or chill for 30 minutes to develop flavors.', durationMinutes: 3 }
    ],
    substitutions: [
      { original: 'Chickpeas', alternatives: ['Black beans', 'White cannellini beans', 'Lentils'] },
      { original: 'Lemon Juice', alternatives: ['Red wine vinegar', 'Apple cider vinegar'] }
    ],
    tips: ['This salad does not wilt, making it one of the best 4-day meal prep lunches.'],
    faqs: [
      { question: 'Can I add cheese?', answer: 'Crumbled feta cheese adds amazing tangy richness.' }
    ],
    relatedRecipeSlugs: ['shakshuka-poached-eggs', 'garlic-tomato-basil-pasta', 'greek-lemon-potatoes']
  },
  {
    id: 'creamy-tomato-spinach-pasta',
    slug: 'creamy-tomato-spinach-pasta',
    name: 'Creamy Garlic Tomato & Spinach Pasta',
    description: 'Silky 20-minute pasta coated in a luxurious garlic tomato sauce swirled with tender baby spinach and parmesan.',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    servings: 4,
    calories: 440,
    protein: 15,
    carbs: 64,
    fat: 14,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Italian',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Quick-Meal', 'Family-Friendly'],
    tags: ['pasta', 'spinach', 'tomatoes', 'cream', 'comfort-food'],
    keywords: ['creamy tomato pasta', 'spinach pasta recipe', 'easy vegetarian pasta'],
    primaryIngredientSlug: 'pasta',
    ingredients: [
      { name: 'Penne or Fusilli Pasta', normalizedName: 'pasta', amount: 350, unit: 'g', category: 'Pantry' },
      { name: 'Canned Crushed Tomatoes', normalizedName: 'canned tomato', amount: 1, unit: 'can (400g)', category: 'Pantry' },
      { name: 'Fresh Baby Spinach', normalizedName: 'spinach', amount: 3, unit: 'cups', category: 'Produce' },
      { name: 'Heavy Cream (or Greek yogurt/milk)', normalizedName: 'cream', amount: 0.5, unit: 'cup', category: 'Dairy' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 3, unit: 'cloves', category: 'Produce' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 1.5, unit: 'tbsp', category: 'Pantry' },
      { name: 'Parmesan Cheese', normalizedName: 'parmesan', amount: 0.5, unit: 'cup', category: 'Dairy' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Cook pasta in salted boiling water until al dente. Drain, reserving 1/4 cup pasta water.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Heat olive oil in a pan. Sauté garlic for 1 minute until aromatic.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Pour in crushed tomatoes, oregano, salt, and pepper. Simmer for 5 minutes.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Stir in heavy cream and baby spinach. Cook for 2 minutes until spinach wilts gently.', durationMinutes: 2 },
      { stepNumber: 5, instruction: 'Add cooked pasta and parmesan cheese. Toss until creamy and thoroughly coated.', durationMinutes: 2 }
    ],
    substitutions: [
      { original: 'Heavy Cream', alternatives: ['Greek Yogurt + milk', 'Coconut Cream', 'Cream Cheese'] },
      { original: 'Spinach', alternatives: ['Kale', 'Zucchini ribbons', 'Broccoli'] }
    ],
    tips: ['Turn heat to low when stirring in dairy to avoid curdling.'],
    faqs: [
      { question: 'Can I add cooked chicken or sausage?', answer: 'Yes! Sliced Italian sausage or rotisserie chicken turns this into a high-protein feast.' }
    ],
    relatedRecipeSlugs: ['garlic-tomato-basil-pasta', 'lemon-garlic-chicken-skillet', 'mediterranean-baked-cod']
  },
  {
    id: 'greek-lemon-potatoes',
    slug: 'greek-lemon-potatoes',
    name: 'Crispy Greek Lemon Herb Roasted Potatoes',
    description: 'Golden, crispy on the edges and meltingly tender inside, roasted in lemon juice, garlic, olive oil, and oregano broth.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 40,
    totalTime: 50,
    servings: 4,
    calories: 240,
    protein: 4,
    carbs: 38,
    fat: 9,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Mediterranean',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free'],
    tags: ['potatoes', 'lemon', 'garlic', 'greek', 'side-dish'],
    keywords: ['greek lemon potatoes', 'roasted potato recipe', 'crispy herb potatoes'],
    primaryIngredientSlug: 'potatoes',
    ingredients: [
      { name: 'Potatoes (Russet or Yukon Gold, cut in wedges)', normalizedName: 'potato', amount: 800, unit: 'g', category: 'Produce' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 3, unit: 'tbsp', category: 'Pantry' },
      { name: 'Fresh Lemon Juice', normalizedName: 'lemon', amount: 0.25, unit: 'cup', category: 'Produce' },
      { name: 'Vegetable or Chicken Broth', normalizedName: 'vegetable broth', amount: 0.5, unit: 'cup', category: 'Pantry' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 4, unit: 'cloves', category: 'Produce' },
      { name: 'Dried Oregano', normalizedName: 'oregano', amount: 1.5, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Preheat oven to 400°F (200°C). Place potato wedges in a large baking dish.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Whisk olive oil, lemon juice, broth, minced garlic, oregano, salt, and black pepper.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Pour mixture over potatoes and toss to ensure even coverage.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Roast for 40-45 minutes, flipping once halfway, until liquid evaporates and potato edges turn golden and crisp.', durationMinutes: 40 }
    ],
    substitutions: [
      { original: 'Yukon Gold Potatoes', alternatives: ['Russet potatoes', 'Red potatoes', 'Sweet potatoes'] }
    ],
    tips: ['The lemon broth braises the inside to pillowy softness while the top bakes to a golden crunch.'],
    faqs: [
      { question: 'What pairs well with Greek potatoes?', answer: 'Grilled chicken, roasted fish, Greek salad, or tzatziki dip.' }
    ],
    relatedRecipeSlugs: ['lemon-garlic-chicken-skillet', 'shakshuka-poached-eggs', 'mediterranean-baked-cod']
  },
  {
    id: 'mediterranean-baked-cod',
    slug: 'mediterranean-baked-cod',
    name: 'Easy Mediterranean Baked Cod with Tomatoes',
    description: 'Tender white fish baked in a fragrant cherry tomato, garlic, olive oil, and lemon sauce in only 20 minutes.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    servings: 2,
    calories: 270,
    protein: 32,
    carbs: 9,
    fat: 11,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Mediterranean',
    budgetTier: 'Standard',
    dietaryTags: ['Gluten-Free', 'High-Protein', 'Low-Calorie', 'Under-20-Mins', 'Keto-Friendly'],
    tags: ['cod', 'fish', 'tomatoes', 'healthy', 'low-carb'],
    keywords: ['baked cod recipe', 'mediterranean fish dinner', 'quick healthy white fish'],
    primaryIngredientSlug: 'tomatoes',
    ingredients: [
      { name: 'Cod Fillets (or tilapia/halibut)', normalizedName: 'cod', amount: 2, unit: 'fillets (350g)', category: 'Protein' },
      { name: 'Cherry Tomatoes', normalizedName: 'tomato', amount: 1.5, unit: 'cups', category: 'Produce' },
      { name: 'Garlic (sliced)', normalizedName: 'garlic', amount: 3, unit: 'cloves', category: 'Produce' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Oregano & Paprika', normalizedName: 'oregano', amount: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Lemon Slices', normalizedName: 'lemon', amount: 4, unit: 'slices', category: 'Produce' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Preheat oven to 400°F (200°C). Arrange fish fillets in a baking dish.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Scatter cherry tomatoes and sliced garlic around the fillets.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Drizzle with olive oil, sprinkle with oregano, paprika, salt, and pepper, then top fish with lemon slices.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Bake for 14-16 minutes until fish flakes easily with a fork and tomatoes have burst.', durationMinutes: 15 }
    ],
    substitutions: [
      { original: 'Cod', alternatives: ['Tilapia', 'Haddock', 'Salmon', 'Chicken Cutlets'] }
    ],
    tips: ['Do not overbake white fish; as soon as it turns opaque and flakes gently, it is ready.'],
    faqs: [
      { question: 'Is this meal keto-friendly?', answer: 'Yes! It has only 6-8g net carbs and over 30g pure protein.' }
    ],
    relatedRecipeSlugs: ['honey-soy-glazed-salmon', 'greek-lemon-potatoes', 'garlic-tomato-basil-pasta']
  }
];
