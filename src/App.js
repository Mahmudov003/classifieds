import Nav from "./feedback/Nav";
import Main from "./feedback/Main";
import Filter from "./feedback/Filter";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Main>
          <Filter/>
        </Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
