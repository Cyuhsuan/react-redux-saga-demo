import { useSelector } from "react-redux";
import SagaDetDataBtn from "./SagaDetDataBtn";

const SagaDataDisplay = () => {
  const data = useSelector((state) => state.sagaData);
  console.log("saga", data);
  return (
    <div>
      sagaDataDisplay
      {data.length ? data[0].data.data[0].serial_number : "no data"}
      <SagaDetDataBtn />
    </div>
  );
};
export default SagaDataDisplay;
