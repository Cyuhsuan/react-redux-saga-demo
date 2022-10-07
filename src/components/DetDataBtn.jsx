import { useDispatch } from "react-redux";
import axios from "axios";

const DetDataBtn = () => {
  const dispatch = useDispatch();

  const getData = () => {
    axios
      .get("http://127.0.0.1:9092/api/app/check-device?sid=hueuan1")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "ADD_DATA", data: res.data });
      });
  };

  return (
    <div>
      <button onClick={getData}>DATA</button>
    </div>
  );
};
export default DetDataBtn;
