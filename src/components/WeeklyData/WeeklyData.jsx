// import { weeklyWeatherURL } from "../../CONSTANTS/CONSTANTS.JS.js";
import GetIcon from "../GetIcon/GetIcon.jsx";
import Loader from "../Loader/Loader.jsx";
import { Rings } from "react-loader-spinner";
import GetWeekDay from "../GetWeekDay/GetWeekDay.jsx";
const WeeklyData = (props) => {
  const { loading, forecastData } = props;

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
                <span>
                  <GetWeekDay index={indexTwo} />
                </span>
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
