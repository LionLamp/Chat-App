import React from "react";
//import ReactDOM from "react-dom/client";
import { render } from 'react-dom';
import App from "./App";

const root = document.getElementById('root');
//const root = ReactDOM.createRoot(document.getElementById("root"));
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
