import React, { useEffect } from 'react';
import { Article, Recipe } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RecipeCard } from '../components/RecipeCard';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { BookOpen, Clock, Calendar, CheckCircle2, Sparkles, User } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';

interface ArticleDetailPageProps {
  article: Article;
  relatedRecipes: Recipe[];
  favorites: string[];
  onToggleFavorite: (slug: string) => void;
  onSelectRecipe: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  relatedRecipes,
  favorites,
  onToggleFavorite,
  onSelectRecipe,
  onNavigate
}) => {
  useEffect(() => {
    updateDocumentSeo({
      title: `${article.title} - Smart Meal Planner`,
      description: article.excerpt,
      ogImage: article.heroImage,
      ogType: 'article',
      canonicalPath: `/articles/${article.slug}`
    });
  }, [article]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Guides', url: '/articles' },
          { name: article.title, url: `/articles/${article.slug}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">
          <span className="px-2.5 py-1 rounded-full bg-emerald-100">{article.category}</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-stone-500 font-medium">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span>•</span>
          <span className="text-stone-400">Updated {article.lastUpdated}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-serif tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-medium">
          {article.excerpt}
        </p>

        {/* Author box */}
        <div className="mt-6 flex items-center gap-3 pt-4 border-t border-stone-200">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-10 h-10 rounded-full object-cover border border-stone-300"
          />
          <div>
            <span className="text-sm font-bold text-stone-900 block">{article.author.name}</span>
            <span className="text-xs text-stone-500">{article.author.role}</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-3xl overflow-hidden aspect-16/9 bg-stone-100 mb-10 shadow-sm border border-stone-200">
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Table of Contents */}
      {article.toc && article.toc.length > 0 && (
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
            Table of Contents
          </span>
          <ul className="space-y-1.5 text-xs sm:text-sm">
            {article.toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-emerald-700 hover:text-emerald-900 font-medium hover:underline"
                >
                  → {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article Content Sections */}
      <div className="prose prose-stone max-w-none space-y-8 text-stone-800 text-sm sm:text-base leading-relaxed">
        {article.content.map((sec, idx) => (
          <section key={sec.id || idx} id={sec.id} className="scroll-mt-20">
            <h2 className="text-2xl font-extrabold text-stone-900 font-serif mb-3">
              {sec.heading}
            </h2>

            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="mb-4">
                {p}
              </p>
            ))}

            {sec.checklist && (
              <div className="my-4 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-200">
                <span className="font-bold text-emerald-900 text-xs uppercase tracking-wider block mb-2">
                  Actionable Checklist
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {sec.checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {sec.callout && (
              <div className="my-4 p-4 rounded-2xl bg-amber-50 border-l-4 border-amber-500 text-xs sm:text-sm text-amber-900 font-medium">
                {sec.callout}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />

      {/* Related Recipes */}
      {relatedRecipes.length > 0 && (
        <section className="mt-12 pt-8 border-t border-stone-200">
          <h2 className="text-2xl font-extrabold text-stone-900 font-serif mb-6">
            Recipes Featured in This Guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedRecipes.map((r) => (
              <RecipeCard
                key={r.id}
                recipe={r}
                isFavorite={favorites.includes(r.slug)}
                onToggleFavorite={onToggleFavorite}
                onSelect={onSelectRecipe}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
