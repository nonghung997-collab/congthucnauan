import { IngredientHub } from '../types';

export const INGREDIENT_HUBS: IngredientHub[] = [
  {
    slug: 'chicken',
    name: 'Chicken',
    h1: 'What Can I Cook With Chicken?',
    primaryKeyword: 'chicken',
    title: 'What Can I Cook With Chicken? 15+ Quick & Healthy Chicken Recipes',
    metaDescription: 'Find delicious, fast, and easy chicken recipes you can make with what you have. Quick weeknight dinners, high-protein meal preps, and budget ideas.',
    heroImage: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80',
    shortAnswer: 'Chicken is the world’s most versatile protein. If you have chicken breasts, thighs, or leftovers, you can make 15-minute skillet chicken, easy fried rice, comforting soups, or sheet-pan fajitas.',
    intro: 'Whether you have raw chicken breasts, boneless thighs, or leftover rotisserie chicken sitting in your fridge, you are minutes away from a satisfying, protein-rich meal. Explore the best foolproof recipes grouped by cooking time and style.',
    storageTips: [
      'Raw chicken should be stored on the bottom shelf of your refrigerator at 40°F (4°C) or below.',
      'Cook fresh raw chicken within 1–2 days of purchase or freeze in airtight portions for up to 9 months.',
      'Cooked leftover chicken stays fresh and safe in an airtight container for 3–4 days.'
    ],
    cookingTips: [
      'Pound thick chicken breasts to an even thickness or slice them horizontally into cutlets to cook in half the time without drying out.',
      'Always let cooked chicken rest for 3–5 minutes before slicing so juices redistribute through the meat.',
      'Sear on medium-high without moving for the first 3-4 minutes to develop a savory golden crust.'
    ],
    substitutions: [
      { original: 'Chicken Breast', replaceWith: 'Chicken Thighs', reason: 'Thighs are juicier, more forgiving to cook, and usually cheaper.' },
      { original: 'Chicken', replaceWith: 'Firm Tofu or Tempeh', reason: 'Absorbs sauces similarly and provides clean plant-based protein.' },
      { original: 'Chicken', replaceWith: 'Canned Chickpeas or White Beans', reason: 'Great instant pantry protein swap in soups and curries.' }
    ],
    popularCombos: [
      { comboName: 'Chicken + Rice', description: 'The timeless comfort duo: fried rice, teriyaki bowls, and aromatic casseroles.', recipeSlugs: ['chicken-fried-rice', 'teriyaki-chicken-bowl'] },
      { comboName: 'Chicken + Bell Peppers', description: 'Bright, sweet, and smoky: fajitas and wok stir-fries.', recipeSlugs: ['sheet-pan-chicken-fajitas'] },
      { comboName: 'Chicken + Lemon & Garlic', description: 'Mediterranean and bistro skillet magic with crisp edges and silky pan sauce.', recipeSlugs: ['lemon-garlic-chicken-skillet'] }
    ],
    faqs: [
      { question: 'What is the fastest way to cook raw chicken for dinner?', answer: 'Slice chicken breasts into thin 1/2-inch strips or cutlets and pan-sear in a hot skillet with olive oil, salt, and spices for 3–4 minutes per side.' },
      { question: 'Can I use frozen chicken directly?', answer: 'For soups and braises you can simmer thawed cuts, but for optimal searing and food safety, defrost frozen chicken in the fridge overnight or in cold water for 30 minutes before cooking.' }
    ]
  },
  {
    slug: 'eggs',
    name: 'Eggs',
    h1: 'What Can I Cook With Eggs?',
    primaryKeyword: 'egg',
    title: 'What Can I Cook With Eggs? Fast, Easy & Cheap Egg Meals',
    metaDescription: 'Got eggs in the fridge? Discover quick 10-minute breakfasts, high-protein lunches, comforting egg drop soups, and budget dinners.',
    heroImage: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80',
    shortAnswer: 'Eggs are an incredible affordable protein staple. In under 10 minutes, you can make garlic butter egg rice, fluffy spinach omelets, Shakshuka, or Chinese tomato egg stir-fry.',
    intro: 'Eggs are never just for breakfast. With a carton of eggs and basic pantry staples like rice, tomatoes, or garlic, you can cook healthy, filling, high-protein dinners for less than $1.50 per serving.',
    storageTips: [
      'Store eggs in their original carton on an interior refrigerator shelf where temperature remains constant.',
      'Fresh eggs typically remain good for 3–5 weeks past the carton pack date.',
      'The float test: Place an egg in water; if it sinks flat, it is very fresh; if it tilts, it is older but edible; if it floats to the top, discard it.'
    ],
    cookingTips: [
      'For tender, creamy scrambled eggs, cook over medium-low heat and remove from the pan while still slightly glossy as residual heat finishes cooking them.',
      'Add a tiny splash of water (not milk) when whisking eggs for fluffy omelets; water turns to steam and creates air pockets.'
    ],
    substitutions: [
      { original: 'Whole Eggs', replaceWith: 'Silken Tofu scramble', reason: 'Excellent egg-free vegan scramble alternative.' },
      { original: 'Feta Cheese', replaceWith: 'Cheddar or Goat cheese', reason: 'Melts easily into hot folded omelets.' }
    ],
    popularCombos: [
      { comboName: 'Eggs + Rice', description: 'Quick comfort meals from fried rice to garlic butter bowls.', recipeSlugs: ['garlic-butter-egg-rice', 'chicken-fried-rice'] },
      { comboName: 'Eggs + Tomatoes', description: 'Savory, sweet, and comforting: Shakshuka and homestyle tomato scrambles.', recipeSlugs: ['shakshuka-poached-eggs', 'chinese-tomato-egg-stir-fry'] },
      { comboName: 'Eggs + Bread', description: 'Gourmet fried egg avocado toast and cheesy breakfast melts.', recipeSlugs: ['avocado-egg-toast'] }
    ],
    faqs: [
      { question: 'How much protein is in 3 large eggs?', answer: 'Three large eggs provide approximately 18 grams of complete high-quality protein with all 9 essential amino acids.' },
      { question: 'Can I eat eggs for dinner when I have nothing else?', answer: 'Absolutely. A garlic butter egg bowl or 5-minute egg drop soup is one of the easiest, most satisfying emergency dinners.' }
    ]
  },
  {
    slug: 'rice',
    name: 'Rice',
    h1: 'What Can I Cook With Rice?',
    primaryKeyword: 'rice',
    title: 'What Can I Cook With Rice? Easy Leftover & Fresh Rice Recipes',
    metaDescription: 'Turn fresh or leftover rice into delicious meals. From restaurant-style fried rice to hearty burrito bowls and comforting soups.',
    heroImage: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80',
    shortAnswer: 'Rice is the foundation of thousands of quick meals. Transform leftover cold rice into chicken fried rice in 10 minutes, or build vibrant burrito and teriyaki bowls.',
    intro: 'Have a container of leftover white or brown rice? Leftover chilled rice is actually superior to freshly cooked rice for stir-frying because the dried surface prevents clumping and absorbs seasonings beautifully.',
    storageTips: [
      'Cool cooked rice quickly and store in an airtight container in the fridge within 2 hours of cooking.',
      'Consume refrigerated cooked rice within 3–4 days.',
      'Cooked rice freezes exceptionally well for up to 3 months. Reheat with a splash of water.'
    ],
    cookingTips: [
      'Rinse raw rice 2–3 times until water runs mostly clear to wash away excess surface starches and avoid gummy rice.',
      'To reheat cold rice in the microwave, add 1 tablespoon of water, cover with a damp paper towel, and heat for 60–90 seconds to restore steam and fluffiness.'
    ],
    substitutions: [
      { original: 'White Rice', replaceWith: 'Brown Rice or Quinoa', reason: 'Adds nutty flavor and higher dietary fiber.' },
      { original: 'White Rice', replaceWith: 'Cauliflower Rice', reason: 'Low-calorie, low-carb keto-friendly option.' }
    ],
    popularCombos: [
      { comboName: 'Rice + Chicken', description: 'Chicken fried rice, aromatic soups, and teriyaki bowls.', recipeSlugs: ['chicken-fried-rice', 'teriyaki-chicken-bowl'] },
      { comboName: 'Rice + Black Beans', description: 'Budget-friendly fiber and protein powerhouse burrito bowls.', recipeSlugs: ['black-bean-burrito-bowl'] }
    ],
    faqs: [
      { question: 'Why is cold rice better for fried rice?', answer: 'Chilling rice retrogrades the starches and removes moisture, allowing the grains to sear individually in the wok rather than steaming into mush.' }
    ]
  },
  {
    slug: 'potatoes',
    name: 'Potatoes',
    h1: 'What Can I Cook With Potatoes?',
    primaryKeyword: 'potato',
    title: 'What Can I Cook With Potatoes? Crispy, Roasted & Cozy Recipes',
    metaDescription: 'Got a bag of potatoes? Explore Greek lemon roasted wedges, cozy creamy garlic soups, and breakfast skillet hashes.',
    heroImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    shortAnswer: 'Potatoes are filling, affordable, and full of potassium. Turn them into crispy Greek lemon roasted potatoes, rustic garlic soup, or sweet potato skillet hashes.',
    intro: 'From Russets to Yukon Golds and Sweet Potatoes, potatoes are one of the most budget-friendly ingredients on Earth. Learn how to transform them into restaurant-worthy side dishes and hearty main courses.',
    storageTips: [
      'Store potatoes in a cool, dark, well-ventilated place like a pantry or paper bag (not in the refrigerator).',
      'Keep potatoes away from onions; onions emit ethylene gas which makes potatoes sprout faster.',
      'Cut away any small green spots or sprouts before cooking.'
    ],
    cookingTips: [
      'Parboil potato cubes for 5 minutes in salted water before roasting or pan-frying to create a super-crispy exterior with a fluffy interior.',
      'Never overcrowd your baking sheet when roasting; spacing gives air room to circulate and crisp the edges.'
    ],
    substitutions: [
      { original: 'Russet Potatoes', replaceWith: 'Yukon Gold', reason: 'Naturally buttery with a creamy texture that holds shape well.' },
      { original: 'Potatoes', replaceWith: 'Sweet Potatoes', reason: 'Lower glycemic index and rich in beta-carotene.' }
    ],
    popularCombos: [
      { comboName: 'Potatoes + Lemon & Oregano', description: 'Greek lemon roasted potatoes with crunchy edges.', recipeSlugs: ['greek-lemon-potatoes'] },
      { comboName: 'Potatoes + Garlic & Broth', description: 'Comforting rustic farmhouse potato soup.', recipeSlugs: ['creamy-potato-leek-soup'] }
    ],
    faqs: [
      { question: 'Are potatoes healthy?', answer: 'Yes! Whole unpeeled potatoes are rich in vitamin C, potassium, and resistant starch that promotes healthy gut bacteria.' }
    ]
  },
  {
    slug: 'tomatoes',
    name: 'Tomatoes',
    h1: 'What Can I Cook With Tomatoes?',
    primaryKeyword: 'tomato',
    title: 'What Can I Cook With Tomatoes? Fresh & Canned Tomato Recipes',
    metaDescription: 'Use fresh cherry tomatoes or canned crushed tomatoes to make 15-minute pasta, Shakshuka, baked cod, and Mediterranean salads.',
    heroImage: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810a9?auto=format&fit=crop&w=1200&q=80',
    shortAnswer: 'Whether fresh or canned, tomatoes provide rich natural umami and acidity. Make 15-minute burst tomato pasta, Mediterranean Shakshuka, or baked white fish.',
    intro: 'Tomatoes are packed with lycopene and natural glutamate that gives dishes deep savory flavor. From bursting sweet cherry tomatoes in olive oil to simmering crushed canned tomatoes with garlic, delicious meals are minutes away.',
    storageTips: [
      'Store whole fresh ripe tomatoes stem-side down at room temperature away from direct sunlight.',
      'Refrigerating unripe tomatoes halts flavor development and alters texture; only refrigerate fully ripe cut tomatoes.',
      'Open canned tomatoes should be transferred to a glass or plastic container and refrigerated for up to 5 days.'
    ],
    cookingTips: [
      'Blister cherry tomatoes in hot olive oil with a lid on; when they pop, mash gently with a fork for instant fresh sauce.',
      'Add a small pinch of sugar or grated carrot to balance tartness in canned tomato sauces.'
    ],
    substitutions: [
      { original: 'Fresh Cherry Tomatoes', replaceWith: 'Canned Whole Peeled Tomatoes', reason: 'Cooks down into a rich, sweet sauce with deep concentrated flavor.' },
      { original: 'Tomato Sauce', replaceWith: 'Tomato Paste thinned with water', reason: 'Easy 2-ingredient emergency tomato sauce swap.' }
    ],
    popularCombos: [
      { comboName: 'Tomatoes + Garlic + Pasta', description: 'The quintessential 15-minute Italian dinner.', recipeSlugs: ['garlic-tomato-basil-pasta', 'creamy-tomato-spinach-pasta'] },
      { comboName: 'Tomatoes + Eggs', description: 'Shakshuka or homestyle Chinese sweet and savory stir fry.', recipeSlugs: ['shakshuka-poached-eggs', 'chinese-tomato-egg-stir-fry'] }
    ],
    faqs: [
      { question: 'Are canned tomatoes as healthy as fresh?', answer: 'Yes! Canned tomatoes are cooked during packaging, which actually increases the bioavailability of lycopene, a potent antioxidant.' }
    ]
  },
  {
    slug: 'beef',
    name: 'Beef',
    h1: 'What Can I Cook With Beef?',
    primaryKeyword: 'beef',
    title: 'What Can I Cook With Beef? Ground Beef & Quick Steak Dinners',
    metaDescription: 'Find fast, flavorful ground beef taco skillets, classic bolognese pasta, and Vietnamese shaking beef recipes for easy weeknight dinners.',
    heroImage: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80',
    shortAnswer: 'Ground beef and steak make high-protein dinners fast. Cook cheesy one-pan taco skillets in 20 minutes, slow-simmered bolognese pasta, or Vietnamese shaking beef.',
    intro: 'Ground beef and quick steak cuts are rich in iron, zinc, and high-quality protein. Discover time-tested family meals that come together in 20 minutes or less with everyday pantry staples.',
    storageTips: [
      'Store fresh ground beef in the coldest part of your fridge and cook within 1–2 days, or freeze for up to 4 months.',
      'Defrost frozen beef overnight in the refrigerator for the best texture and moisture retention.'
    ],
    cookingTips: [
      'Let your skillet get hot before adding beef; this browns the meat quickly for savory Maillard flavor rather than boiling in its own juices.',
      'Season beef with salt right before searing to prevent moisture from drawing out too early.'
    ],
    substitutions: [
      { original: 'Ground Beef', replaceWith: 'Ground Turkey or Chicken', reason: 'Leaner poultry alternative with lower saturated fat.' },
      { original: 'Beef', replaceWith: 'Lentils or Black Beans', reason: 'High-fiber plant-based swap in taco and pasta sauces.' }
    ],
    popularCombos: [
      { comboName: 'Beef + Taco Seasoning + Cheese', description: 'One-pan cheesy taco skillets and burritos.', recipeSlugs: ['loaded-beef-taco-skillet'] },
      { comboName: 'Beef + Pasta + Tomatoes', description: 'Classic Italian meat sauce bolognese.', recipeSlugs: ['classic-beef-bolognese'] }
    ],
    faqs: [
      { question: 'What is the best lean-to-fat ratio for quick skillets?', answer: '85/15 or 90/10 provides great flavor without excess pooling grease.' }
    ]
  }
];

export function getIngredientHub(slug: string): IngredientHub | undefined {
  return INGREDIENT_HUBS.find((h) => h.slug === slug);
}

export function getAllIngredientHubs(): IngredientHub[] {
  return INGREDIENT_HUBS;
}
