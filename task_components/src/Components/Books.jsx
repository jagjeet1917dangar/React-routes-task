import React, { useState, useEffect } from "react";
import "./Books.css"; // Import the CSS file

const HarryPotterBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://potterapi-fedeperin.vercel.app/en/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="books-container">
      <h1 className="title">Harry Potter Books</h1>

      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <img className="book-cover" src={book.cover} alt={book.title} />
              <h2 className="book-title">{book.title}</h2>
              <p className="book-date">
                <strong>Release Date:</strong> {book.releaseDate}
              </p>
              <p className="book-description">{book.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HarryPotterBooks;
