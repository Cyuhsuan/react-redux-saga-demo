import { createStore, applyMiddleware } from "redux";
import todoApp from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
