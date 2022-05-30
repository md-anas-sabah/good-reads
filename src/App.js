import "./style.css";
import { bookList } from "./bookList";
import Book from "./Book";
import { useState } from "react";

function App() {
  const [genre, setGenre] = useState(["programming", "business", "psychology"]);
  const [books, setBooks] = useState([]);

  const clickHandler = (item) => {
    setBooks(bookList[item].items);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📚Good Reads</h1>
      </header>
      <hr></hr>
      <div className="genre">
        <p>***select a genre to get started***</p>
        <div className="genre-buttons">
          {genre.map((item, idx) => (
            <button
              className="btn"
              key={idx}
              onClick={() => clickHandler(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="book-list">
        {books.map((book) => (
          <Book
            key={book.id}
            name={book.name}
            rating={book.rating}
            image={book.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
