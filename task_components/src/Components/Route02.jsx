import React, { useState } from 'react';
import './MyDrinks.css';

const Route02 = () => {
  const [searchInput, setSearchInput] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [loading, setLoading] = useState(false);
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const searchDrinkByName = async () => {
    setLoading(true);
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
    );
    const data = await response.json();
    setDrinks(data.drinks || []);
    setLoading(false);
  };

  const searchDrinksByLetter = async (letter) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );
      const data = await response.json();
      setDrinks(data.drinks || []);
    } catch (error) {
      console.error('Error fetching drinks by letter:', error);
      setDrinks([]);
    } finally {
      setLoading(false);
    }
  };

  const searchIngredientsByName = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`
      );
      const data = await response.json();
      setIngredients(data.ingredients || []);
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      setIngredients([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-meals">
      <div className="welcome-box">
        <div className="welcome-content">
          <h1>Welcome, {"Guest"}! 🎉</h1>
          <p>
            We're thrilled to have you here. Dive into our world of delicious drinks. Explore and enjoy your journey!
          </p>
        </div>
      </div>

      <h1 className="dion">My Drinks</h1>

      <div className="search-meal">
        <h2>Search Drink by Name</h2>
        <input
          type="text"
          placeholder="Enter drink name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={searchDrinkByName}>Search</button>
      </div>

      <div className="list-by-letter">
        <h2>List Drinks by First Letter</h2>
        <select
          value={selectedLetter}
          onChange={(e) => {
            setSelectedLetter(e.target.value);
            searchDrinksByLetter(e.target.value);
          }}>
          <option value="">Select a letter</option>
          {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
            <option key={letter} value={letter}>
              {letter.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="meal-results">
        <h2>Drink Results</h2>
        {loading ? (
          <p>Loading...</p>
        ) : drinks.length > 0 ? (
          <div className="meal-grid">
            {drinks.map((drink) => (
              <div key={drink.idDrink} className="meal-card">
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                <h3>{drink.strDrink}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>No drinks found.</p>
        )}
      </div>

      <div className="search-meal">
        <h2>Search Ingredient by Name</h2>
        <input
          type="text"
          placeholder="Enter ingredient name..."
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button onClick={searchIngredientsByName}>Search</button>
      </div>

      <div className="ingredients-grid">
        <h2>Ingredients</h2>
        {loading ? (
          <p>Loading...</p>
        ) : ingredients.length > 0 ? (
          <div className="meal-grid">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="meal-card">
                <h3>{ingredient.strIngredient}</h3>
                <p>{ingredient.strDescription || 'No description available.'}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No ingredients found.</p>
        )}
      </div>
    </div>
  );
};

export default Route02;
