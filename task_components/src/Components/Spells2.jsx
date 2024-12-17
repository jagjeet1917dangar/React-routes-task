import React, { useState, useEffect } from "react";
import "./Spells.css"; // Import the CSS file

const HarryPotterSpells = () => {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/fr/spells")
      .then((response) => response.json())
      .then((data) => {
        setSpells(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching spells:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="spells-container">
      <h1 className="title">Harry Potter Spells</h1>

      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="spells-list">
          {spells.map((spell) => (
            <div className="spell-card" key={spell.id}>
              <h2 className="spell-name">{spell.spell}</h2>
              <p className="spell-use">
                <strong>Use:</strong> {spell.use}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HarryPotterSpells;
