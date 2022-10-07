import {
  put,
  takeEvery,
  all,
  delay,
  call,
  takeLatest,
} from "redux-saga/effects";
import axios from "axios";

// 我們工作的 saga：將執行非同步的 increment task
// 延遲 1 秒後發出 type 為 'INCREMENT' 的事件
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

// 我們觀察的 saga：當在 type 為 INCREMENT_ASYNC 時 就會執行 incrementAsync task
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* fetchData(action) {
  console.log("action", action);
  const data = yield call(() =>
    axios
      .get("http://127.0.0.1:9092/api/app/check-device?sid=hueuan1")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
  );
  console.log("data", data);
  yield put({ type: "ADD_SAGA_DATA", data: data });
}

export function* watchFetchData() {
  yield takeLatest("GET_SAGA_DATA", fetchData);
}

// 定義 rootSaga
export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchFetchData()]);
}
