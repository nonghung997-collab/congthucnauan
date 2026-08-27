import React, { useEffect } from 'react';
import { Article } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';

interface ArticlesIndexPageProps {
  articles: Article[];
  onNavigate: (path: string) => void;
}

export const ArticlesIndexPage: React.FC<ArticlesIndexPageProps> = ({
  articles,
  onNavigate
}) => {
  useEffect(() => {
    updateDocumentSeo({
      title: 'Culinary & Meal Planning Guides - Smart Meal Planner',
      description: 'Expert guides on weekly meal planning, reducing household food waste, kitchen storage hacks, and 5-ingredient cooking.',
      canonicalPath: '/articles'
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Kitchen Guides', url: '/articles' }]} onNavigate={onNavigate} />

      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Kitchen Wisdom & Habits</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 font-serif tracking-tight">
          Guides & Meal Planning Articles
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-2">
          Practical strategies to save hours every week, cut your grocery budget, and eliminate food waste at home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {articles.map((article) => (
          <div
            key={article.slug}
            onClick={() => onNavigate(`/articles/${article.slug}`)}
            className="bg-white rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-lg hover:border-purple-300 transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase tracking-wider mb-2">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-stone-400 font-normal">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-purple-800 transition-colors font-serif leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 line-clamp-3 mt-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-purple-700">
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      <AdPlaceholder format="horizontal" />
    </div>
  );
};
