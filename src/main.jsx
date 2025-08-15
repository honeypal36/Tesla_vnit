import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Achieve from "./component/Achieve";
import Council from "./component/Council";
import Projects from "./component/projests-page/src/App.jsx";
import Gallery from "./component/Gallery";
import Learn from "./component/tesla-learn-page/src/App.jsx";
import Nav from "./component/Nav.jsx";
import Footer from "./component/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="projects" element={<Projects />} />
      <Route path="achieve" element={<Achieve />} />
      <Route path="council" element={<Council />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="learn" element={<Learn />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
