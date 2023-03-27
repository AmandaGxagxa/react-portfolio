import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./components/Header";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import "./index.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  
    <section className="App">
    <Header />
   
    <About />
    <Skills/>
    <Experience />
    <Projects />
    <Contacts />
   
    </section>
  </React.StrictMode>
);
