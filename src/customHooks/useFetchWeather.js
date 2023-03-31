import { useEffect, useState } from "react";
import axios from "axios";
const useFetchWeather = (url, cityName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updatedURL, setUpdatedURL] = useState("");

  const searchForCity = async () => {
    const newURL = url?.replace("__id__", cityName);
    setLoading(true);
    await axios
      .get(newURL)
      .then((res) => {
        setData([res?.data]);
        setLoading(false);
      })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    searchForCity().then((res) => console.log(res));
  }, [url]);

  return { data, loading, error, searchForCity };
};

export default useFetchWeather;
