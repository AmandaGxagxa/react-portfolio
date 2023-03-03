import "./Navbar.css";
import "./responsive.css";
import Logo from "../img/AmandaLogo.svg";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Navbar() {
  const Wrapper = styled.section`
    background-color: transparent;
    // display: flex;
    // flex-direction: row;
    // justify-content: flex-end
  `;

  return (
    <div id="header" className="fixed-top transparent">
      <Wrapper className="container ">
        <div className="row ">
          <div className="col-md-4">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="col-md-8 ">
            <div className="nav-container">
              <input type="checkbox" id="nav_toggle" className="nav_toggle" />
              <nav>
                <ul>
                  <li>
                    <Link to={`/`}>About</Link>
                  </li>

                  <li>
                    <Link to={`/skills`}>Skills</Link>
                  </li>

                  <li>
                    <a className=" page-scroll" href="#experience">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a className=" page-scroll" href="#projects">
                      Projects
                    </a>
                  </li>

                  <li>
                    <a className=" page-scroll" href="#contacts">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <label htmlFor="nav_toggle" className="nav_toggle_label">
                <span></span>
              </label>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Navbar;
