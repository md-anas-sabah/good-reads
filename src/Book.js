import "./style.css";
import React from "react";

function Book({ name, image, rating }) {
  return (
    <div className="books">
      <img src={image} alt={name} className="book-img" />
      <div className="book-info">
        <h1 className="book-name">{name}</h1>
        <p className="book-rating">{rating}</p>
      </div>
    </div>
  );
}

export default Book;
