import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Mail, MessageSquare, Send, CheckCircle2, HelpCircle } from 'lucide-react';
import { updateDocumentSeo } from '../utils/seo';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updateDocumentSeo({
      title: 'Contact Us - Smart Meal Planner',
      description: 'Get in touch with the Smart Meal Planner team for recipe suggestions, feedback, or culinary partnerships.',
      canonicalPath: '/contact'
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} onNavigate={onNavigate} />

      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>We Love Home Cooks</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-2">
          Have a recipe request, feedback on our ingredient matcher, or a culinary question? Drop us a message below.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-serif">Message Received!</h3>
            <p className="text-sm text-stone-600 mt-2 max-w-sm mx-auto">
              Thank you for reaching out, {name}. Our culinary team will review your feedback shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setMessage('');
              }}
              className="mt-6 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs cursor-pointer transition-colors"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Gordon Ramsay"
                className="w-full h-11 px-3.5 rounded-xl border border-stone-300 focus:border-emerald-600 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="chef@example.com"
                className="w-full h-11 px-3.5 rounded-xl border border-stone-300 focus:border-emerald-600 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Message or Suggestion *</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what recipes or ingredients you would like to see added..."
                className="w-full p-3.5 rounded-xl border border-stone-300 focus:border-emerald-600 outline-none text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-extrabold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
