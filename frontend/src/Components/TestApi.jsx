import axios from "axios";
import { useEffect, useState } from "react"

export default function TestApi() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    axios
      .get(`https://127.0.0.1:8000/api/destinations/`)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>TestApi</div>
  )
}
