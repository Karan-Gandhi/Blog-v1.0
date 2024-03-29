import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
