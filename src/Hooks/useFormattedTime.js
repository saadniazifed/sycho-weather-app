import { useEffect } from "react";
import moment from "moment";

const useFormattedTime = (currentTime, setCurrentTime) => {
  const formattedTime = currentTime.format("h:mm A");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { formattedTime };
};

export default useFormattedTime;
