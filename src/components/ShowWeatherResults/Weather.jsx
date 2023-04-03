import useFetchWeather from "../../Hooks/useFetchWeather.js";
// import { weatherURL } from "../../CONSTANTS/CONSTANTS.JS.js";
import ShowWeatherResults from "./ShowWeatherResults.jsx";
import Loader from "../Loader/Loader.jsx";
import { InfinitySpin } from "react-loader-spinner";
import formatDate from "../../utils/formatDate.js";

const Weather = (props) => {
  const { citySearch, setCitySearch, fetchWeeklyData } = props;

  const currentDate = new Date();
  const { formattedDate } = formatDate(currentDate);

  const { weatherData, loading, searchForCity } = useFetchWeather(
    `${citySearch}`
  );

  return (
    <>
      {loading ? (
        <Loader LoaderName={InfinitySpin} />
      ) : (
        <>
          {weatherData?.map((items, index) => {
            const { name, main, wind } = items;
            return items?.weather?.map((item, indexTwo) => {
              return (
                <ShowWeatherResults
                  indexTwo={indexTwo}
                  item={item}
                  name={name}
                  formattedDate={formattedDate}
                  main={main}
                  citySearch={citySearch}
                  setCitySearch={setCitySearch}
                  searchForCity={searchForCity}
                  wind={wind}
                  index={index}
                  fetchWeeklyData={fetchWeeklyData}
                />
              );
            });
          })}
        </>
      )}
    </>
  );
};

export default Weather;
