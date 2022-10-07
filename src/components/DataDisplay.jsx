import { useSelector } from "react-redux";
import DetDataBtn from "./DetDataBtn";

const DataDisplay = () => {
  const data = useSelector((state) => state.data);
  console.log(data);
  return (
    <div>
      DataDisplay
      {data.length ? data[0].data.data[0].serial_number : "no data"}
      <DetDataBtn />
    </div>
  );
};
export default DataDisplay;
