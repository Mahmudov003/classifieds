import "./sass/index.scss"
import Nav from "./feedback/Nav";
import Main from "./feedback/Main";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
