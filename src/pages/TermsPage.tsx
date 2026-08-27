import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updateDocumentSeo } from '../utils/seo';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updateDocumentSeo({
      title: 'Terms of Service - Smart Meal Planner',
      description: 'Terms of service and culinary disclaimer for using Smart Meal Planner.',
      canonicalPath: '/terms'
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Terms of Service', url: '/terms' }]} onNavigate={onNavigate} />

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6 text-stone-700 leading-relaxed text-sm">
        <h1 className="text-3xl font-extrabold text-stone-900 font-serif">
          Terms of Service
        </h1>
        <p className="text-xs text-stone-400">Last updated: August 2026</p>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-stone-900">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Smart Meal Planner, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-stone-900">2. Nutritional & Medical Disclaimer</h2>
          <p>
            All recipes, ingredient lists, and nutritional calculations (calories, macronutrients, vitamins) provided on Smart Meal Planner are estimated approximations intended strictly for general informational and home cooking purposes. Smart Meal Planner does not provide medical nutrition therapy or personalized dietary diagnosis. Always consult a qualified medical physician or certified dietitian regarding severe food allergies, celiac disease, or specific metabolic conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-stone-900">3. Kitchen Safety</h2>
          <p>
            Users are responsible for ensuring proper food safety protocols, such as verifying internal cooking temperatures for poultry and seafood, handling sharp kitchen knives with care, and storing perishable groceries safely.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-stone-900">4. Intellectual Property</h2>
          <p>
            All original algorithms, layout designs, and culinary text are property of Smart Meal Planner.
          </p>
        </section>
      </div>
    </div>
  );
};
