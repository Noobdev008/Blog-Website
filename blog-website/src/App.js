import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import AuthLayout from "./Layouts/Layout";
import Home from "./component/Home/Home";
import Favourites from "./component/Favourites/Favourites";
import Explore from "./component/Explore/Explore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
