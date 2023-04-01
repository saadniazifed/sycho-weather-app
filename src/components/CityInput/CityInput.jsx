import { FaSearchLocation } from "react-icons/fa";

const CityInput = (props) => {
  const { citySearch, setCitySearch, searchForCity } = props;
  return (
    <div className={"displayFlex"}>
      <input
        value={citySearch}
        onChange={(e) => setCitySearch(e.target.value)}
        placeholder={"Search Location.."}
        className={"weather-info__input"}
      />

      <button
        onClick={() => searchForCity()}
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <FaSearchLocation color={"white"} size={35} className={"faLocation"} />
      </button>
    </div>
  );
};

export default CityInput;
