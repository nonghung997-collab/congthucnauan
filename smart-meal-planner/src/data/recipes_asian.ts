import { Recipe } from '../types';

export const ASIAN_RECIPES: Recipe[] = [
  {
    id: 'chicken-fried-rice',
    slug: 'chicken-fried-rice',
    name: 'Classic Chicken Fried Rice',
    description: 'A savory, restaurant-style fried rice loaded with tender diced chicken, eggs, green onions, and sweet carrots.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    servings: 4,
    calories: 420,
    protein: 26,
    carbs: 52,
    fat: 11,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Asian',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Quick-Meal', 'High-Protein', 'Family-Friendly', 'Under-20-Mins'],
    tags: ['chicken', 'rice', 'eggs', 'dinner', 'leftover-rice'],
    keywords: ['chicken fried rice', 'what to cook with chicken and rice', 'easy egg fried rice', 'leftover rice dinner'],
    primaryIngredientSlug: 'chicken',
    ingredients: [
      { name: 'Cooked Rice (chilled)', normalizedName: 'rice', amount: 3, unit: 'cups', category: 'Pantry' },
      { name: 'Chicken Breast (diced)', normalizedName: 'chicken', amount: 300, unit: 'g', category: 'Protein' },
      { name: 'Large Eggs', normalizedName: 'egg', amount: 2, unit: 'large', category: 'Dairy' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 2, unit: 'cloves', category: 'Produce' },
      { name: 'Green Onions (sliced)', normalizedName: 'green onion', amount: 3, unit: 'stalks', category: 'Produce' },
      { name: 'Carrots (finely diced)', normalizedName: 'carrot', amount: 1, unit: 'medium', category: 'Produce' },
      { name: 'Soy Sauce', normalizedName: 'soy sauce', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Sesame Oil', normalizedName: 'sesame oil', amount: 1, unit: 'tbsp', category: 'Pantry' },
      { name: 'Cooking Oil', normalizedName: 'cooking oil', amount: 1, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Heat cooking oil in a wok or large non-stick skillet over medium-high heat. Add diced chicken and cook for 4-5 minutes until golden and cooked through.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Push chicken to the side. Crack eggs into the open space and scramble gently for 1 minute until softly set.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Add minced garlic and diced carrots. Stir-fry together for 1-2 minutes.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Add cold cooked rice, breaking up any clumps with a spatula. Pour soy sauce and sesame oil evenly over the rice.', durationMinutes: 2 },
      { stepNumber: 5, instruction: 'Toss vigorously on high heat for 2 minutes. Fold in green onions and remove from heat.', durationMinutes: 2 }
    ],
    substitutions: [
      { original: 'Chicken Breast', alternatives: ['Tofu', 'Shrimp', 'Pork', 'Leftover Turkey'], note: 'Firm tofu works wonderfully for a vegetarian version.' },
      { original: 'White Rice', alternatives: ['Brown Rice', 'Cauliflower Rice', 'Quinoa'] },
      { original: 'Soy Sauce', alternatives: ['Tamari', 'Coconut Aminos'] }
    ],
    tips: [
      'Day-old chilled rice produces the best non-sticky texture.',
      'Cook on high heat to create wok hei aroma.'
    ],
    faqs: [
      { question: 'Can I make this with fresh hot rice?', answer: 'Fresh rice can get mushy; spread hot rice on a baking sheet and freeze for 15 minutes to dry it out first.' },
      { question: 'How long can leftovers be stored?', answer: 'Store in an airtight container in the fridge for up to 3 days. Reheat thoroughly.' }
    ],
    relatedRecipeSlugs: ['garlic-butter-egg-rice', 'vietnamese-chicken-noodle-soup', 'teriyaki-chicken-bowl']
  },
  {
    id: 'garlic-butter-egg-rice',
    slug: 'garlic-butter-egg-rice',
    name: 'Garlic Butter Egg Rice Bowl',
    description: 'An ultra-comforting 10-minute dinner bowl featuring fragrant golden garlic, fluffy scrambled eggs, and warm buttery rice.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 5,
    totalTime: 10,
    servings: 2,
    calories: 360,
    protein: 14,
    carbs: 45,
    fat: 14,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Asian',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Quick-Meal', 'Under-20-Mins', 'One-Pot'],
    tags: ['eggs', 'rice', 'garlic', 'butter', '10-minute-meal'],
    keywords: ['garlic egg rice', 'what to cook with eggs and rice', 'easy cheap dinner', '10 minute meal'],
    primaryIngredientSlug: 'eggs',
    ingredients: [
      { name: 'Cooked Rice', normalizedName: 'rice', amount: 2, unit: 'cups', category: 'Pantry' },
      { name: 'Large Eggs', normalizedName: 'egg', amount: 3, unit: 'large', category: 'Dairy' },
      { name: 'Butter', normalizedName: 'butter', amount: 2, unit: 'tbsp', category: 'Dairy' },
      { name: 'Garlic (sliced)', normalizedName: 'garlic', amount: 4, unit: 'cloves', category: 'Produce' },
      { name: 'Soy Sauce', normalizedName: 'soy sauce', amount: 1, unit: 'tbsp', category: 'Pantry' },
      { name: 'Green Onions', normalizedName: 'green onion', amount: 2, unit: 'stalks', category: 'Produce' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Melt 1 tbsp butter in a pan over low heat. Add sliced garlic and cook slowly until crispy and golden (2 minutes).', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Whisk eggs with a pinch of salt. Pour into the pan and soft scramble with the garlic.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Add hot rice, remaining 1 tbsp butter, and soy sauce. Mix gently until glossy and warm.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Garnish with green onions and serve immediately.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Butter', alternatives: ['Sesame oil', 'Olive oil'], note: 'Butter gives the richest taste.' },
      { original: 'Soy sauce', alternatives: ['Tamari', 'Maggi seasoning'] }
    ],
    tips: ['Keep heat low when frying garlic so it does not turn bitter.'],
    faqs: [
      { question: 'Is this high in protein?', answer: 'With 3 eggs and rice, it provides roughly 14-16g of complete protein per serving.' }
    ],
    relatedRecipeSlugs: ['chicken-fried-rice', 'korean-egg-drop-soup', 'crispy-tofu-stir-fry']
  },
  {
    id: 'teriyaki-chicken-bowl',
    slug: 'teriyaki-chicken-bowl',
    name: 'Quick Teriyaki Chicken & Broccoli Bowl',
    description: 'Juicy chicken glazed in a homemade sweet soy teriyaki sauce over steamed rice with crisp tender broccoli.',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    prepTime: 8,
    cookTime: 12,
    totalTime: 20,
    servings: 3,
    calories: 460,
    protein: 36,
    carbs: 48,
    fat: 12,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Asian',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['High-Protein', 'Quick-Meal', 'Family-Friendly'],
    tags: ['chicken', 'broccoli', 'rice', 'teriyaki', 'dinner'],
    keywords: ['teriyaki chicken', 'chicken and broccoli rice bowl', 'healthy chicken dinner'],
    primaryIngredientSlug: 'chicken',
    ingredients: [
      { name: 'Chicken Thighs (sliced)', normalizedName: 'chicken', amount: 450, unit: 'g', category: 'Protein' },
      { name: 'Broccoli Florets', normalizedName: 'broccoli', amount: 2, unit: 'cups', category: 'Produce' },
      { name: 'Cooked Rice', normalizedName: 'rice', amount: 3, unit: 'cups', category: 'Pantry' },
      { name: 'Soy Sauce', normalizedName: 'soy sauce', amount: 3, unit: 'tbsp', category: 'Pantry' },
      { name: 'Honey', normalizedName: 'honey', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Garlic & Ginger (minced)', normalizedName: 'garlic', amount: 1, unit: 'tbsp', category: 'Produce' },
      { name: 'Sesame Seeds', normalizedName: 'sesame oil', amount: 1, unit: 'tsp', category: 'Pantry', optional: true }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Whisk soy sauce, honey, minced garlic, and ginger in a small bowl.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Sear sliced chicken in a hot skillet for 6 minutes until cooked through and lightly browned.', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'Add broccoli florets and 2 tablespoons of water. Cover with lid for 2 minutes to steam broccoli.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Pour in the teriyaki sauce and simmer for 2 minutes until glossy and thickened.', durationMinutes: 2 },
      { stepNumber: 5, instruction: 'Serve warm over bowls of steamed jasmine rice.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Chicken Thighs', alternatives: ['Chicken Breast', 'Salmon Fillet', 'Firm Tofu'] },
      { original: 'Honey', alternatives: ['Brown Sugar', 'Maple Syrup'] }
    ],
    tips: ['Steam broccoli right in the same pan to save dishes and lock in vitamins.'],
    faqs: [
      { question: 'Can I meal prep this?', answer: 'Yes! It keeps well in meal prep containers for up to 4 days.' }
    ],
    relatedRecipeSlugs: ['chicken-fried-rice', 'honey-soy-glazed-salmon', 'crispy-tofu-stir-fry']
  },
  {
    id: 'vietnamese-chicken-noodle-soup',
    slug: 'vietnamese-chicken-noodle-soup',
    name: 'Quick Vietnamese Chicken Pho (Pho Ga)',
    description: 'A soothing, fragrant aromatic chicken broth infused with star anise, ginger, tender shredded chicken, rice noodles, and fresh herbs.',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    calories: 380,
    protein: 28,
    carbs: 50,
    fat: 7,
    difficulty: 'Medium',
    mealType: 'dinner',
    cuisine: 'Vietnamese-inspired',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Gluten-Free', 'High-Protein', 'Family-Friendly'],
    tags: ['chicken', 'rice noodles', 'soup', 'vietnamese', 'comfort-food'],
    keywords: ['vietnamese pho ga', 'quick chicken pho', 'chicken noodle soup'],
    primaryIngredientSlug: 'chicken',
    ingredients: [
      { name: 'Chicken Broth', normalizedName: 'chicken broth', amount: 6, unit: 'cups', category: 'Pantry' },
      { name: 'Chicken Breast or Thighs', normalizedName: 'chicken', amount: 350, unit: 'g', category: 'Protein' },
      { name: 'Rice Noodles', normalizedName: 'rice noodles', amount: 250, unit: 'g', category: 'Pantry' },
      { name: 'Ginger (sliced & charred)', normalizedName: 'ginger', amount: 1, unit: 'thumb', category: 'Produce' },
      { name: 'Onion (quartered)', normalizedName: 'onion', amount: 1, unit: 'medium', category: 'Produce' },
      { name: 'Fish Sauce', normalizedName: 'fish sauce', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Fresh Cilantro & Basil', normalizedName: 'cilantro', amount: 0.5, unit: 'cup', category: 'Produce' },
      { name: 'Lime Wedges', normalizedName: 'lime', amount: 1, unit: 'whole', category: 'Produce' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'In a pot, dry-sear onion slices and ginger for 2 minutes to release aromatics.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Pour in chicken broth, fish sauce, and add raw chicken. Simmer gently for 15 minutes until chicken is tender.', durationMinutes: 15 },
      { stepNumber: 3, instruction: 'Remove chicken and shred with two forks.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Cook rice noodles in boiling water for 3 minutes, then divide among 4 deep bowls.', durationMinutes: 3 },
      { stepNumber: 5, instruction: 'Top noodles with shredded chicken, pour piping hot broth over, and garnish with cilantro, fresh herbs, and lime.', durationMinutes: 2 }
    ],
    substitutions: [
      { original: 'Chicken Broth', alternatives: ['Vegetable Broth with extra soy sauce'] },
      { original: 'Fish Sauce', alternatives: ['Soy Sauce + splash of lime juice'] }
    ],
    tips: ['Charring ginger and onion beforehand creates an authentic deep restaurant broth aroma.'],
    faqs: [
      { question: 'Is Pho Ga gluten-free?', answer: 'Yes, traditional rice noodles and clean broth are naturally gluten-free (ensure fish sauce is certified GF).' }
    ],
    relatedRecipeSlugs: ['korean-egg-drop-soup', 'chicken-fried-rice', 'tofu-noodle-soup']
  },
  {
    id: 'crispy-tofu-stir-fry',
    slug: 'crispy-tofu-stir-fry',
    name: 'Crispy Garlic Tofu & Veggie Stir-Fry',
    description: 'Golden, crispy pan-fried tofu tossed with crunchy bell peppers, onions, and a savory ginger soy glaze.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 3,
    calories: 320,
    protein: 18,
    carbs: 22,
    fat: 18,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Asian',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Vegan', 'High-Protein', 'Low-Calorie'],
    tags: ['tofu', 'stir-fry', 'vegetables', 'vegan', 'healthy'],
    keywords: ['crispy tofu recipe', 'tofu vegetable stir fry', 'easy vegan dinner'],
    primaryIngredientSlug: 'tofu',
    ingredients: [
      { name: 'Firm Tofu (cubed & pressed)', normalizedName: 'tofu', amount: 400, unit: 'g', category: 'Protein' },
      { name: 'Bell Pepper (sliced)', normalizedName: 'bell pepper', amount: 1, unit: 'large', category: 'Produce' },
      { name: 'Yellow Onion (sliced)', normalizedName: 'onion', amount: 1, unit: 'medium', category: 'Produce' },
      { name: 'Garlic & Ginger (minced)', normalizedName: 'garlic', amount: 1, unit: 'tbsp', category: 'Produce' },
      { name: 'Soy Sauce', normalizedName: 'soy sauce', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Sesame Oil', normalizedName: 'sesame oil', amount: 1, unit: 'tbsp', category: 'Pantry' },
      { name: 'Cornstarch or Flour', normalizedName: 'flour', amount: 1.5, unit: 'tbsp', category: 'Pantry' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Pat tofu dry with paper towels, cut into 1-inch cubes, and toss with cornstarch to coat.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Heat oil in a skillet over medium-high heat. Fry tofu cubes for 6-8 minutes until golden on all sides. Transfer to a plate.', durationMinutes: 8 },
      { stepNumber: 3, instruction: 'In the same pan, stir-fry onion, bell peppers, garlic, and ginger for 3 minutes.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Return tofu to pan, drizzle with soy sauce and sesame oil, and toss for 1 minute until evenly coated.', durationMinutes: 2 }
    ],
    substitutions: [
      { original: 'Tofu', alternatives: ['Chicken Breast', 'Chickpeas', 'Tempeh'] },
      { original: 'Bell Pepper', alternatives: ['Broccoli', 'Zucchini', 'Carrots'] }
    ],
    tips: ['Pressing moisture out of the tofu is the key secret to getting a crunchy crust.'],
    faqs: [
      { question: 'How to make tofu extra crispy?', answer: 'Dredge in cornstarch and avoid overcrowding your frying pan.' }
    ],
    relatedRecipeSlugs: ['honey-soy-glazed-salmon', 'garlic-butter-egg-rice', 'vietnamese-lemongrass-tofu']
  },
  {
    id: 'honey-soy-glazed-salmon',
    slug: 'honey-soy-glazed-salmon',
    name: 'Pan-Seared Honey Soy Glazed Salmon',
    description: 'Flaky, pan-seared salmon with a caramelized honey, garlic, and soy reduction. Ready in 15 minutes.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    servings: 2,
    calories: 410,
    protein: 34,
    carbs: 14,
    fat: 24,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Asian',
    budgetTier: 'Standard',
    dietaryTags: ['High-Protein', 'Quick-Meal', 'Under-20-Mins'],
    tags: ['salmon', 'seafood', 'honey-soy', 'quick-dinner'],
    keywords: ['honey soy salmon', 'quick salmon dinner', 'high protein fish'],
    primaryIngredientSlug: 'salmon',
    ingredients: [
      { name: 'Salmon Fillets', normalizedName: 'salmon', amount: 2, unit: 'fillets (300g)', category: 'Protein' },
      { name: 'Soy Sauce', normalizedName: 'soy sauce', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Honey', normalizedName: 'honey', amount: 1.5, unit: 'tbsp', category: 'Pantry' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 2, unit: 'cloves', category: 'Produce' },
      { name: 'Olive Oil or Butter', normalizedName: 'olive oil', amount: 1, unit: 'tbsp', category: 'Pantry' },
      { name: 'Lemon Juice', normalizedName: 'lemon', amount: 1, unit: 'tsp', category: 'Produce' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Season salmon fillets with salt and black pepper.', durationMinutes: 1 },
      { stepNumber: 2, instruction: 'Heat olive oil in a pan over medium heat. Place salmon skin-side down (or presentation side first) and sear 4 minutes.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Flip salmon. Add minced garlic, soy sauce, and honey to the pan. Spoon simmering sauce over salmon as it glazes (3-4 minutes).', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Squeeze fresh lemon juice over the top and serve over rice or greens.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Salmon', alternatives: ['Cod', 'Tilapia', 'Chicken Breast', 'Tofu'] }
    ],
    tips: ['Do not move the salmon during the first 3 minutes of searing for a golden crust.'],
    faqs: [
      { question: 'Is salmon high in omega-3?', answer: 'Yes, it provides over 2,000mg of healthy omega-3 fatty acids per portion.' }
    ],
    relatedRecipeSlugs: ['teriyaki-chicken-bowl', 'garlic-butter-egg-rice', 'mediterranean-baked-cod']
  },
  {
    id: 'korean-egg-drop-soup',
    slug: 'korean-egg-drop-soup',
    name: '5-Minute Korean Egg Drop Soup (Gyeran-guk)',
    description: 'A comforting, warm broth with silky ribbons of egg, green onions, and toasted sesame oil.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    prepTime: 2,
    cookTime: 5,
    totalTime: 7,
    servings: 2,
    calories: 140,
    protein: 10,
    carbs: 3,
    fat: 10,
    difficulty: 'Easy',
    mealType: 'lunch',
    cuisine: 'Asian',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Low-Calorie', 'Quick-Meal', 'Under-20-Mins'],
    tags: ['eggs', 'soup', 'korean', 'low-calorie', '5-minute-meal'],
    keywords: ['egg drop soup', 'what to cook with eggs', 'quick comforting soup', 'low calorie meal'],
    primaryIngredientSlug: 'eggs',
    ingredients: [
      { name: 'Large Eggs (beaten)', normalizedName: 'egg', amount: 3, unit: 'large', category: 'Dairy' },
      { name: 'Broth (Vegetable or Chicken)', normalizedName: 'chicken broth', amount: 3, unit: 'cups', category: 'Pantry' },
      { name: 'Soy Sauce', normalizedName: 'soy sauce', amount: 1, unit: 'tbsp', category: 'Pantry' },
      { name: 'Sesame Oil', normalizedName: 'sesame oil', amount: 1, unit: 'tsp', category: 'Pantry' },
      { name: 'Green Onions (chopped)', normalizedName: 'green onion', amount: 2, unit: 'stalks', category: 'Produce' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Bring broth and soy sauce to a gentle rolling boil in a small pot.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Whisk eggs in a bowl. Slowly pour the beaten eggs in a thin circular stream into the simmering broth.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Let eggs float for 15 seconds without stirring so large silky ribbons form.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Remove from heat, drizzle with sesame oil, and stir in green onions.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Chicken broth', alternatives: ['Vegetable broth', 'Dashi stock'] }
    ],
    tips: ['Do not violently stir the broth when pouring eggs; gentle circular motion creates silky ribbon clouds.'],
    faqs: [
      { question: 'Is this suitable for late night snack?', answer: 'Yes! It is light, warm, easy on digestion, and under 150 calories.' }
    ],
    relatedRecipeSlugs: ['garlic-butter-egg-rice', 'chicken-fried-rice', 'vietnamese-chicken-noodle-soup']
  }
];
