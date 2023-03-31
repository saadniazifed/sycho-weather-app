import "./App.css";
import { useState } from "react";
import moment from "moment";
import ShowWeatherResults from "./components/ShowWeatherResults/ShowWeatherResults.jsx";
import ShowWeeklyWeatherResults from "./components/ShowWeeklyWeatherResults/ShowWeeklyWeatherResults.jsx";
import useFormattedTime from "./customHooks/useFormattedTime.js";
import useFormattedDate from "./customHooks/useFormattedDate.js";
import useFetchWeather from "./customHooks/useFetchWeather.js";
function App() {
  //Setting initial states of values.
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(moment());
  const [citySearch, setCitySearch] = useState("London");

  //Using custom hooks.
  const { formattedTime } = useFormattedTime(currentTime, setCurrentTime);
  const { formattedDate } = useFormattedDate(currentDate);

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
    `https://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&units=metric&cnt=7&APPID=5e87e075c8423b21e41dbcb9a292be87`
  );

  return (
    <div className={"app_container"}>
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
    </div>
  );
}

export default App;
