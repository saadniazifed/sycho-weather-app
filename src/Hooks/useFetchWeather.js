import { useEffect, useState } from "react";
import axios from "axios";
const useFetchWeather = (url, cityName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchForCity = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url?.replace("__id__", cityName));
      setData([response?.data]);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    searchForCity();
  }, []);

  return { data, loading, error, searchForCity };
};

export default useFetchWeather;
