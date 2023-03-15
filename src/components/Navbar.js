import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/AmandaLogo.svg";
import "./Navbar.css";
import "./responsive.css";
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"


function NavBar() {
  const Wrapper = styled.section`
    background-color: transparent;
    // display: flex;
    // flex-direction: row;
    // justify-content: flex-end
  `;



  return (


    
    <div id="header" className="fixed-top transparent">
      <Wrapper className="container ">

      
          <Navbar bg="transparent" expand="lg">
      
        
          <img src={Logo} alt="Logo" />
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-end">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#link">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
          {/* <div className="col-md-8 ">
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
                    <Link to={`/experience`}>Experience</Link>
                  </li>
                  <li>
                    <Link to={`/projects`}>Projects</Link>
                  </li>

                  <li>
                    <Link to={`/contacts`}>Contacts</Link>
                  </li>
                </ul>
              </nav>
              <label htmlFor="nav_toggle" className="nav_toggle_label">
                <span></span>
              </label>
            </div>
          </div>
  </div>*/}
      </Wrapper> 
    </div>
  );
}

export default NavBar;
