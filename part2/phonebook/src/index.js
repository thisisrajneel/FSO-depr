import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";

axios.get("http://localhost:3001/persons").then((response) => {
  const people = response.data;
  console.log(people, typeof(people), response.data);
  ReactDOM.render(
    <React.StrictMode>
      <App people={people} />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
