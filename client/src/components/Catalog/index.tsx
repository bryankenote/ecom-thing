import React, { useState } from "react";
import { Link } from "react-router-dom";
import movies from "../../api/dummyData/movies.json";

interface ICatalog {}

function Catalog(props: ICatalog) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleClick = () => {
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <div>
      <header>
        <h1>E-Commerce App</h1>
      </header>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <div>
        {filteredMovies.map((item, index) => (
          <div key={index}>
            <p>Title: {item.title}</p>
            <img src={item.img} alt="" />
            <p>Price: {item.price}</p>
            <Link to="/product" state={{ item }}>
              Add Item
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
