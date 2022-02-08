import { Reducer } from "../reducer/reducer";
import { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
const store = createStore(
  Reducer,
  compose(
    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
    applyMiddleware(logger,thunk)
  )
);
export default store;
