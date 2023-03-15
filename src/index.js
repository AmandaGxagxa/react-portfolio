import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "./index.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
    <NavBar />
    <About />
    <Skills/>
    <Experience />
    <Projects />
      <Router>
       
        <Routes>
         
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </section>
  </React.StrictMode>
);
