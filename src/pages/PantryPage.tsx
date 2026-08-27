import React, { useState } from 'react';
import { PantryItem, IngredientCategory } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  Package, 
  AlertTriangle, 
  Clock, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Sparkles, 
  ChefHat, 
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { normalizeIngredient } from '../data/synonyms';

interface PantryPageProps {
  pantryItems: PantryItem[];
  onAddPantryItem: (item: Omit<PantryItem, 'id' | 'addedDate'>) => void;
  onRemovePantryItem: (id: string) => void;
  onCookWithExpiring: (ingredients: string[]) => void;
  onNavigate: (path: string) => void;
}

export const PantryPage: React.FC<PantryPageProps> = ({
  pantryItems,
  onAddPantryItem,
  onRemovePantryItem,
  onCookWithExpiring,
  onNavigate
}) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState<number>(1);
  const [unit, setUnit] = useState('items');
  const [category, setCategory] = useState<IngredientCategory>('Produce');
  const [expirationDate, setExpirationDate] = useState<string>('');

  // Classify items by expiration status
  const now = new Date().getTime();

  const expiringSoon: PantryItem[] = [];
  const goodItems: PantryItem[] = [];
  const expiredItems: PantryItem[] = [];

  pantryItems.forEach((item) => {
    if (!item.expirationDate) {
      goodItems.push(item);
      return;
    }
    const expTime = new Date(item.expirationDate).getTime();
    const diffDays = (expTime - now) / (1000 * 60 * 60 * 24);

    if (diffDays < 0) {
      expiredItems.push(item);
    } else if (diffDays <= 3) {
      expiringSoon.push(item);
    } else {
      goodItems.push(item);
    }
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddPantryItem({
      name: name.trim(),
      normalizedName: normalizeIngredient(name.trim()),
      quantity,
      unit,
      category,
      expirationDate: expirationDate || undefined
    });

    setName('');
    setQuantity(1);
    setUnit('items');
    setCategory('Produce');
    setExpirationDate('');
    setIsAddOpen(false);
  };

  const handleCookExpiring = () => {
    const ingNames = expiringSoon.map((i) => i.name.toLowerCase());
    onCookWithExpiring(ingNames);
  };

  const categories: IngredientCategory[] = ['Produce', 'Protein', 'Dairy', 'Pantry', 'Spices', 'Bakery', 'Other'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Pantry & Expiration Tracker', url: '/pantry' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
            <Package className="w-3.5 h-3.5" />
            <span>Zero Food Waste Kitchen</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
            Pantry & Expiration Tracker
          </h1>
          <p className="text-sm sm:text-base text-stone-600 mt-1">
            Keep inventory of what you have at home. We will alert you before items spoil and turn them into meals.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-extrabold text-sm shadow-md transition-all cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Pantry Item</span>
        </button>
      </div>

      {/* Food Waste Reduction Banner if items are expiring */}
      {expiringSoon.length > 0 && (
        <div className="mb-8 p-6 rounded-3xl bg-amber-50 border-2 border-amber-300 text-amber-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm animate-in fade-in duration-200">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                {expiringSoon.length} item{expiringSoon.length > 1 ? 's' : ''} expiring soon (within 3 days)!
              </h3>
              <p className="text-xs sm:text-sm text-amber-800 mt-0.5">
                {expiringSoon.map((i) => i.name).join(', ')}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCookExpiring}
            className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs sm:text-sm shadow-sm transition-transform active:scale-95 cursor-pointer flex items-center gap-2 shrink-0"
          >
            <ChefHat className="w-4 h-4" />
            <span>Cook With These Ingredients →</span>
          </button>
        </div>
      )}

      {/* Add Item Modal / Form */}
      {isAddOpen && (
        <div className="mb-8 p-6 bg-white rounded-3xl border-2 border-emerald-500 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
            <h3 className="text-lg font-bold text-stone-900 font-serif">Add New Pantry Item</h3>
            <button
              onClick={() => setIsAddOpen(false)}
              className="text-stone-400 hover:text-stone-600 text-xs font-semibold cursor-pointer"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleAddSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="lg:col-span-2">
              <label className="block text-xs font-bold text-stone-700 mb-1">Item Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Eggs, Spinach, Chicken..."
                className="w-full h-11 px-3.5 rounded-xl border border-stone-300 focus:border-emerald-600 outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Quantity & Unit</label>
              <div className="flex gap-1.5">
                <input
                  type="number"
                  min="0.25"
                  step="0.25"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-20 h-11 px-2.5 rounded-xl border border-stone-300 focus:border-emerald-600 outline-none text-sm text-center"
                />
                <input
                  type="text"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  placeholder="items / g / ml"
                  className="flex-1 h-11 px-2.5 rounded-xl border border-stone-300 focus:border-emerald-600 outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as IngredientCategory)}
                className="w-full h-11 px-3 rounded-xl border border-stone-300 focus:border-emerald-600 outline-none text-sm bg-white"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Expiration Date</label>
              <input
                type="date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                className="w-full h-11 px-3 rounded-xl border border-stone-300 focus:border-emerald-600 outline-none text-sm bg-white"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-5 flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAddOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm cursor-pointer"
              >
                Save Item
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 3 Categories: Expiring Soon, In Stock, Expired */}
      <div className="space-y-8">
        {/* 1. Expiring Soon */}
        {expiringSoon.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <h2 className="text-lg font-bold text-stone-900 font-serif">
                Use Soon (Expiring in ≤ 3 days)
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {expiringSoon.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center justify-between shadow-2xs"
                >
                  <div>
                    <span className="font-bold text-stone-900 text-sm block">{item.name}</span>
                    <span className="text-xs text-amber-800 font-medium">
                      {item.quantity} {item.unit} • Exp: {item.expirationDate}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemovePantryItem(item.id)}
                    className="p-2 text-stone-400 hover:text-rose-600 cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. In Stock / Good Items */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <h2 className="text-lg font-bold text-stone-900 font-serif">
                In Stock ({goodItems.length})
              </h2>
            </div>
          </div>

          {goodItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {goodItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white border border-stone-200 flex items-center justify-between shadow-xs hover:border-emerald-300 transition-colors"
                >
                  <div>
                    <span className="font-bold text-stone-900 text-sm block">{item.name}</span>
                    <span className="text-xs text-stone-500 font-medium">
                      {item.quantity} {item.unit} • {item.category}
                      {item.expirationDate ? ` (Exp: ${item.expirationDate})` : ''}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemovePantryItem(item.id)}
                    className="p-2 text-stone-400 hover:text-rose-600 cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-stone-50 rounded-2xl border border-stone-200">
              <Package className="w-8 h-8 text-stone-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-stone-600">Your pantry is currently empty.</p>
              <button
                type="button"
                onClick={() => setIsAddOpen(true)}
                className="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer shadow-xs"
              >
                Add Your First Item
              </button>
            </div>
          )}
        </div>

        {/* 3. Expired Items (if any) */}
        {expiredItems.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <h2 className="text-lg font-bold text-rose-900 font-serif">
                Expired Items ({expiredItems.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {expiredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 flex items-center justify-between opacity-75"
                >
                  <div>
                    <span className="font-bold text-rose-950 text-sm block">{item.name}</span>
                    <span className="text-xs text-rose-700">
                      Expired on {item.expirationDate}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemovePantryItem(item.id)}
                    className="p-2 text-rose-400 hover:text-rose-700 cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />
    </div>
  );
};
