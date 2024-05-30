import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={(e, query) => handleSubmit(e, query)}>Search</button>
    </form>
  );
};

export default SearchBar;
