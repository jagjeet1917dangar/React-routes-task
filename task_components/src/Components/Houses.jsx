import React, { useState, useEffect } from "react";
import "./Houses.css"; // Import the CSS file

const HarryPotterHouses = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching houses:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="houses-container">
      <h1 className="title">Harry Potter Houses</h1>

      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="houses-grid">
          {houses.map((house) => (
            <div className="house-card" key={house.id}>
              <h2 className="house-name">{house.house}</h2>
              <span className="house-emoji">{house.emoji}</span>
              <p className="house-founder">
                <strong>Founder:</strong> {house.founder}
              </p>
              <p className="house-colors">
                <strong>Colors:</strong> {house.colors}
              </p>
              <p className="house-animal">
                <strong>Animal:</strong> {house.animal}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HarryPotterHouses;
