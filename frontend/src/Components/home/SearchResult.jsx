import DestinationCardGrid from "./DestinationCardGrid";

const SearchResults = ({ results }) => {
  if (results.length == 0) {
    return <div><p>No results found</p></div>
  }

  return (
    <div className="destination">
      <DestinationCardGrid destinations={results} />
    </div>
  );
};

export default SearchResults;
