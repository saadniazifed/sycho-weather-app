import ShowWeeklyWeatherDetails from "./ShowWeeklyWeatherDetails.jsx";

const ShowWeeklyWeatherResults = (props) => {
  const { index, item } = props;
  const returnIndex = () => {
    if (index === 0) {
      return "Friday";
    } else if (index === 1) {
      return "Saturday";
    } else if (index === 2) {
      return "Sunday";
    } else if (index === 3) {
      return "Monday";
    } else if (index === 4) {
      return "Tuesday";
    } else if (index === 5) {
      return "Wednesday";
    } else if (index === 6) {
      return "Thursday";
    }
  };

  return (
    <div className={"weeklyWeatherResults__container"}>
      <div className={"weeklyWeatherResults__wrapper"}>
        <span className={"weeklyWeatherResults_day"}>{returnIndex()}</span>
        <ShowWeeklyWeatherDetails
          label={"High Temp"}
          details={`${item?.main?.temp_max} °C`}
        />

        <ShowWeeklyWeatherDetails
          label={"Feels Like"}
          details={`${item?.main?.feels_like} °C`}
        />
      </div>
    </div>
  );
};

export default ShowWeeklyWeatherResults;
