// Synonym and normalization dictionary for food ingredients

export const INGREDIENT_SYNONYMS: Record<string, string> = {
  // Chicken
  'chicken': 'chicken',
  'chicken breast': 'chicken',
  'chicken thighs': 'chicken',
  'chicken thigh': 'chicken',
  'chicken wings': 'chicken',
  'chicken wing': 'chicken',
  'chicken fillet': 'chicken',
  'rotisserie chicken': 'chicken',
  'cooked chicken': 'chicken',
  'ground chicken': 'chicken',
  'shredded chicken': 'chicken',

  // Beef & Pork
  'beef': 'beef',
  'ground beef': 'beef',
  'minced beef': 'beef',
  'steak': 'beef',
  'beef steak': 'beef',
  'flank steak': 'beef',
  'beef chuck': 'beef',
  'pork': 'pork',
  'pork chop': 'pork',
  'pork chops': 'pork',
  'ground pork': 'pork',
  'bacon': 'bacon',
  'bacon strip': 'bacon',
  'bacon strips': 'bacon',
  'ham': 'ham',
  'sausage': 'sausage',
  'sausages': 'sausage',

  // Seafood
  'salmon': 'salmon',
  'salmon fillet': 'salmon',
  'salmon fillets': 'salmon',
  'tuna': 'tuna',
  'canned tuna': 'tuna',
  'shrimp': 'shrimp',
  'prawns': 'shrimp',
  'shrimps': 'shrimp',
  'cod': 'cod',
  'white fish': 'white fish',
  'tilapia': 'tilapia',

  // Eggs & Dairy
  'egg': 'egg',
  'eggs': 'egg',
  'large egg': 'egg',
  'large eggs': 'egg',
  'egg yolk': 'egg',
  'egg white': 'egg',
  'milk': 'milk',
  'whole milk': 'milk',
  'skim milk': 'milk',
  'almond milk': 'almond milk',
  'oat milk': 'oat milk',
  'cream': 'cream',
  'heavy cream': 'cream',
  'sour cream': 'sour cream',
  'yogurt': 'yogurt',
  'greek yogurt': 'greek yogurt',
  'butter': 'butter',
  'unsalted butter': 'butter',
  'salted butter': 'butter',
  'cheese': 'cheese',
  'cheddar': 'cheddar',
  'cheddar cheese': 'cheddar',
  'mozzarella': 'mozzarella',
  'mozzarella cheese': 'mozzarella',
  'parmesan': 'parmesan',
  'parmesan cheese': 'parmesan',
  'feta': 'feta',
  'feta cheese': 'feta',
  'cream cheese': 'cream cheese',

  // Plant Proteins
  'tofu': 'tofu',
  'firm tofu': 'tofu',
  'silken tofu': 'tofu',
  'tempeh': 'tempeh',
  'chickpeas': 'chickpeas',
  'garbanzo beans': 'chickpeas',
  'canned chickpeas': 'chickpeas',
  'black beans': 'black beans',
  'kidney beans': 'kidney beans',
  'lentils': 'lentils',
  'red lentils': 'lentils',
  'brown lentils': 'lentils',

  // Vegetables & Produce
  'tomato': 'tomato',
  'tomatoes': 'tomato',
  'cherry tomato': 'tomato',
  'cherry tomatoes': 'tomato',
  'roma tomato': 'tomato',
  'roma tomatoes': 'tomato',
  'canned tomatoes': 'canned tomato',
  'diced tomatoes': 'canned tomato',
  'tomato paste': 'tomato paste',
  'tomato sauce': 'tomato sauce',
  'potato': 'potato',
  'potatoes': 'potato',
  'russet potato': 'potato',
  'russet potatoes': 'potato',
  'baby potato': 'potato',
  'baby potatoes': 'potato',
  'sweet potato': 'sweet potato',
  'sweet potatoes': 'sweet potato',
  'onion': 'onion',
  'onions': 'onion',
  'yellow onion': 'onion',
  'yellow onions': 'onion',
  'red onion': 'red onion',
  'red onions': 'red onion',
  'green onion': 'green onion',
  'green onions': 'green onion',
  'scallion': 'green onion',
  'scallions': 'green onion',
  'garlic': 'garlic',
  'garlic clove': 'garlic',
  'garlic cloves': 'garlic',
  'minced garlic': 'garlic',
  'ginger': 'ginger',
  'fresh ginger': 'ginger',
  'minced ginger': 'ginger',
  'bell pepper': 'bell pepper',
  'bell peppers': 'bell pepper',
  'red bell pepper': 'bell pepper',
  'green bell pepper': 'bell pepper',
  'yellow bell pepper': 'bell pepper',
  'capsicum': 'bell pepper',
  'pepper': 'bell pepper',
  'spinach': 'spinach',
  'baby spinach': 'spinach',
  'fresh spinach': 'spinach',
  'kale': 'kale',
  'broccoli': 'broccoli',
  'broccoli florets': 'broccoli',
  'cauliflower': 'cauliflower',
  'cauliflower florets': 'cauliflower',
  'carrot': 'carrot',
  'carrots': 'carrot',
  'baby carrots': 'carrot',
  'celery': 'celery',
  'celery ribs': 'celery',
  'celery stalk': 'celery',
  'zucchini': 'zucchini',
  'courgette': 'zucchini',
  'cucumber': 'cucumber',
  'cucumbers': 'cucumber',
  'mushroom': 'mushroom',
  'mushrooms': 'mushroom',
  'button mushrooms': 'mushroom',
  'cremini mushrooms': 'mushroom',
  'avocado': 'avocado',
  'avocados': 'avocado',
  'lemon': 'lemon',
  'lemons': 'lemon',
  'lemon juice': 'lemon',
  'lime': 'lime',
  'limes': 'lime',
  'lime juice': 'lime',
  'cilantro': 'cilantro',
  'fresh cilantro': 'cilantro',
  'coriander': 'cilantro',
  'parsley': 'parsley',
  'fresh parsley': 'parsley',
  'basil': 'basil',
  'fresh basil': 'basil',

  // Grains, Pasta & Bakery
  'rice': 'rice',
  'white rice': 'rice',
  'jasmine rice': 'rice',
  'basmati rice': 'rice',
  'brown rice': 'brown rice',
  'cooked rice': 'rice',
  'pasta': 'pasta',
  'spaghetti': 'pasta',
  'penne': 'pasta',
  'fusilli': 'pasta',
  'macaroni': 'pasta',
  'fettuccine': 'pasta',
  'noodles': 'noodles',
  'ramen noodles': 'noodles',
  'egg noodles': 'noodles',
  'rice noodles': 'rice noodles',
  'bread': 'bread',
  'white bread': 'bread',
  'whole wheat bread': 'bread',
  'toast': 'bread',
  'sourdough': 'bread',
  'tortilla': 'tortilla',
  'tortillas': 'tortilla',
  'flour tortilla': 'tortilla',
  'corn tortilla': 'tortilla',
  'oats': 'oats',
  'rolled oats': 'oats',
  'quinoa': 'quinoa',
  'flour': 'flour',
  'all-purpose flour': 'flour',

  // Pantry & Condiments
  'olive oil': 'olive oil',
  'extra virgin olive oil': 'olive oil',
  'vegetable oil': 'vegetable oil',
  'cooking oil': 'cooking oil',
  'oil': 'cooking oil',
  'sesame oil': 'sesame oil',
  'soy sauce': 'soy sauce',
  'light soy sauce': 'soy sauce',
  'dark soy sauce': 'soy sauce',
  'tamari': 'soy sauce',
  'fish sauce': 'fish sauce',
  'oyster sauce': 'oyster sauce',
  'honey': 'honey',
  'maple syrup': 'maple syrup',
  'sugar': 'sugar',
  'brown sugar': 'brown sugar',
  'salt': 'salt',
  'black pepper': 'black pepper',
  'ground black pepper': 'black pepper',
  'paprika': 'paprika',
  'smoked paprika': 'paprika',
  'cumin': 'cumin',
  'ground cumin': 'cumin',
  'chili powder': 'chili powder',
  'red pepper flakes': 'red pepper flakes',
  'oregano': 'oregano',
  'dried oregano': 'oregano',
  'mayonnaise': 'mayonnaise',
  'mayo': 'mayonnaise',
  'mustard': 'mustard',
  'dijon mustard': 'mustard',
  'ketchup': 'ketchup',
  'sriracha': 'sriracha',
  'hot sauce': 'hot sauce',
  'peanut butter': 'peanut butter',
  'chicken broth': 'chicken broth',
  'chicken stock': 'chicken broth',
  'vegetable broth': 'vegetable broth',
  'vegetable stock': 'vegetable broth',
  'beef broth': 'beef broth',
  'coconut milk': 'coconut milk'
};

