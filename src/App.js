import React from "react";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import Getdata from "./Getdata";
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>redux</h1>
        <Getdata/>
      </div>
    </Provider>
  );
}
