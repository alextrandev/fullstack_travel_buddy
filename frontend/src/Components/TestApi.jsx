import axios from "axios";
import { useEffect, useState } from "react"

export default function TestApi() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}destinations/`)
      .then(res => setApiData(res.data))
      .catch(err => console.log(err))
  }, []);

  // console.log(apiData);

  return (
    <>
      {apiData.map(destination =>
        <div key={destination.city}>
          <img src={destination.imageUrl} alt={`Image of ${destination.city}`} />
          <p>{destination.city}</p>
        </div>
      )
      }
    </>
  )
}
