import React, { useState } from "react";

import './style.css'

const suggestions = [
  "Apple",
  "Banana",
  "Blueberry",
  "Grape",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Pineapple",
  "Strawberry",
  "Watermelon",
];

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    handleDebounce(e.target.value);
  };

  const debounce = (fn, t) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), t);
    };
  };

  const handleFilter = (searchQuery) => {
    if (!searchQuery) {
      return;
    }

    const temp = suggestions.filter((val) =>
      val.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );

    setFilteredList(temp);
  };

  const handleDebounce = debounce(handleFilter, 1000);

  const handleListClick = (item) => {
    setQuery(item);
    setFilteredList([]);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-center flex-column">
        <div>
          <input
            onChange={handleChange}
            placeholder="Enter Fruites Name"
            value={query}
            type="text"
          />
        </div>
        <div className="lightBackGround">
          {filteredList.map((val, index) => (
            <div
              className="divHover"
              onClick={() => handleListClick(val)}
              key={index}
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
