import useCapitalizedWords from "../../customHooks/useCapitalizedWords.js";
import {
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherDownpour,
  TiWeatherWindy,
} from "react-icons/ti";
import ShowWeatherDetails from "./ShowWeatherDetails.jsx";

const ShowWeatherResults = (props) => {
  const {
    item,
    name,
    formattedDate,
    formattedTime,
    main,
    citySearch,
    setCitySearch,
    wind,
    index,
  } = props;
  //Using custom hooks.
  const { joinedWord } = useCapitalizedWords(item?.description);

  return (
    <div className={"top_container"} key={index}>
      <div className={"left_container"}>
        <span className={"weather-info__description"}>{item?.main}</span>
        <span className={"weather-info__city"}>{name}</span>
        <span className={"weather-info__date_and_time"}>{formattedDate}</span>
        <span className={"weather-info__date_and_time"}>{formattedTime}</span>
        <span className={"weather-info__temperature"}>{main.temp} °C</span>
        <span className={"weather-info__weather-units"}>Display °F</span>
        <input
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
          placeholder={"Search Location.."}
          className={"weather-info__input"}
        />
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
