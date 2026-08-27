import { Recipe, RecipeFAQ } from '../types';

export interface SeoConfig {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  robots?: string;
}

const SITE_NAME = 'Smart Meal Planner';
const BASE_URL = 'https://smartmealplanner.app';

/**
 * Updates document head metadata dynamically for SEO
 */
export function updateDocumentSeo(config: SeoConfig): void {
  // Title (50-60 chars target)
  const fullTitle = config.title.includes(SITE_NAME)
    ? config.title
    : `${config.title} | ${SITE_NAME}`;
  document.title = fullTitle;

  // Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', config.description);

  // Canonical Link
  const canonicalUrl = `${BASE_URL}${config.canonicalPath || window.location.pathname}`;
  let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', canonicalUrl);

  // Open Graph
  updateMetaTag('property', 'og:title', fullTitle);
  updateMetaTag('property', 'og:description', config.description);
  updateMetaTag('property', 'og:url', canonicalUrl);
  updateMetaTag('property', 'og:type', config.ogType || 'website');
  if (config.ogImage) {
    updateMetaTag('property', 'og:image', config.ogImage);
    updateMetaTag('name', 'twitter:image', config.ogImage);
  }

  // Twitter
  updateMetaTag('name', 'twitter:title', fullTitle);
  updateMetaTag('name', 'twitter:description', config.description);

  // Robots
  if (config.robots) {
    updateMetaTag('name', 'robots', config.robots);
  }
}

function updateMetaTag(attributeKey: 'name' | 'property', attributeValue: string, content: string): void {
  let tag = document.querySelector(`meta[${attributeKey}="${attributeValue}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attributeKey, attributeValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Injects or updates JSON-LD script in document head
 */
export function injectJsonLd(schemaId: string, schemaData: object): void {
  let script = document.getElementById(schemaId) as HTMLScriptElement;
  if (!script) {
    script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaData, null, 2);
}

export function removeJsonLd(schemaId: string): void {
  const script = document.getElementById(schemaId);
  if (script) {
    script.remove();
  }
}

/**
 * Builds Schema.org Recipe JSON-LD
 */
export function buildRecipeSchema(recipe: Recipe): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.name,
    description: recipe.description,
    image: [recipe.image],
    author: {
      '@type': 'Organization',
      name: 'Smart Meal Planner'
    },
    datePublished: '2026-01-15',
    prepTime: `PT${recipe.prepTime}M`,
    cookTime: `PT${recipe.cookTime}M`,
    totalTime: `PT${recipe.totalTime}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.mealType,
    recipeCuisine: recipe.cuisine,
    keywords: recipe.keywords.join(', '),
    nutrition: {
      '@type': 'NutritionInformation',
      calories: `${recipe.calories} calories`,
      proteinContent: `${recipe.protein}g`,
      carbohydrateContent: `${recipe.carbs}g`,
      fatContent: `${recipe.fat}g`
    },
    recipeIngredient: recipe.ingredients.map(
      (i) => `${i.amount} ${i.unit} ${i.name}`
    ),
    recipeInstructions: recipe.instructions.map((step) => ({
      '@type': 'HowToStep',
      name: `Step ${step.stepNumber}`,
      text: step.instruction,
      position: step.stepNumber
    }))
  };
}

/**
 * Builds Schema.org BreadcrumbList JSON-LD
 */
export function buildBreadcrumbSchema(items: { name: string; url: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`
    }))
  };
}

/**
 * Builds Schema.org FAQPage JSON-LD
 */
export function buildFaqSchema(faqs: RecipeFAQ[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
