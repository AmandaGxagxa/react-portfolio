import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import "./index.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contacts} />
        </Routes>
      </Router>
    </section>
  </React.StrictMode>
  // <React.StrictMode>
  //     <Navbar />
  //     <About />
  //     <Skills />
  //     <Experience />
  //     <Projects />
  //     <Contacts />
  //     <Footer />
  // </React.StrictMode>
);
