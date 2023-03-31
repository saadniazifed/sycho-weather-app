const ShowWeatherDetails = (props) => {
  const { IconName, label, labelDetails } = props;

  return (
    <div className={"weather-info__container"}>
      <div>
        <IconName name={IconName.toString()} size={50} />
      </div>
      <div className={"weather-info__container_children"}>
        <span className={"weather-info__details-label"}>{label}</span>
        <span>{labelDetails}</span>
      </div>
    </div>
  );
};

export default ShowWeatherDetails;
