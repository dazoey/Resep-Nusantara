import React, { useState, useEffect } from 'react';
import RecipeGrid from '../components/makanan/RecipeGrid';

const FavoritePage = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteRecipes(storedFavorites);
  }, []);

  const handleFavorite = (recipe) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.some(fav => fav.id === recipe.id)) {
      favorites = favorites.filter(fav => fav.id !== recipe.id);
    } else {
      favorites.push(recipe);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setFavoriteRecipes(favorites);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Resep Favorit</h1>
      {favoriteRecipes.length > 0 ? (
        <RecipeGrid recipes={favoriteRecipes} onFavorite={handleFavorite} />
      ) : (
        <p className="text-center text-gray-500">Anda belum memiliki resep favorit.</p>
      )}
    </div>
  );
};

export default FavoritePage;
