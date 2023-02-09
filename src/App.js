import "./sass/index.scss";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./products/Nav";
import Main from "./products/Main";
import FilterGroup from "./products/Filter";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="wrapper">
          <FilterGroup />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
