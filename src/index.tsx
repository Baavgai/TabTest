import { createElement } from "react";
import { render } from "react-dom";
import "@progress/kendo-theme-default/dist/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { App } from "./components/App";
import reportWebVitals from "./reportWebVitals";

render(createElement(App), document.getElementById("root"));

reportWebVitals();
