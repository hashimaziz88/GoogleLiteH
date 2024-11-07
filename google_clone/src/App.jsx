import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Images from "./components/Images";
import Advanced from "./components/Advanced";
import "./App.css";
import Footer from "./components/Footer";
import { StickyNavbar } from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <div>
        <StickyNavbar />
      </div>
      <nav>
        <li>
          <ul>
            <Link to="/GoogleLiteH">Home</Link>
          </ul>

          <ul>
            <Link to="/GoogleLiteH/images">Images</Link>
          </ul>
          <ul>
            <Link to="/GoogleLiteH/advanced-search">Advanced Search</Link>
          </ul>
        </li>
      </nav>
      <div>
        <Routes>
          <Route exact path="/GoogleLiteH" element={<Home />} />
          <Route exact path="/GoogleLiteH/images" element={<Images />} />
          <Route
            exact
            path="/GoogleLiteH/advanced-search"
            element={<Advanced />}
          />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
