// <<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./feedback/Nav";
import Main from "./feedback/Main.jsx";
import FilterGroup from "./feedback/Filter";

import "./sass/index.scss"
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
