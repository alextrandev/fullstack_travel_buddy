const CityInfo = () => {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations/${cityName}`)
      .then((res) => setCityData(res.data)) // Set the city data on successful response
      .catch((err) => console.log(err)); // Log any errors
  }, [cityName]); // Run this effect whenever cityName changes

  /* Display City name, image and description*/
  return (
    <div className="city-info">
      <h1>{cityData.city}</h1>
      <img
        src={cityData.imageUrl}
        alt={`Image of ${cityData.city}`}
        className="city-image"
      />
      <p>{cityData.description}</p>
    </div>
  );
};

export default CityInfo;
