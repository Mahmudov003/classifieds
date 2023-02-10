import "./sass/index.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./products/Nav";
import Main from "./products/Main";
import FilterGroup from "./products/Filter";
import Registration from "./products/registration";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Nav />} />
        </Routes>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<FilterGroup />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
