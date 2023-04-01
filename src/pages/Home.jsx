import { useState } from "react";
import moment from "moment/moment.js";
import useFormattedTime from "../Hooks/useFormattedTime.js";
import useFetchWeather from "../Hooks/useFetchWeather.js";
import ShowWeatherResults from "../components/ShowWeatherResults/ShowWeatherResults.jsx";
import ShowWeeklyWeatherResults from "../components/ShowWeeklyWeatherResults/ShowWeeklyWeatherResults.jsx";
import formatDate from "../utils/formatDate.js";
import { InfinitySpin } from "react-loader-spinner";
import Loader from "../components/Loader/Loader.jsx";

const Home = () => {
  //Setting initial states of values.
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(moment());
  const [citySearch, setCitySearch] = useState("London");

  //Using custom hooks and util functions.
  const { formattedTime } = useFormattedTime(currentTime, setCurrentTime);
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
  } = useFetchWeather(
    `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&units=metric&cnt=7&APPID=5e87e075c8423b21e41dbcb9a292be87`,
    `${citySearch}`
  );

  console.log("loading: ", loading);

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
                  formattedTime={formattedTime}
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

          {cityWeeklyData?.map((items, index) => {
            return (
              <div className={"weeklyWeatherResults__map"}>
                {items?.list.map((item, index) => {
                  return <ShowWeeklyWeatherResults index={index} item={item} />;
                })}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Home;
