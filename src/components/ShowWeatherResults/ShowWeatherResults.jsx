import {
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherDownpour,
  TiWeatherWindy,
} from "react-icons/ti";
import { FaSearchLocation } from "react-icons/fa";
import ShowWeatherDetails from "./ShowWeatherDetails.jsx";
import capitalizedWords from "../../utils/capitalizeWords.js";
import { useState } from "react";
import moment from "moment";
import useFormattedTime from "../../Hooks/useFormattedTime.js";
import {
  WiCloudy,
  WiDayRain,
  WiNightAltSnowThunderstorm,
  WiSmoke,
  WiSnowWind,
  WiSunrise,
  WiThunderstorm,
} from "react-icons/wi";
import CityInput from "../CityInput/CityInput.jsx";

const ShowWeatherResults = (props) => {
  const {
    item,
    name,
    formattedDate,
    main,
    citySearch,
    setCitySearch,
    wind,
    index,
    searchForCity,
  } = props;

  const [currentTime, setCurrentTime] = useState(moment());
  const { formattedTime } = useFormattedTime(currentTime, setCurrentTime);

  //Using custom hooks.
  const { joinedWord } = capitalizedWords(item?.description);

  const getIcon = (item) => {
    console.log("item: ", item?.main);
    return item?.main === "Rain" ? (
      <WiDayRain size={90} />
    ) : item?.main === "Clear" ? (
      <WiSunrise size={90} />
    ) : item?.main === "Snow" ? (
      <WiSnowWind size={90} />
    ) : item?.main === "Drizzle" ? (
      <WiNightAltSnowThunderstorm size={90} />
    ) : item?.main === "Thunderstorm" ? (
      <WiThunderstorm size={90} />
    ) : item?.main === "Clouds" ? (
      <WiCloudy size={150} />
    ) : item?.main === "Smoke" ? (
      <WiSmoke size={150} />
    ) : null;
  };

  return (
    <div className={"top_container"} key={index}>
      <div className={"left_container"}>
        <span className={"weather-info__description"}>
          {item?.main.toUpperCase()}
        </span>
        {getIcon(item)}
        <CityInput
          citySearch={citySearch}
          setCitySearch={setCitySearch}
          searchForCity={searchForCity}
        />
        <span className={"weather-info__city"}>{name}</span>
        <span className={"weather-info__date_and_time"}>{formattedDate}</span>
        <span className={"weather-info__date_and_time"}>{formattedTime}</span>
        <span className={"weather-info__temperature"}>{main.temp} °C</span>
      </div>

      <div className={"right_container"}>
        <ShowWeatherDetails
          IconName={TiWeatherSunny}
          label={"Feels Like"}
          labelDetails={`${main?.feels_like} °C`}
        />

        <ShowWeatherDetails
          IconName={TiWeatherWindyCloudy}
          label={"Humidity"}
          labelDetails={`${main?.humidity}%`}
        />

        <ShowWeatherDetails
          IconName={TiWeatherDownpour}
          label={"Weather Feels Like"}
          labelDetails={joinedWord}
        />

        <ShowWeatherDetails
          IconName={TiWeatherWindy}
          label={"Wind Speed"}
          labelDetails={`${wind?.speed} km/h`}
        />
      </div>
    </div>
  );
};

export default ShowWeatherResults;
