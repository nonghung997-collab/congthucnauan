import React, { useState } from 'react';
import { ShoppingItem, IngredientCategory } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { 
  ShoppingBag, 
  Plus, 
  Trash2, 
  Check, 
  Copy, 
  Printer, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ShoppingListPageProps {
  shoppingItems: ShoppingItem[];
  onToggleItem: (id: string) => void;
  onAddItem: (item: Omit<ShoppingItem, 'id'>) => void;
  onRemoveItem: (id: string) => void;
  onClearCompleted: () => void;
  onClearAll: () => void;
  onNavigate: (path: string) => void;
}

export const ShoppingListPage: React.FC<ShoppingListPageProps> = ({
  shoppingItems,
  onToggleItem,
  onAddItem,
  onRemoveItem,
  onClearCompleted,
  onClearAll,
  onNavigate
}) => {
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState<IngredientCategory>('Produce');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    onAddItem({
      name: newItemName.trim(),
      quantity: 1,
      unit: 'item',
      category: newItemCategory,
      checked: false
    });

    setNewItemName('');
  };

  const completedCount = shoppingItems.filter((i) => i.checked).length;
  const progressPercent = shoppingItems.length > 0 ? Math.round((completedCount / shoppingItems.length) * 100) : 0;

  // Group items by category
  const categories: IngredientCategory[] = ['Produce', 'Protein', 'Dairy', 'Pantry', 'Spices', 'Bakery', 'Other'];

  const itemsByCategory = categories.map((cat) => ({
    category: cat,
    items: shoppingItems.filter((i) => (i.category || 'Pantry') === cat)
  })).filter((group) => group.items.length > 0);

  const handleCopyList = () => {
    let text = `🛒 SMART GROCERY SHOPPING LIST\n`;
    text += `Items: ${shoppingItems.length} total (${completedCount} completed)\n\n`;

    itemsByCategory.forEach((group) => {
      text += `[${group.category.toUpperCase()}]\n`;
      group.items.forEach((item) => {
        text += `${item.checked ? '✓' : '□'} ${item.name} (${item.quantity} ${item.unit})${item.recipeSource ? ` [for ${item.recipeSource}]` : ''}\n`;
      });
      text += '\n';
    });

    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Smart Shopping List', url: '/shopping-list' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Categorized Grocery Organiser</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif">
            Smart Shopping List
          </h1>
          <p className="text-sm text-stone-600 mt-1">
            Categorized by supermarket aisle so you can breeze through the grocery store.
          </p>
        </div>

        {/* Global Action Tools */}
        <div className="flex items-center gap-2">
          {shoppingItems.length > 0 && (
            <>
              <button
                type="button"
                onClick={handleCopyList}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedNotification ? 'Copied!' : 'Copy List'}</span>
              </button>

              <button
                type="button"
                onClick={onClearCompleted}
                disabled={completedCount === 0}
                className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-stone-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Clear Checked
              </button>
            </>
          )}
        </div>
      </div>

      {/* Progress Bar Ribbon */}
      {shoppingItems.length > 0 && (
        <div className="bg-white p-4 rounded-2xl border border-stone-200 mb-6 shadow-xs">
          <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-2">
            <span>Shopping Progress</span>
            <span className="text-emerald-700">
              {completedCount} of {shoppingItems.length} items checked ({progressPercent}%)
            </span>
          </div>
          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Quick Add Form */}
      <form onSubmit={handleAddSubmit} className="flex gap-2 mb-8 bg-white p-2 rounded-2xl border border-stone-200 shadow-xs">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Add an item (e.g. Greek yogurt, olive oil, lemons)..."
          className="flex-1 px-4 py-2.5 outline-none text-sm font-medium text-stone-900 bg-transparent placeholder:text-stone-400"
        />
        <select
          value={newItemCategory}
          onChange={(e) => setNewItemCategory(e.target.value as IngredientCategory)}
          className="px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 text-xs font-semibold text-stone-700 outline-none"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add</span>
        </button>
      </form>

      {/* Grouped Shopping Items List */}
      {itemsByCategory.length > 0 ? (
        <div className="space-y-6">
          {itemsByCategory.map((group) => (
            <div key={group.category} className="bg-white rounded-3xl p-5 border border-stone-200 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3 pb-2 border-b border-stone-100">
                {group.category} ({group.items.length})
              </h3>
              <div className="divide-y divide-stone-100">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="py-2.5 flex items-center justify-between gap-3 group"
                  >
                    <label className="flex items-center gap-3 cursor-pointer flex-1 select-none">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => onToggleItem(item.id)}
                        className="w-5 h-5 rounded-md accent-emerald-600 cursor-pointer"
                      />
                      <div>
                        <span
                          className={`text-sm font-medium ${
                            item.checked
                              ? 'line-through text-stone-500'
                              : 'text-stone-900'
                          }`}
                        >
                          {item.name}
                        </span>
                        {item.recipeSource && (
                          <span className="block text-[11px] text-stone-500">
                            for {item.recipeSource}
                          </span>
                        )}
                      </div>
                    </label>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-semibold text-stone-500">
                        {item.quantity} {item.unit}
                      </span>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-stone-300 hover:text-rose-600 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom Clear All Option */}
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={onClearAll}
              className="text-xs text-stone-400 hover:text-rose-600 transition-colors cursor-pointer"
            >
              Clear Entire Shopping List
            </button>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-stone-200">
          <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-stone-800">Your shopping list is empty</h3>
          <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
            Add items manually using the form above or click "Add Missing Items" directly on any recipe page!
          </p>
        </div>
      )}

      {/* AdSense Placement */}
      <AdPlaceholder format="horizontal" />
    </div>
  );
};
