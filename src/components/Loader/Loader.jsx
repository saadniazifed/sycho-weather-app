import { InfinitySpin } from "react-loader-spinner";

const Loader = (props) => {
  const { LoaderName } = props;
  return (
    <div className={"loader__center"}>
      <LoaderName width="200" color="#4fa94d" style={{ alignSelf: "center" }} />
    </div>
  );
};

export default Loader;
