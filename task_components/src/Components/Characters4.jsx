import React, { useState, useEffect } from "react";
import "./Characters.css"; // Import the CSS file

const HarryPotterCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/pt/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="characters-container">
      <h1 className="title">Harry Potter Characters</h1>

      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="characters-grid">
          {characters.map((character) => (
            <div className="character-card" key={character.id}>
              <img
                className="character-image"
                src={character.image}
                alt={character.fullName}
              />
              <h2 className="character-name">{character.fullName}</h2>
              <p className="character-house">
                <strong>House:</strong> {character.hogwartsHouse || "N/A"}
              </p>
              <p className="character-actor">
                <strong>Played By:</strong> {character.interpretedBy || "N/A"}
              </p>
              {character.children && (
                <p className="character-children">
                  <strong>Children:</strong> {character.children.join(", ")}
                </p>
              )}
              <p className="character-nickname">
                <strong>Nickname:</strong> {character.nickname || "N/A"}
              </p>
              <p className="character-birthdate">
                <strong>Birthdate:</strong> {character.birthdate || "Unknown"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HarryPotterCharacters;
