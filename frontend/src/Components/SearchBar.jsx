import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(query);
  };

  return (
    <>
      <h1>Search for a destination</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
