import React, { useState } from 'react';
import './MyMeals.css';

const MyMeals = ({ userName }) => {
  const [searchInput, setSearchInput] = useState('');
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [loading, setLoading] = useState(false);

  
  const searchMealByName = async () => {
    setLoading(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    );
    const data = await response.json();
    setMeals(data.meals || []);
    setLoading(false);
  };

  const listMealsByLetter = async (letter) => {
    setLoading(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const data = await response.json();
    setMeals(data.meals || []);
    setLoading(false);
  };

  const fetchCategories = async () => {
    setLoading(true);
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    const data = await response.json();
    setCategories(data.categories || []);
    setLoading(false);
  };

  return (
    <div className="my-meals">
      <div className="welcome-box">
        <div className="welcome-content">
          <h1>Welcome, {userName || "Guest"}! 🎉</h1>
          <p>
            We're thrilled to have you here. Dive into our world of delicious meals, magical drinks, and enchanting content. Explore and enjoy your journey!
          </p>
        </div>
      </div>

      <h1 className='dion'>My Meals</h1>

      <div className="search-meal">
        <h2>Search Meal by Name</h2>
        <input
          type="text"
          placeholder="Enter meal name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={searchMealByName}>Search</button>
      </div>

      <div className="list-by-letter">
        <h2>List Meals by First Letter</h2>
        <select
          value={selectedLetter}
          onChange={(e) => {
            setSelectedLetter(e.target.value);
            listMealsByLetter(e.target.value);
          }}
        >
          <option value="">Select a letter</option>
          {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
            <option key={letter} value={letter}>
              {letter.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="meal-categories">
        <h2>Meal Categories</h2>
        <button onClick={fetchCategories}>View Categories</button>
      </div>

      {loading && <div className="loading">Loading...</div>}

      <div className="meal-results">
        <h2>Meal Results</h2>
        {meals.length > 0 ? (
          <div className="meal-grid">
            {meals.map((meal) => (
              <div key={meal.idMeal} className="meal-card">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>No meals found.</p>
        )}
      </div>

      <div className="categories-results">
        <h2>Categories</h2>
        {categories.length > 0 ? (
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.idCategory} className="category-card">
                <img src={category.strCategoryThumb} alt={category.strCategory} />
                <h3>{category.strCategory}</h3>
                <p>{category.strCategoryDescription}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No categories to display.</p>
        )}
      </div>
    </div>
  );
};

export default MyMeals;
