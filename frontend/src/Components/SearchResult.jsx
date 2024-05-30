
import React from 'react';

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <div>No results found</div>;
  }

  return (
    <ul>
      {results.map((result, index) => (
        <li key={index}>{result}</li>
      ))}
    </ul>
  );
};

export default SearchResults;
