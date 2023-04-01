import { useState } from "react";
import useFetchWeather from "../Hooks/useFetchWeather.js";
import ShowWeatherResults from "../components/ShowWeatherResults/ShowWeatherResults.jsx";
import formatDate from "../utils/formatDate.js";
import { InfinitySpin } from "react-loader-spinner";
import Loader from "../components/Loader/Loader.jsx";

const Home = () => {
  //Setting initial states of values.
  const [currentDate, setCurrentDate] = useState(new Date());
  const [citySearch, setCitySearch] = useState("London");

  //Using custom hooks and util functions.
  const { formattedDate } = formatDate(currentDate);

  const {
    data: cityData,
    loading,
    error,
    searchForCity,
  } = useFetchWeather(
    `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&APPID=5e87e075c8423b21e41dbcb9a292be87`,
    `${citySearch}`
  );

  const {
    data: cityWeeklyData,
    loadingTwo,
    errorTwo,
    searchForCity: searchForCityTwo,
  } = useFetchWeather(
    `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&units=metric&cnt=7&APPID=5e87e075c8423b21e41dbcb9a292be87`,
    `${citySearch}`
  );

  return (
    <div className={"app_container"}>
      {loading || loadingTwo ? (
        <Loader LoaderName={InfinitySpin} />
      ) : (
        <>
          {cityData?.map((items, index) => {
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
                />
              );
            });
          })}
        </>
      )}
    </div>
  );
};

export default Home;
