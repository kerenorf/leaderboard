import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from "./List";
import { getData1, getData2 } from "./data";

function App() {
  const [data] = useState(getData1());
  const [data2] = useState(getData2());
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <List data={data}></List>
      <List data={data2}></List>
      <List data={data}></List>
      <List data={data2}></List>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
