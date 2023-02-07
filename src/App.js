<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./feedback/Nav";
import Main from "./feedback/Main";
import FilterGroup from "./feedback/Filter";
=======
import "./sass/index.scss"
import Nav from "./feedback/Nav";
import Main from "./feedback/Main";
import { BrowserRouter, Route } from "react-router-dom";

>>>>>>> 1ba6e2cc5aa01878f0d5f5e04a2c9e218e06656e
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
<<<<<<< HEAD
        <div className="wrapper">
          <FilterGroup />
          <Main />
        </div>
=======
        <Main />
>>>>>>> 1ba6e2cc5aa01878f0d5f5e04a2c9e218e06656e
      </div>
    </BrowserRouter>
  );
}

export default App;
