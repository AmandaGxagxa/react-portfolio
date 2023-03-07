import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import "./index.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <section className="App">
      {/* <Link to="/about"><About us></Link>
    <Link to="/skills">Skills</Link>
    <Link to="/experience">Experience</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="skills" element={<Skills />} />

          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
    </section>
  </React.StrictMode>
);
