import React from 'react';
import { Recipe } from '../types';
import { Sparkles, Clock, Flame, Dumbbell, RefreshCw, ChefHat, X } from 'lucide-react';

interface SurpriseMeModalProps {
  isOpen: boolean;
  recipe: Recipe | null;
  onClose: () => void;
  onCook: (slug: string) => void;
  onTryAnother: () => void;
}

export const SurpriseMeModal: React.FC<SurpriseMeModalProps> = ({
  isOpen,
  recipe,
  onClose,
  onCook,
  onTryAnother
}) => {
  if (!isOpen || !recipe) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        id="surprise-me-dialog"
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎲</span>
            <h3 className="font-extrabold text-lg">Tonight’s Chef Pick</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded-lg text-stone-900 hover:bg-stone-900/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Recipe Preview */}
        <div className="p-6">
          <div className="aspect-16/9 rounded-2xl overflow-hidden mb-4 bg-stone-100 shadow-inner">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
          </div>

          <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-900 mb-2 inline-block">
            {recipe.cuisine} • {recipe.difficulty}
          </span>

          <h4 className="text-xl sm:text-2xl font-extrabold text-stone-900 leading-snug">
            {recipe.name}
          </h4>

          <p className="text-sm text-stone-600 mt-2 line-clamp-2">
            {recipe.description}
          </p>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-3 gap-2 py-3 border-y border-stone-100 text-center">
            <div>
              <span className="block text-xs text-stone-400 font-medium">Time</span>
              <span className="text-sm font-bold text-stone-800 flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                {recipe.totalTime}m
              </span>
            </div>
            <div>
              <span className="block text-xs text-stone-400 font-medium">Calories</span>
              <span className="text-sm font-bold text-orange-600 flex items-center justify-center gap-1">
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                {recipe.calories} kcal
              </span>
            </div>
            <div>
              <span className="block text-xs text-stone-400 font-medium">Protein</span>
              <span className="text-sm font-bold text-emerald-700 flex items-center justify-center gap-1">
                <Dumbbell className="w-3.5 h-3.5 text-emerald-600" />
                {recipe.protein}g
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onCook(recipe.slug)}
              className="flex-1 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
            >
              <ChefHat className="w-4 h-4" />
              <span>Let’s Cook This!</span>
            </button>

            <button
              type="button"
              onClick={onTryAnother}
              className="h-12 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 active:scale-98 text-stone-800 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Another 🎲</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
