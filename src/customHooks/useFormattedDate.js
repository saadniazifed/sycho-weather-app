const useFormattedDate = (currentDate) => {
  const formattedDate = currentDate
    .toLocaleString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
    .replace(/(\w+)\s(\d+)/, "$1' $2");

  return { formattedDate };
};

export default useFormattedDate;
