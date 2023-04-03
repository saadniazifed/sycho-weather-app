const GetWeekDay = (props) => {
  const { index } = props;
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

export default GetWeekDay;
