import { Recipe } from '../types';

export const MEXICAN_AMERICAN_RECIPES: Recipe[] = [
  {
    id: 'sheet-pan-chicken-fajitas',
    slug: 'sheet-pan-chicken-fajitas',
    name: 'Easy Sheet Pan Chicken Fajitas',
    description: 'Juicy sliced chicken breasts, colorful bell peppers, and sweet onions seasoned with smoky spices and roasted to perfection on one pan.',
    image: 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 18,
    totalTime: 28,
    servings: 4,
    calories: 340,
    protein: 35,
    carbs: 16,
    fat: 14,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Mexican',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Gluten-Free', 'High-Protein', 'One-Pot', 'Family-Friendly'],
    tags: ['chicken', 'bell pepper', 'onion', 'fajitas', 'sheet-pan'],
    keywords: ['chicken fajitas', 'sheet pan dinner', 'what to make with chicken and bell peppers'],
    primaryIngredientSlug: 'chicken',
    ingredients: [
      { name: 'Chicken Breast (sliced into strips)', normalizedName: 'chicken', amount: 500, unit: 'g', category: 'Protein' },
      { name: 'Bell Peppers (sliced, any colors)', normalizedName: 'bell pepper', amount: 3, unit: 'medium', category: 'Produce' },
      { name: 'Red or Yellow Onion (sliced)', normalizedName: 'onion', amount: 1, unit: 'large', category: 'Produce' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 2, unit: 'tbsp', category: 'Pantry' },
      { name: 'Chili Powder, Cumin, Smoked Paprika', normalizedName: 'chili powder', amount: 1, unit: 'tbsp blend', category: 'Spices' },
      { name: 'Lime Juice', normalizedName: 'lime', amount: 1, unit: 'whole', category: 'Produce' },
      { name: 'Tortillas (warm)', normalizedName: 'tortilla', amount: 8, unit: 'small', category: 'Bakery', optional: true }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Preheat oven to 425°F (220°C). Place chicken strips, sliced peppers, and sliced onions on a large baking sheet.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Drizzle with olive oil and toss with chili powder, cumin, paprika, salt, and black pepper until well coated.', durationMinutes: 3 },
      { stepNumber: 3, instruction: 'Spread into a single layer and roast for 18-20 minutes until chicken is cooked through and veggies are blistered.', durationMinutes: 18 },
      { stepNumber: 4, instruction: 'Squeeze fresh lime juice over everything and serve with warm tortillas, avocado, or over a rice bowl.', durationMinutes: 2 }
    ],
    substitutions: [
      { original: 'Chicken Breast', alternatives: ['Flank Steak', 'Shrimp', 'Portobello Mushrooms', 'Tofu'] },
      { original: 'Flour Tortillas', alternatives: ['Corn Tortillas (GF)', 'Lettuce Wraps', 'Brown Rice Bowl'] }
    ],
    tips: ['Keep vegetables sliced at similar thickness so they roast evenly.'],
    faqs: [
      { question: 'Can I freeze leftovers?', answer: 'Yes! Cooked fajita chicken and peppers freeze well for up to 2 months.' }
    ],
    relatedRecipeSlugs: ['black-bean-burrito-bowl', 'loaded-beef-taco-skillet', 'chicken-fried-rice']
  },
  {
    id: 'black-bean-burrito-bowl',
    slug: 'black-bean-burrito-bowl',
    name: '15-Minute Fiesta Black Bean Burrito Bowl',
    description: 'A vibrant plant-powered bowl packed with seasoned black beans, fluffy rice, sweet corn, fresh tomatoes, creamy avocado, and salsa.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 5,
    totalTime: 15,
    servings: 2,
    calories: 430,
    protein: 16,
    carbs: 68,
    fat: 12,
    difficulty: 'Easy',
    mealType: 'lunch',
    cuisine: 'Mexican',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Vegan', 'Gluten-Free', 'High-Protein', 'Under-20-Mins'],
    tags: ['black beans', 'rice', 'avocado', 'burrito-bowl', 'quick-lunch'],
    keywords: ['black bean burrito bowl', 'healthy vegan meal prep', 'rice and black beans dinner'],
    primaryIngredientSlug: 'rice',
    ingredients: [
      { name: 'Canned Black Beans (rinsed & warmed)', normalizedName: 'black beans', amount: 1, unit: 'can (400g)', category: 'Pantry' },
      { name: 'Cooked Rice (white or brown)', normalizedName: 'rice', amount: 2, unit: 'cups', category: 'Pantry' },
      { name: 'Cherry Tomatoes (diced)', normalizedName: 'tomato', amount: 1, unit: 'cup', category: 'Produce' },
      { name: 'Avocado (diced)', normalizedName: 'avocado', amount: 1, unit: 'whole', category: 'Produce' },
      { name: 'Cumin & Garlic Powder', normalizedName: 'cumin', amount: 1, unit: 'tsp', category: 'Spices' },
      { name: 'Lime Juice & Cilantro', normalizedName: 'lime', amount: 1, unit: 'tbsp', category: 'Produce' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Warm black beans in a small skillet with cumin, garlic powder, salt, and a splash of water for 3 minutes.', durationMinutes: 3 },
      { stepNumber: 2, instruction: 'Divide cooked rice into two serving bowls.', durationMinutes: 2 },
      { stepNumber: 3, instruction: 'Top rice with seasoned warm black beans, diced cherry tomatoes, and sliced avocado.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Squeeze fresh lime juice on top, sprinkle with fresh cilantro, and enjoy.', durationMinutes: 2 }
    ],
    substitutions: [
      { original: 'Black Beans', alternatives: ['Pinto beans', 'Chickpeas', 'Ground Beef'] },
      { original: 'Rice', alternatives: ['Quinoa', 'Cauliflower rice'] }
    ],
    tips: ['Add a dollop of Greek yogurt as a high-protein sour cream replacement.'],
    faqs: [
      { question: 'Is this high in dietary fiber?', answer: 'Yes! Black beans and avocado deliver over 14g of gut-healthy fiber per bowl.' }
    ],
    relatedRecipeSlugs: ['sheet-pan-chicken-fajitas', 'loaded-beef-taco-skillet', 'chicken-fried-rice']
  },
  {
    id: 'loaded-beef-taco-skillet',
    slug: 'loaded-beef-taco-skillet',
    name: 'One-Pan Cheesy Beef Taco Skillet',
    description: 'Ground beef sautéed with taco spices, diced tomatoes, black beans, sweet onions, and melted cheddar cheese. Done in 20 minutes.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 15,
    totalTime: 20,
    servings: 4,
    calories: 460,
    protein: 34,
    carbs: 18,
    fat: 28,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'Mexican',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Gluten-Free', 'High-Protein', 'One-Pot', 'Family-Friendly'],
    tags: ['beef', 'cheese', 'tomatoes', 'taco', 'one-pan'],
    keywords: ['beef taco skillet', 'what to make with ground beef', 'easy ground beef dinner'],
    primaryIngredientSlug: 'beef',
    ingredients: [
      { name: 'Ground Beef (lean 85/15)', normalizedName: 'beef', amount: 450, unit: 'g', category: 'Protein' },
      { name: 'Yellow Onion (diced)', normalizedName: 'onion', amount: 1, unit: 'medium', category: 'Produce' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 2, unit: 'cloves', category: 'Produce' },
      { name: 'Canned Diced Tomatoes with Chilies', normalizedName: 'canned tomato', amount: 1, unit: 'can (400g)', category: 'Pantry' },
      { name: 'Taco Seasoning (Chili powder, cumin, oregano)', normalizedName: 'chili powder', amount: 2, unit: 'tbsp', category: 'Spices' },
      { name: 'Cheddar or Mozzarella Cheese (shredded)', normalizedName: 'cheddar', amount: 1, unit: 'cup', category: 'Dairy' },
      { name: 'Green Onions (chopped)', normalizedName: 'green onion', amount: 2, unit: 'stalks', category: 'Produce' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Brown ground beef in a large skillet over medium-high heat with diced onion for 6-7 minutes until fully cooked. Drain excess fat if necessary.', durationMinutes: 7 },
      { stepNumber: 2, instruction: 'Add garlic and taco spices. Cook for 1 minute until fragrant.', durationMinutes: 1 },
      { stepNumber: 3, instruction: 'Pour in canned tomatoes and simmer for 5 minutes until flavors meld.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Top evenly with shredded cheese, cover with a lid on low heat for 2 minutes until cheese is bubbly and melted.', durationMinutes: 3 },
      { stepNumber: 5, instruction: 'Garnish with chopped green onions and serve with chips or over rice.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Ground Beef', alternatives: ['Ground Turkey', 'Ground Chicken', 'Black beans & lentils'] },
      { original: 'Cheddar Cheese', alternatives: ['Pepper Jack', 'Mozzarella', 'Dairy-Free cheese'] }
    ],
    tips: ['Serve over tortilla chips, inside lettuce cups, or wrapped in burritos.'],
    faqs: [
      { question: 'Is this meal low-carb?', answer: 'Yes, when eaten directly or served in lettuce wraps it contains under 10g net carbs.' }
    ],
    relatedRecipeSlugs: ['sheet-pan-chicken-fajitas', 'black-bean-burrito-bowl', 'classic-beef-bolognese']
  },
  {
    id: 'lemon-garlic-chicken-skillet',
    slug: 'lemon-garlic-chicken-skillet',
    name: 'Skillet Lemon Herb Butter Chicken Breast',
    description: 'Tender, golden-seared chicken cutlets bathed in a bright, savory garlic lemon butter pan sauce.',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    prepTime: 5,
    cookTime: 12,
    totalTime: 17,
    servings: 3,
    calories: 330,
    protein: 38,
    carbs: 4,
    fat: 18,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'American',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Gluten-Free', 'High-Protein', 'Low-Carb', 'Keto-Friendly', 'Under-20-Mins'],
    tags: ['chicken', 'lemon', 'garlic', 'butter', 'skillet'],
    keywords: ['lemon garlic chicken', 'quick chicken breast skillet', 'keto chicken recipe'],
    primaryIngredientSlug: 'chicken',
    ingredients: [
      { name: 'Chicken Breasts (halved horizontally into cutlets)', normalizedName: 'chicken', amount: 450, unit: 'g', category: 'Protein' },
      { name: 'Butter', normalizedName: 'butter', amount: 2, unit: 'tbsp', category: 'Dairy' },
      { name: 'Olive Oil', normalizedName: 'olive oil', amount: 1, unit: 'tbsp', category: 'Pantry' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 4, unit: 'cloves', category: 'Produce' },
      { name: 'Fresh Lemon Juice', normalizedName: 'lemon', amount: 2, unit: 'tbsp', category: 'Produce' },
      { name: 'Chicken Broth', normalizedName: 'chicken broth', amount: 0.25, unit: 'cup', category: 'Pantry' },
      { name: 'Dried Oregano or Thyme', normalizedName: 'oregano', amount: 1, unit: 'tsp', category: 'Spices' }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Pat chicken cutlets dry and season both sides with salt, pepper, and oregano.', durationMinutes: 2 },
      { stepNumber: 2, instruction: 'Heat olive oil and 1 tbsp butter in a skillet over medium-high heat. Sear chicken for 4-5 minutes per side until golden and cooked to 165°F (74°C). Transfer to a plate.', durationMinutes: 9 },
      { stepNumber: 3, instruction: 'Lower heat to medium-low. Add remaining 1 tbsp butter and garlic, cooking for 30 seconds.', durationMinutes: 1 },
      { stepNumber: 4, instruction: 'Pour in chicken broth and lemon juice, scraping up delicious browned bits from the pan bottom. Simmer for 2 minutes.', durationMinutes: 2 },
      { stepNumber: 5, instruction: 'Return chicken to pan and spoon the bright lemon butter sauce over before serving.', durationMinutes: 1 }
    ],
    substitutions: [
      { original: 'Chicken Breast', alternatives: ['Chicken Thighs', 'Pork Chops', 'Salmon'] },
      { original: 'Butter', alternatives: ['Extra virgin olive oil (dairy-free)'] }
    ],
    tips: ['Cutting thick chicken breasts into thin cutlets cuts cooking time in half and ensures moist results.'],
    faqs: [
      { question: 'What sides go best with this?', answer: 'Greek lemon potatoes, steamed rice, roasted broccoli, or green salad.' }
    ],
    relatedRecipeSlugs: ['greek-lemon-potatoes', 'teriyaki-chicken-bowl', 'creamy-tomato-spinach-pasta']
  },
  {
    id: 'creamy-potato-leek-soup',
    slug: 'creamy-potato-leek-soup',
    name: 'Cozy Rustic Potato & Garlic Soup',
    description: 'A comforting, velvety potato soup made with buttery sautéed onions, garlic, and tender potatoes simmered in seasoned broth.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 4,
    calories: 260,
    protein: 6,
    carbs: 42,
    fat: 9,
    difficulty: 'Easy',
    mealType: 'dinner',
    cuisine: 'American',
    budgetTier: 'Budget Friendly',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Family-Friendly'],
    tags: ['potatoes', 'soup', 'comfort-food', 'budget-meal'],
    keywords: ['potato soup recipe', 'easy potato garlic soup', 'budget soup idea'],
    primaryIngredientSlug: 'potatoes',
    ingredients: [
      { name: 'Potatoes (peeled & diced)', normalizedName: 'potato', amount: 800, unit: 'g', category: 'Produce' },
      { name: 'Yellow Onion (chopped)', normalizedName: 'onion', amount: 1, unit: 'large', category: 'Produce' },
      { name: 'Garlic (minced)', normalizedName: 'garlic', amount: 4, unit: 'cloves', category: 'Produce' },
      { name: 'Vegetable or Chicken Broth', normalizedName: 'vegetable broth', amount: 4, unit: 'cups', category: 'Pantry' },
      { name: 'Butter or Olive Oil', normalizedName: 'butter', amount: 2, unit: 'tbsp', category: 'Dairy' },
      { name: 'Milk or Cream', normalizedName: 'milk', amount: 0.5, unit: 'cup', category: 'Dairy' },
      { name: 'Cheddar Cheese or Green Onions (for garnish)', normalizedName: 'cheddar', amount: 0.25, unit: 'cup', category: 'Dairy', optional: true }
    ],
    instructions: [
      { stepNumber: 1, instruction: 'Melt butter in a large soup pot over medium heat. Sauté onion and garlic for 4 minutes until soft.', durationMinutes: 4 },
      { stepNumber: 2, instruction: 'Add diced potatoes, broth, salt, and black pepper. Bring to a boil, then lower heat and simmer for 15 minutes until potatoes are fork-tender.', durationMinutes: 15 },
      { stepNumber: 3, instruction: 'Use an immersion blender (or potato masher) to blend half the soup for a rich, creamy consistency while keeping comforting potato chunks.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Stir in milk or cream, taste and adjust seasoning, and ladle into bowls.', durationMinutes: 2 }
    ],
    substitutions: [
      { original: 'Milk/Cream', alternatives: ['Coconut milk', 'Oat milk', 'Greek yogurt'] }
    ],
    tips: ['Mashing half with a fork gives that cozy farmhouse texture without needing a blender.'],
    faqs: [
      { question: 'How cheap is this soup to make?', answer: 'Potatoes and onions are pantry staples, costing under $1.20 per hearty bowl.' }
    ],
    relatedRecipeSlugs: ['greek-lemon-potatoes', 'korean-egg-drop-soup', 'loaded-beef-taco-skillet']
  }
];
