import { useDispatch } from "react-redux";

const DetDataBtn = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "GET_SAGA_DATA", action: "test" });
        }}
      >
        DATA
      </button>
    </div>
  );
};
export default DetDataBtn;
