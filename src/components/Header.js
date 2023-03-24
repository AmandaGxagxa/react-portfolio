
import styled from "styled-components";
import Logo from "../img/AmandaLogo.svg";
import "./Navbar.css";
import "./responsive.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Header() {
  const Wrapper = styled.section`
    background-color: transparent;
  `;

  return (
    <div id="header" className="fixed-top transparent">
      <Wrapper className="container ">
        <Navbar bg="transparent" variant="light" expand="lg">
          <img src={Logo} alt="Logo" />

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto justify-content-end">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Wrapper>
    </div>
  );
}

export default Header;
