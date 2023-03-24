import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "./index.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

import { BrowserRouter as Router, } from "react-router-dom";
import Projects from "./components/Projects";
// import NavTwo from "./components/NavTwo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     {/* <NavTwo /> */}
    <section className="App">
    <NavBar />
   
    <About />
    <Skills/>
    <Experience />
    <Projects />
    <Contacts />
      <Router>
       
        {/* <Routes>
         
          <Route path="/contacts" element={} />
        </Routes> */}
      </Router>
    </section>
  </React.StrictMode>
);
