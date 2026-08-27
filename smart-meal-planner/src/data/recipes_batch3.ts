import { Recipe } from '../types';

export const BATCH3_RECIPES: Recipe[] = [
  {
    id: 'sheet-pan-lemon-salmon-asparagus',
    slug: 'sheet-pan-lemon-salmon-asparagus',
    name: 'Sheet Pan Lemon Garlic Salmon & Veggies',
    description: 'Crisp-tender roasted asparagus and flaky tender salmon baked together with lemon slices, garlic, and fresh herbs.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 12,
    totalTime: 17,
    servings: 2,
    calories: 390,
    protein: 36,
    carbs: 6,
    fat: 24,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Mediterranean',
    budgetTier: 'Standard',
    dietaryTags: ['Gluten-Free', 'High-Protein', 'Low-Carb', 'Keto-Friendly', 'One-Pot', 'Under-20-Mins'],
    tags: ['salmon', 'lemon', 'garlic', 'sheet-pan', 'healthy-dinner'],
    keywords: ['salmon sheet pan dinner', 'lemon garlic salmon', 'low carb fish recipe'],
    primaryIngredientSlug: 'salmon',
    ingredients: [
      { name: 'Salmon Fillets', normalizedName: 'salmon', amount: 2, unit: 'fillets (300g)', category: 'Protein' },
      { name: 'Broccoli or Asparagus', normalizedName: 'broccoli', amount: 2, unit: 'cups', category: 'Produce' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 1.5, unit: 'tbsp', category: 'Pantry' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 3, unit: 'cloves', category: 'Produce' },
      { name: 'Lemon (sliced)', normalizedName: 'lemon', amount: 1, unit: 'whole', category: 'Produce' },
      { name: 'Salt & Pepper', normalizedName: 'salt', amount: 1, unit: 'pinch', category: 'Spices' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Preheat oven to 400°F (200°C). Line a sheet pan with parchment paper.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Place salmon and vegetables on sheet pan. Drizzle olive oil, minced garlic, salt, and pepper over everything.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Top salmon with lemon slices and bake for 12-14 minutes until salmon flakes gently and vegetables are tender.', durationMinutes: 12 }
    ],
    substitutions: [
      { original: 'Salmon', alternatives: ['Cod Fillet', 'Chicken Cutlet', 'Shrimp'] }
    ],
    tips: ['Baking with lemon slices directly on top keeps the salmon incredibly juicy.'],
    faqs: [
      { question: 'Is this high in healthy fats?', answer: 'Yes, rich in heart-healthy EPA/DHA Omega-3 fats.' }
    ],
    relatedRecipeSlugs: ['honey-soy-glazed-salmon', 'mediterranean-baked-cod', 'lemon-garlic-chicken-skillet']
  },
  {
    id: 'crispy-black-bean-cheese-quesadilla',
    slug: 'crispy-black-bean-cheese-quesadilla',
    name: '10-Minute Crispy Black Bean & Cheddar Quesadilla',
    description: 'Golden skillet-toasted flour tortillas stuffed with seasoned black beans, sweet corn, melted cheddar cheese, and salsa.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    prepTime: 3,
    cookTime: 7,
    totalTime: 10,
    servings: 2,
    calories: 380,
    protein: 18,
    carbs: 42,
    fat: 16,
    difficulty: 'Easy',
    mealType: 'lunch',
    cuisine: 'Mexican',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'High-Protein', 'Quick-Meal', 'Under-20-Mins'],
    tags: ['tortilla', 'black beans', 'cheese', 'quesadilla', '10-minute-meal'],
    keywords: ['black bean quesadilla', 'quick cheap lunch', 'vegetarian quesadilla'],
    primaryIngredientSlug: 'tortilla',
    ingredients: [
      { name: 'Flour or Corn Tortillas', normalizedName: 'tortilla', amount: 2, unit: 'large', category: 'Bakery' },
      { name: 'Canned Black Beans (drained)', normalizedName: 'black beans', amount: 0.75, unit: 'cup', category: 'Pantry' },
      { name: 'Cheddar or Mozzarella Cheese (shredded)', normalizedName: 'cheddar', amount: 0.75, unit: 'cup', category: 'Dairy' },
      { name: 'Cumin & Chili Powder', normalizedName: 'cumin', amount: 0.5, unit: 'tsp', category: 'Spices' },
      { name: 'Cooking Oil or Butter', normalizedName: 'butter', amount: 1, unit: 'tsp', category: 'Dairy' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'In a small bowl, lightly mash black beans with cumin, chili powder, and a pinch of salt.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Melt a dab of butter in a skillet over medium heat. Place tortilla flat in the pan.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Sprinkle cheese and seasoned black beans over half the tortilla, then fold the other half over.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'Cook for 3 minutes per side until tortilla is crunchy golden brown and cheese is completely melted.', durationMinutes: 5 }
    ],
    substitutions: [
      { original: 'Flour Tortilla', alternatives: ['Corn Tortilla (Gluten-Free)', 'Whole Wheat Wrap'] }
    ],
    tips: ['Lightly mashing the beans prevents them from spilling out when slicing the quesadilla.'],
    faqs: [
      { question: 'What to dip it in?', answer: 'Greek yogurt, sour cream, guacamole, or your favorite salsa.' }
    ],
    relatedRecipeSlugs: ['black-bean-burrito-bowl', 'sheet-pan-chicken-fajitas', 'loaded-beef-taco-skillet']
  },
  {
    id: 'vietnamese-shaking-beef',
    slug: 'vietnamese-shaking-beef',
    name: 'Vietnamese Shaking Beef (Bo Luc Lac)',
    description: 'Tender wok-seared beef steak cubes tossed with garlic, soy sauce, oyster sauce, and served over fresh watercress or lettuce with lime dipping sauce.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 6,
    totalTime: 16,
    servings: 3,
    calories: 410,
    protein: 38,
    carbs: 8,
    fat: 25,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Vietnamese-inspired',
    budgetTier: 'Standard',
    dietaryTags: ['High-Protein', 'Low-Carb', 'Quick-Meal', 'Under-20-Mins'],
    tags: ['beef', 'steak', 'vietnamese', 'bo-luc-lac', 'quick-dinner'],
    keywords: ['vietnamese shaking beef', 'bo luc lac recipe', 'quick steak stir fry'],
    primaryIngredientSlug: 'beef',
    ingredients: [
      { name: 'Sirloin or Flank Steak (cut in 1-inch cubes)', normalizedName: 'beef', amount: 450, unit: 'g', category: 'Protein' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 4, unit: 'cloves', category: 'Produce' },
      { name: 'Soy Sauce', normalizedName: 'soy sauce', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Oyster Sauce or Fish Sauce', normalizedName: 'fish sauce', amount: 1, unit: 'tbsp', category: 'Pantry' },
      { name: 'Butter', normalizedName: 'butter', amount: 1, unit: 'tbsp', category: 'Dairy' },
      { name: 'Red Onion (sliced in chunks)', normalizedName: 'red onion', amount: 1, unit: 'medium', category: 'Produce' },
      { name: 'Lime Juice & Black Pepper (for dip)', normalizedName: 'lime', amount: 1, unit: 'whole', category: 'Produce' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Marinate beef cubes with soy sauce, oyster sauce, garlic, and black pepper for 10 minutes.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Heat a wok or heavy skillet on high heat until smoking hot. Add oil and sear beef cubes in a single layer without moving for 2 minutes.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Shake and toss the pan vigorously for 2 minutes. Toss in onion chunks and 1 tbsp butter to glaze.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Serve immediately with a simple dip of fresh lime juice, sea salt, and crushed black pepper.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Beef', alternatives: ['Chicken Thighs', 'Tofu Cubes', 'Pork Tenderloin'] }
    ],
    tips: ['High scorching heat is the essential key to searing the outside while keeping the beef succulent and tender inside.'],
    faqs: [
      { question: 'Why is it called Shaking Beef?', answer: 'From the iconic motion of the chef vigorously shaking the wok to sear all sides of the beef cubes.' }
    ],
    relatedRecipeSlugs: ['vietnamese-chicken-noodle-soup', 'chicken-fried-rice', 'loaded-beef-taco-skillet']
  },
  {
    id: 'golden-turmeric-lentil-dahl',
    slug: 'golden-turmeric-lentil-dahl',
    name: 'Cozy Golden Turmeric Red Lentil Dahl',
    description: 'Creamy, deeply nourishing red lentils simmered with coconut milk, aromatic ginger, garlic, turmeric, and cumin.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 20,
    totalTime: 25,
    servings: 4,
    calories: 340,
    protein: 16,
    carbs: 48,
    fat: 10,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Indian',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'High-Protein', 'One-Pot'],
    tags: ['lentils', 'coconut milk', 'vegan', 'curry', 'comfort-food'],
    keywords: ['red lentil dahl', 'vegan lentil curry', 'cheap healthy dinner'],
    primaryIngredientSlug: 'lentils',
    ingredients: [
      { name: 'Red Lentils (rinsed)', normalizedName: 'lentils', amount: 1.5, unit: 'cups', category: 'Pantry' },
      { name: 'Coconut Milk (canned)', normalizedName: 'coconut milk', amount: 1, unit: 'can (400ml)', category: 'Pantry' },
      { name: 'Vegetable Broth or Water', normalizedName: 'vegetable broth', amount: 3, unit: 'cups', category: 'Pantry' },
      { name: 'Garlic & Ginger (minced)', normalizedName: 'garlic', amount: 2, unit: 'tbsp', category: 'Produce' },
      { name: 'Yellow Onion (diced)', normalizedName: 'onion', amount: 1, unit: 'medium', category: 'Produce' },
      { name: 'Turmeric & Cumin & Garam Masala', normalizedName: 'cumin', amount: 1, unit: 'tbsp blend', category: 'Spices' },
      { name: 'Fresh Baby Spinach', normalizedName: 'spinach', amount: 2, unit: 'cups', category: 'Produce', optional: true }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Sauté diced onion, minced garlic, and ginger in olive oil or coconut oil for 3 minutes.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Add turmeric, cumin, and spices, stirring for 1 minute until fragrant.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Add rinsed red lentils, broth, and coconut milk. Bring to a boil, then simmer on low for 18 minutes until lentils melt into a creamy stew.', durationMinutes: 18 },
      { stepNumber: 4, instruction: 'Fold in baby spinach until wilted. Season with salt, lemon juice, and serve with rice or warm flatbread.', durationMinutes: 3 }
    ],
    substitutions: [
      { original: 'Red Lentils', alternatives: ['Yellow split peas', 'Brown lentils (cook 10 mins longer)'] },
      { original: 'Coconut Milk', alternatives: ['Regular Milk or Greek Yogurt'] }
    ],
    tips: ['Red lentils cook quickly without needing any pre-soaking.'],
    faqs: [
      { question: 'Is this budget friendly?', answer: 'Yes! Dried lentils and canned coconut milk cost less than $1 per hearty portion.' }
    ],
    relatedRecipeSlugs: ['mediterranean-chickpea-salad', 'crispy-tofu-stir-fry', 'black-bean-burrito-bowl']
  }
];
