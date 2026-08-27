import { Recipe } from '../types';

export const MORE_RECIPES: Recipe[] = [
  {
    id: 'classic-beef-bolognese',
    slug: 'classic-beef-bolognese',
    name: 'Hearty Ground Beef Bolognese Pasta',
    description: 'A rich, slow-simmered style meat sauce made with ground beef, sweet onions, garlic, and crushed tomatoes over spaghetti.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810a9?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 4,
    calories: 490,
    protein: 32,
    carbs: 58,
    fat: 16,
    difficulty: 'Medium',
    mealType: 'dinner',
    cuisine: 'Italian',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['High-Protein', 'Family-Friendly'],
    tags: ['beef', 'pasta', 'tomatoes', 'dinner', 'comfort-food'],
    keywords: ['beef bolognese', 'spaghetti meat sauce', 'what to make with ground beef and pasta'],
    primaryIngredientSlug: 'beef',
    ingredients: [
      { name: 'Ground Beef', normalizedName: 'beef', amount: 450, unit: 'g', category: 'Protein' },
      { name: 'Spaghetti or Rigatoni', normalizedName: 'pasta', amount: 350, unit: 'g', category: 'Pantry' },
      { name: 'Canned Crushed Tomatoes', normalizedName: 'canned tomato', amount: 1, unit: 'can (400g)', category: 'Pantry' },
      { name: 'Yellow Onion (finely diced)', normalizedName: 'onion', amount: 1, unit: 'medium', category: 'Produce' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 3, unit: 'cloves', category: 'Produce' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 1, unit: 'tbsp', category: 'Pantry' },
      { name: 'Dried Oregano & Basil', normalizedName: 'oregano', amount: 1, unit: 'tbsp', category: 'Spices' },
      { name: 'Parmesan Cheese', normalizedName: 'parmesan', amount: 0.25, unit: 'cup', category: 'Dairy', optional: true }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Heat olive oil in a deep pan. Sauté onion and garlic for 3 minutes until translucent.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Add ground beef, breaking it apart with a wooden spoon, cooking until browned (6 minutes).', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'Stir in crushed tomatoes, oregano, salt, and pepper. Cover and simmer on low for 15 minutes.', durationMinutes: 15 },
      { stepNumber: 4, instruction: 'Cook pasta in boiling salted water until al dente. Toss pasta directly into the rich meat sauce.', durationMinutes: 8 },
      { stepNumber: 5, instruction: 'Serve hot with freshly grated parmesan.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Ground Beef', alternatives: ['Ground Turkey', 'Pork', 'Brown Lentils (Vegan)'] }
    ],
    tips: ['A pinch of brown sugar balances the acidity of the tomatoes.'],
    faqs: [
      { question: 'Can Bolognese sauce be frozen?', answer: 'Yes! It freezes wonderfully in meal prep containers for up to 3 months.' }
    ],
    relatedRecipeSlugs: ['garlic-tomato-basil-pasta', 'loaded-beef-taco-skillet', 'creamy-tomato-spinach-pasta']
  },
  {
    id: 'chinese-tomato-egg-stir-fry',
    slug: 'chinese-tomato-egg-stir-fry',
    name: 'Chinese Homestyle Tomato & Scrambled Eggs',
    description: 'Juicy, saucy stir-fried ripe tomatoes paired with pillowy soft scrambled eggs, scallions, and a hint of sesame oil.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 8,
    totalTime: 13,
    servings: 2,
    calories: 230,
    protein: 14,
    carbs: 9,
    fat: 16,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Asian',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Quick-Meal', 'Under-20-Mins', 'Low-Calorie'],
    tags: ['eggs', 'tomatoes', 'asian', 'budget-meal', '10-minute-dinner'],
    keywords: ['tomato and egg stir fry', 'chinese egg tomato', 'what to make with eggs and tomatoes'],
    primaryIngredientSlug: 'eggs',
    ingredients: [
      { name: 'Large Eggs', normalizedName: 'egg', amount: 4, unit: 'large', category: 'Dairy' },
      { name: 'Ripe Tomatoes (cut into wedges)', normalizedName: 'tomato', amount: 3, unit: 'medium', category: 'Produce' },
      { name: 'Green Onions (sliced)', normalizedName: 'green onion', amount: 2, unit: 'stalks', category: 'Produce' },
      { name: 'Cooking Oil', normalizedName: 'cooking oil', amount: 1.5, unit: 'tbsp', category: 'Pantry' },
      { name: 'Sugar', normalizedName: 'sugar', amount: 0.5, unit: 'tsp', category: 'Pantry' },
      { name: 'Soy Sauce or Salt', normalizedName: 'soy sauce', amount: 1, unit: 'tsp', category: 'Pantry' },
      { name: 'Sesame Oil', normalizedName: 'sesame oil', amount: 0.5, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Whisk eggs with a pinch of salt. Heat 1 tbsp oil in a skillet and soft scramble for 1-2 minutes until 80% set. Remove to a bowl.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Add remaining oil and tomato wedges. Sauté on medium-high for 3-4 minutes until juices release and form a thick sauce.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Stir in sugar and soy sauce. Return soft eggs to the pan, gently breaking them into large velvety curds.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Finish with chopped green onions and a drizzle of sesame oil. Serve over hot jasmine rice.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Fresh Tomatoes', alternatives: ['Canned Whole Peeled Tomatoes'] }
    ],
    tips: ['Slightly undercooking the eggs in step 1 ensures they stay soft and juicy after joining the tomato sauce.'],
    faqs: [
      { question: 'Why add a pinch of sugar?', answer: 'Sugar highlights the natural sweetness of the ripe tomatoes and cuts through tart acidity.' }
    ],
    relatedRecipeSlugs: ['garlic-butter-egg-rice', 'shakshuka-poached-eggs', 'chicken-fried-rice']
  },
  {
    id: 'vietnamese-lemongrass-tofu',
    slug: 'vietnamese-lemongrass-tofu',
    name: 'Vietnamese Golden Lemongrass Chili Tofu (Dau Hu Chien Sa Ot)',
    description: 'Crispy pan-fried golden tofu cubes tossed with fragrant minced lemongrass, garlic, fresh chili, and soy sauce.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 8,
    cookTime: 12,
    totalTime: 20,
    servings: 3,
    calories: 270,
    protein: 19,
    carbs: 10,
    fat: 18,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Vietnamese-inspired',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Vegan', 'High-Protein', 'Gluten-Free', 'Under-20-Mins'],
    tags: ['tofu', 'vietnamese', 'lemongrass', 'crispy-tofu', 'vegan-dinner'],
    keywords: ['vietnamese lemongrass tofu', 'dau hu chien sa ot', 'crispy vegan protein'],
    primaryIngredientSlug: 'tofu',
    ingredients: [
      { name: 'Firm Tofu (cubed)', normalizedName: 'tofu', amount: 450, unit: 'g', category: 'Protein' },
      { name: 'Lemongrass (finely minced) or Ginger', normalizedName: 'ginger', amount: 2, unit: 'tbsp', category: 'Produce' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 3, unit: 'cloves', category: 'Produce' },
      { name: 'Soy Sauce', normalizedName: 'soy sauce', amount: 1.5, unit: 'tbsp', category: 'Pantry' },
      { name: 'Cooking Oil', normalizedName: 'cooking oil', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Sugar', normalizedName: 'sugar', amount: 0.5, unit: 'tsp', category: 'Pantry' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Pat tofu dry with a kitchen towel and cut into bite-sized 1-inch cubes.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Pan-fry tofu in 1.5 tbsp oil over medium-high heat until golden and crispy on all sides (8 minutes). Remove to a plate.', durationMinutes: 8 },
      { stepNumber: 3, instruction: 'In the remaining oil, sauté minced lemongrass, garlic, and chili for 1-2 minutes until intensely aromatic.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Add soy sauce and sugar, return crispy tofu, and toss vigorously for 1 minute until glazed.', durationMinutes: 2 }
    ],
    substitutions: [
      { original: 'Lemongrass', alternatives: ['Grated Fresh Ginger + lime zest'] },
      { original: 'Tofu', alternatives: ['Chicken Thighs', 'Pork Chops', 'Shrimp'] }
    ],
    tips: ['Finely mincing lemongrass prevents any tough texture.'],
    faqs: [
      { question: 'Is this high in protein?', answer: 'Yes! Firm tofu delivers roughly 18-20g of plant protein per portion.' }
    ],
    relatedRecipeSlugs: ['crispy-tofu-stir-fry', 'chicken-fried-rice', 'vietnamese-chicken-noodle-soup']
  },
  {
    id: 'sweet-potato-black-bean-hash',
    slug: 'sweet-potato-black-bean-hash',
    name: 'Skillet Sweet Potato & Black Bean Hash',
    description: 'Caramelized tender sweet potato cubes sautéed with black beans, sweet bell peppers, cumin, and topped with a sunny fried egg.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    prepTime: 8,
    cookTime: 17,
    totalTime: 25,
    servings: 2,
    calories: 380,
    protein: 15,
    carbs: 56,
    fat: 12,
    difficulty: 'Easy',
    mealType: 'breakfast',
    cuisine: 'Mexican',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'High-Protein', 'One-Pot'],
    tags: ['sweet potato', 'black beans', 'eggs', 'hash', 'breakfast-skillet'],
    keywords: ['sweet potato hash', 'black bean sweet potato skillet', 'healthy brunch'],
    primaryIngredientSlug: 'potatoes',
    ingredients: [
      { name: 'Sweet Potato (diced into 1/2 inch cubes)', normalizedName: 'sweet potato', amount: 1, unit: 'large (350g)', category: 'Produce' },
      { name: 'Canned Black Beans (drained)', normalizedName: 'black beans', amount: 0.75, unit: 'cup', category: 'Pantry' },
      { name: 'Bell Pepper (diced)', normalizedName: 'bell pepper', amount: 1, unit: 'medium', category: 'Produce' },
      { name: 'Yellow Onion (chopped)', normalizedName: 'onion', amount: 0.5, unit: 'medium', category: 'Produce' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 1.5, unit: 'tbsp', category: 'Pantry' },
      { name: 'Cumin & Smoked Paprika', normalizedName: 'cumin', amount: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Large Eggs (fried)', normalizedName: 'egg', amount: 2, unit: 'large', category: 'Dairy' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Heat olive oil in a skillet over medium heat. Add diced sweet potatoes and cook covered for 8-10 minutes, stirring occasionally until fork tender and browned.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'Add diced onion and bell pepper. Sauté for 4 minutes until tender.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Stir in black beans, cumin, paprika, salt, and pepper, cooking for 2 minutes to heat through.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'In a separate small pan, fry eggs to your liking and slide onto the warm sweet potato hash.', durationMinutes: 3 }
    ],
    substitutions: [
      { original: 'Sweet Potato', alternatives: ['Russet potatoes', 'Butternut squash'] }
    ],
    tips: ['Cutting sweet potatoes into small 1/2-inch cubes cuts frying time significantly.'],
    faqs: [
      { question: 'Can I make this vegan?', answer: 'Yes! Simply swap the eggs for avocado slices or crispy tofu.' }
    ],
    relatedRecipeSlugs: ['black-bean-burrito-bowl', 'greek-lemon-potatoes', 'fluffy-spinach-feta-omelet']
  },
  {
    id: 'mediterranean-tuna-pasta-salad',
    slug: 'mediterranean-tuna-pasta-salad',
    name: 'Light Lemon Herb Tuna Pasta Salad',
    description: 'Chilled al dente pasta tossed with flaked tuna, sweet cherry tomatoes, diced cucumbers, extra virgin olive oil, and lemon.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810a9?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    servings: 3,
    calories: 360,
    protein: 25,
    carbs: 48,
    fat: 9,
    difficulty: 'Easy',
    mealType: 'lunch',
    cuisine: 'Mediterranean',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['High-Protein', 'Quick-Meal', 'Under-20-Mins'],
    tags: ['pasta', 'tuna', 'tomatoes', 'salad', 'meal-prep'],
    keywords: ['tuna pasta salad', 'healthy cold pasta salad', 'canned tuna pasta'],
    primaryIngredientSlug: 'pasta',
    ingredients: [
      { name: 'Fusilli or Penne Pasta', normalizedName: 'pasta', amount: 250, unit: 'g', category: 'Pantry' },
      { name: 'Canned Tuna (drained)', normalizedName: 'tuna', amount: 2, unit: 'cans', category: 'Protein' },
      { name: 'Cherry Tomatoes (halved)', normalizedName: 'tomato', amount: 1, unit: 'cup', category: 'Produce' },
      { name: 'Cucumber (diced)', normalizedName: 'cucumber', amount: 1, unit: 'medium', category: 'Produce' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Lemon Juice', normalizedName: 'lemon', amount: 2, unit: 'tbsp', category: 'Produce' },
      { name: 'Dried Oregano & Salt', normalizedName: 'oregano', amount: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Boil pasta in salted water until al dente. Drain and rinse under cold water.', durationMinutes: 10 },
      { stepNumber: 2, instruction: 'In a large bowl, combine cooled pasta, flaked tuna, cherry tomatoes, and diced cucumber.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Whisk olive oil, lemon juice, oregano, salt, and pepper in a small bowl.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Toss dressing over the salad and enjoy immediately or store in the fridge for easy weekday lunches.', durationMinutes: 2 }
    ],
    substitutions: [
      { original: 'Tuna', alternatives: ['Canned Salmon', 'Cooked Chicken', 'Chickpeas'] }
    ],
    tips: ['Rinsing pasta with cold water stops the cooking process and prevents sticking for cold salads.'],
    faqs: [
      { question: 'How long does this keep in the fridge?', answer: 'Keeps fresh and crisp for up to 4 days in an airtight container.' }
    ],
    relatedRecipeSlugs: ['quick-tuna-avocado-salad', 'garlic-tomato-basil-pasta', 'mediterranean-chickpea-salad']
  }
];
