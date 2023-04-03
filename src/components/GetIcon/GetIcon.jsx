import {
  WiCloudy,
  WiDayRain,
  WiNightAltSnowThunderstorm,
  WiSmoke,
  WiSnowWind,
  WiSunrise,
  WiThunderstorm,
} from "react-icons/wi";

const GetIcon = (props) => {
  const { item } = props;

  return item?.main === "Rain" ? (
    <WiDayRain size={150} />
  ) : item?.main === "Clear" ? (
    <WiSunrise size={150} />
  ) : item?.main === "Snow" ? (
    <WiSnowWind size={150} />
  ) : item?.main === "Drizzle" ? (
    <WiNightAltSnowThunderstorm size={150} />
  ) : item?.main === "Thunderstorm" ? (
    <WiThunderstorm size={150} />
  ) : item?.main === "Clouds" ? (
    <WiCloudy size={150} />
  ) : item?.main === "Smoke" ? (
    <WiSmoke size={150} />
  ) : null;
};

export default GetIcon;