/**
 * Normalizes an ingredient string for matching
 */
export function normalizeIngredient(input: string): string {
  if (!input) return '';
  const cleaned = input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, ' ');

  // Exact synonym match
  if (INGREDIENT_SYNONYMS[cleaned]) {
    return INGREDIENT_SYNONYMS[cleaned];
  }

  // Singularize common plural endings
  let singular = cleaned;
  if (singular.endsWith('ies')) {
    singular = singular.slice(0, -3) + 'y';
  } else if (singular.endsWith('es') && !singular.endsWith('ses') && !singular.endsWith('ches')) {
    singular = singular.slice(0, -2);
  } else if (singular.endsWith('s') && !singular.endsWith('ss')) {
    singular = singular.slice(0, -1);
  }

  if (INGREDIENT_SYNONYMS[singular]) {
    return INGREDIENT_SYNONYMS[singular];
  }

  // Substring match check
  for (const [key, normalized] of Object.entries(INGREDIENT_SYNONYMS)) {
    if (cleaned === key || cleaned.includes(key) || key.includes(cleaned)) {
      return normalized;
    }
  }

  return cleaned;
}

export const POPULAR_HERO_INGREDIENTS = [
  { name: 'Chicken', slug: 'chicken', icon: '🍗' },
  { name: 'Eggs', slug: 'eggs', icon: '🍳' },
  { name: 'Rice', slug: 'rice', icon: '🍚' },
  { name: 'Potatoes', slug: 'potatoes', icon: '🥔' },
  { name: 'Tomatoes', slug: 'tomatoes', icon: '🍅' },
  { name: 'Pasta', slug: 'pasta', icon: '🍝' },
  { name: 'Beef', slug: 'beef', icon: '🥩' },
  { name: 'Onions', slug: 'onions', icon: '🧅' },
  { name: 'Tofu', slug: 'tofu', icon: '🧈' },
  { name: 'Salmon', slug: 'salmon', icon: '🐟' },
  { name: 'Broccoli', slug: 'broccoli', icon: '🥦' },
  { name: 'Avocado', slug: 'avocado', icon: '🥑' },
];
