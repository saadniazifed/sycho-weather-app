import { useEffect, useState } from "react";
import axios from "axios";
const useFetchWeather = (cityName) => {
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5e87e075c8423b21e41dbcb9a292be87`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=7&appid=5e87e075c8423b21e41dbcb9a292be87`;

  const searchForCity = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${weatherURL}`);
      const responseTwo = await axios.get(`${forecastURL}`);
      setWeatherData([response?.data]);
      setForecastData([responseTwo?.data]);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    searchForCity();
  }, []);

  return {
    weatherData,
    forecastData,
    loading,
    error,
    searchForCity,
  };
};

export default useFetchWeather;
