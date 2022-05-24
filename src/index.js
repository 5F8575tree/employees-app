import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./styles/index.css";
import store from "./redux/store/store";
import LoadingBar from "react-redux-loading-bar";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <LoadingBar />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
