import { Recipe } from '../types';

export const HEALTHY_QUICK_RECIPES: Recipe[] = [
  {
    id: 'fluffy-spinach-feta-omelet',
    slug: 'fluffy-spinach-feta-omelet',
    name: 'Fluffy Spinach & Feta Breakfast Omelet',
    description: 'A protein-packed 8-minute breakfast omelet with wilted baby spinach, tangy crumbled feta, and fresh herbs.',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
    prepTime: 3,
    cookTime: 5,
    totalTime: 8,
    servings: 1,
    calories: 290,
    protein: 22,
    carbs: 4,
    fat: 20,
    difficulty: 'Easy',
    mealType: 'breakfast',
    cuisine: 'Mediterranean',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'High-Protein', 'Low-Carb', 'Keto-Friendly', 'Under-20-Mins'],
    tags: ['eggs', 'spinach', 'feta', 'breakfast', 'low-carb'],
    keywords: ['spinach feta omelet', 'high protein breakfast', 'what to make with eggs and spinach'],
    primaryIngredientSlug: 'eggs',
    ingredients: [
      { name: 'Large Eggs', normalizedName: 'egg', amount: 3, unit: 'large', category: 'Dairy' },
      { name: 'Fresh Baby Spinach', normalizedName: 'spinach', amount: 1.5, unit: 'cups', category: 'Produce' },
      { name: 'Feta Cheese (crumbled)', normalizedName: 'feta', amount: 2, unit: 'tbsp', category: 'Dairy' },
      { name: 'Butter or Olive Oil', normalizedName: 'butter', amount: 1, unit: 'tsp', category: 'Dairy' },
      { name: 'Salt & Black Pepper', normalizedName: 'salt', amount: 1, unit: 'pinch', category: 'Spices' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Whisk eggs vigorously with salt and black pepper until completely smooth.', durationMinutes: 1 },
      { stepNumber: 2, instruction: 'Melt butter in an 8-inch non-stick skillet over medium-low heat. Add spinach and cook for 1 minute until wilted.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Pour whisked eggs over the spinach. As edges set, gently pull them toward center with a silicone spatula.', durationMinutes: 2 },
      { stepNumber: 4, instruction: 'When the top is almost set, sprinkle feta cheese over one half. Fold omelet over and slide onto a plate.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Feta Cheese', alternatives: ['Cheddar', 'Goat cheese', 'Mozzarella'] },
      { original: 'Spinach', alternatives: ['Mushrooms', 'Tomatoes', 'Bell pepper'] }
    ],
    tips: ['Keep heat moderate to low so the eggs stay tender and buttery without browning.'],
    faqs: [
      { question: 'Is this good for weight loss?', answer: 'Yes! High protein keeps you satiated for hours with minimal carbs.' }
    ],
    relatedRecipeSlugs: ['avocado-egg-toast', 'garlic-butter-egg-rice', 'shakshuka-poached-eggs']
  },
  {
    id: 'avocado-egg-toast',
    slug: 'avocado-egg-toast',
    name: 'Gourmet Crispy Fried Egg Avocado Toast',
    description: 'Toasted artisan sourdough loaded with mashed seasoned avocado, a crispy-edged fried egg, and red pepper flakes.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    prepTime: 3,
    cookTime: 5,
    totalTime: 8,
    servings: 1,
    calories: 330,
    protein: 14,
    carbs: 28,
    fat: 19,
    difficulty: 'Easy',
    mealType: 'breakfast',
    cuisine: 'American',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Quick-Meal', 'Under-20-Mins'],
    tags: ['avocado', 'eggs', 'bread', 'breakfast', 'toast'],
    keywords: ['avocado egg toast', 'easy healthy breakfast', 'avocado and eggs'],
    primaryIngredientSlug: 'eggs',
    ingredients: [
      { name: 'Sourdough or Whole Grain Bread', normalizedName: 'bread', amount: 1, unit: 'thick slice', category: 'Bakery' },
      { name: 'Ripe Avocado', normalizedName: 'avocado', amount: 0.5, unit: 'medium', category: 'Produce' },
      { name: 'Large Egg', normalizedName: 'egg', amount: 1, unit: 'large', category: 'Dairy' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 1, unit: 'tsp', category: 'Pantry' },
      { name: 'Lemon Juice', normalizedName: 'lemon', amount: 0.5, unit: 'tsp', category: 'Produce' },
      { name: 'Red Pepper Flakes & Flaky Salt', normalizedName: 'red pepper flakes', amount: 1, unit: 'pinch', category: 'Spices' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Toast bread slice in toaster or skillet until crunchy and golden.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Mash half avocado with lemon juice, salt, and black pepper. Spread generously over toast.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Fry egg in olive oil over medium-high heat until edges are crisp and yolk is runny.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Slide fried egg on top of avocado toast, garnish with red pepper flakes, and serve.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Sourdough', alternatives: ['Gluten-free bread', 'English muffin', 'Tortilla'] }
    ],
    tips: ['A squeeze of fresh lemon juice prevents avocado oxidation and adds bright contrast.'],
    faqs: [
      { question: 'Can I use a poached egg?', answer: 'Yes! A poached or soft-boiled egg is equally delicious.' }
    ],
    relatedRecipeSlugs: ['fluffy-spinach-feta-omelet', 'garlic-butter-egg-rice', 'mediterranean-chickpea-salad']
  },
  {
    id: 'quick-tuna-avocado-salad',
    slug: 'quick-tuna-avocado-salad',
    name: '10-Minute High-Protein Tuna & Avocado Salad',
    description: 'A creamy, mayo-free lunch salad combining flaked canned tuna, creamy mashed avocado, diced celery, red onion, and lemon.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    servings: 2,
    calories: 290,
    protein: 30,
    carbs: 9,
    fat: 16,
    difficulty: 'Easy',
    mealType: 'lunch',
    cuisine: 'American',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Gluten-Free', 'High-Protein', 'Low-Carb', 'Keto-Friendly', 'Under-20-Mins'],
    tags: ['tuna', 'avocado', 'salad', 'high-protein', 'no-cook'],
    keywords: ['tuna avocado salad', 'canned tuna recipe', 'healthy high protein lunch', 'no mayo tuna salad'],
    primaryIngredientSlug: 'avocado',
    ingredients: [
      { name: 'Canned Tuna (in water, drained)', normalizedName: 'tuna', amount: 2, unit: 'cans (240g total)', category: 'Protein' },
      { name: 'Ripe Avocado (mashed)', normalizedName: 'avocado', amount: 1, unit: 'whole', category: 'Produce' },
      { name: 'Celery (finely diced)', normalizedName: 'celery', amount: 1, unit: 'stalk', category: 'Produce' },
      { name: 'Red Onion (diced)', normalizedName: 'red onion', amount: 2, unit: 'tbsp', category: 'Produce' },
      { name: 'Lemon Juice', normalizedName: 'lemon', amount: 1, unit: 'tbsp', category: 'Produce' },
      { name: 'Salt & Black Pepper', normalizedName: 'salt', amount: 1, unit: 'pinch', category: 'Spices' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'In a mixing bowl, mash the avocado with lemon juice, salt, and pepper until creamy.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Add drained tuna, diced celery, and red onion. Mix with a fork until well combined.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Enjoy inside lettuce cups, on whole-grain toast, or scooped over crackers.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Canned Tuna', alternatives: ['Canned Salmon', 'Shredded Chicken Breast', 'Mashed Chickpeas (Vegan)'] }
    ],
    tips: ['Avocado completely replaces mayonnaise while adding healthy monounsaturated fats.'],
    faqs: [
      { question: 'How long can this be stored?', answer: 'Store in an airtight container with plastic wrap pressed against the surface for up to 2 days.' }
    ],
    relatedRecipeSlugs: ['avocado-egg-toast', 'mediterranean-chickpea-salad', 'honey-soy-glazed-salmon']
  },
  {
    id: 'garlic-parmesan-roasted-broccoli',
    slug: 'garlic-parmesan-roasted-broccoli',
    name: 'Crispy Garlic Parmesan Roasted Broccoli',
    description: 'Crispy charred broccoli florets tossed with olive oil, garlic, red pepper flakes, and finished with nutty parmesan cheese.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    servings: 3,
    calories: 160,
    protein: 8,
    carbs: 11,
    fat: 10,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Healthy Fusion',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Low-Calorie', 'Low-Carb', 'Keto-Friendly'],
    tags: ['broccoli', 'parmesan', 'garlic', 'side-dish', 'roasted-veggies'],
    keywords: ['roasted broccoli recipe', 'garlic parmesan broccoli', 'healthy vegetable side'],
    primaryIngredientSlug: 'broccoli',
    ingredients: [
      { name: 'Broccoli Florets (cut into bite sizes)', normalizedName: 'broccoli', amount: 4, unit: 'cups', category: 'Produce' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 3, unit: 'cloves', category: 'Produce' },
      { name: 'Parmesan Cheese (grated)', normalizedName: 'parmesan', amount: 0.25, unit: 'cup', category: 'Dairy' },
      { name: 'Lemon Wedges', normalizedName: 'lemon', amount: 1, unit: 'whole', category: 'Produce' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Preheat oven to 425°F (220°C). Place dry broccoli florets on a baking sheet.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Toss with olive oil, minced garlic, salt, and black pepper.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Roast for 15 minutes until edges are tender-crisp and beautifully caramelized.', durationMinutes: 15 },
      { stepNumber: 4, instruction: 'Sprinkle with parmesan cheese and a squeeze of fresh lemon juice before serving.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Broccoli', alternatives: ['Cauliflower', 'Brussels Sprouts', 'Green Beans'] },
      { original: 'Parmesan', alternatives: ['Nutritional yeast (vegan)', 'Pecorino'] }
    ],
    tips: ['Make sure broccoli is completely dry before roasting to get crispy caramelized tips.'],
    faqs: [
      { question: 'Why roast at high temperature?', answer: 'High heat (425°F) roasts quickly without making broccoli soggy.' }
    ],
    relatedRecipeSlugs: ['teriyaki-chicken-bowl', 'lemon-garlic-chicken-skillet', 'greek-lemon-potatoes']
  }
];
