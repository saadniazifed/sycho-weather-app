const ShowWeeklyWeatherDetails = (props) => {
  const { label, details } = props;
  return (
    <div className={"displayFlex"}>
      <span>{label}</span>
      <span className={"weeklyWeatherResults__dailyTemperature"}>
        {details}
      </span>
    </div>
  );
};

export default ShowWeeklyWeatherDetails;
