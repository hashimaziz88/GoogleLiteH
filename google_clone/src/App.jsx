import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Images from "./components/Images";
import Advanced from "./components/Advanced";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <li>
          <ul>
            <Link to="/">Home</Link>
          </ul>

          <ul>
            <Link to="/images">Images</Link>
          </ul>
          <ul>
            <Link to="/advanced-search">Advanced Search</Link>
          </ul>
        </li>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/images" element={<Images />} />
        <Route exact path="/advanced-search" element={<Advanced />} />
      </Routes>
    </div>
  );
}

export default App;
