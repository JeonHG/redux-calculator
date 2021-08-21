import React from "react";
import ReactDOM from "react-dom";
import createStore from "./store/store";
import { Provider } from "react-redux";
import Calculator from "./calculator/container";
import "antd/dist/antd.css";
import "./style/calculator.css";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>,
  document.getElementById("root")
);
