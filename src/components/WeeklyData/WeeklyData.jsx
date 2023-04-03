// import { weeklyWeatherURL } from "../../CONSTANTS/CONSTANTS.JS.js";
import GetIcon from "../GetIcon/GetIcon.jsx";
import Loader from "../Loader/Loader.jsx";
import { Rings } from "react-loader-spinner";
const WeeklyData = (props) => {
  const { loading, forecastData } = props;

  const getWeekDayName = (index) => {
    if (index === 0) {
      return "Monday";
    } else if (index === 1) {
      return "Tuesday";
    } else if (index === 2) {
      return "Wednesday";
    } else if (index === 3) {
      return "Thursday";
    } else if (index === 4) {
      return "Friday";
    } else if (index === 5) {
      return "Saturday";
    } else if (index === 6) {
      return "Sunday";
    }
  };

  return (
    <div className={"something"}>
      {loading ? (
        <div className={"center_loader"}>
          <Loader LoaderName={Rings} />
        </div>
      ) : (
        forecastData?.map((items, index) => {
          return items?.list?.map((itemsTwo, indexTwo) => {
            return (
              <div className={"weekly_weather_container"} key={indexTwo}>
                <span>{getWeekDayName(indexTwo)}</span>
                {itemsTwo?.weather?.map((itemsThree, indexThree) => {
                  return <GetIcon item={itemsThree} />;
                })}
              </div>
            );
          });
        })
      )}
    </div>
  );
};

export default WeeklyData;
