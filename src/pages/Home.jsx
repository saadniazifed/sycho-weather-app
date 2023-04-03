import Weather from "../components/ShowWeatherResults/Weather.jsx";
import { useState } from "react";
import WeeklyData from "../components/WeeklyData/WeeklyData.jsx";
import useFetchWeather from "../Hooks/useFetchWeather.js";

const Home = () => {
  const [citySearch, setCitySearch] = useState("Rawalpindi");
  const { forecastData, loading, searchForCity } = useFetchWeather(
    `${citySearch}`
  );

  return (
    <div className={"app_container"}>
      <Weather
        citySearch={citySearch}
        setCitySearch={setCitySearch}
        fetchWeeklyData={searchForCity}
      />
      <WeeklyData forecastData={forecastData} loading={loading} />
    </div>
  );
};

export default Home;
