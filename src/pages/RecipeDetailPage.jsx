import { useParams } from 'react-router-dom';
import { ResepMakanan } from '../data/makanan';
import { ResepMinuman } from '../data/minuman';
import { Clock, Star, ChefHat } from 'lucide-react';

export default function RecipeDetailPage() {
  const { type, id } = useParams();
  const recipes = type === 'makanan' ? Object.values(ResepMakanan.resep) : Object.values(ResepMinuman.resep);
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div className="text-center py-16">Resep tidak ditemukan.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
          <div className="relative h-64 md:h-96 overflow-hidden">
            <img 
              src={recipe.image_url}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 p-6 md:p-10">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">{recipe.name}</h1>
            <div className="flex items-center justify-between text-sm md:text-base text-slate-600 mb-6">
              <div className="flex items-center space-x-2 bg-white/70 px-3 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{recipe.ingredients.length} bahan</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 px-3 py-2 rounded-full">
                <ChefHat className="w-4 h-4" />
                <span className="font-medium">{recipe.steps.length} langkah</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Bahan-bahan</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">Langkah-langkah</h2>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  {recipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}