import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from 'react-redux'
import store from './redux/store/store.js'

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/master.scss";
import "font-awesome/css/font-awesome.min.css";
import "react-modal-video/scss/modal-video.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
