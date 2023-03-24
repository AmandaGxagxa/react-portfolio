// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";

// import todolist from "./todolist.png";
import styled from "styled-components";
import dicegame from "./dicegame.png";
import searchbar from "./searchbar.png";
import unitconverter from "./unitconverter.png";
import bashvalues from "./bashvalues.png";
function Projects() {
  const Wrapper = styled.section`
    min-height: 100vh;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Wrapper className="container" id="projects">

      <div className="row">
        <div className="col-md-12">
          <h2>PROJECTS</h2>
        </div>
        <div className="col-md-3" href="">
          <a href="https://amandagxagxa.github.io/DiceGame/">
            <div className="project">
              <img src={dicegame} className="image" alt="" />
              <div className="overlay">
                <div className="text">
                  Allows to players to play dice game.{" "}
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <div className="project">
            <a href="https://amandagxagxa.github.io/SearchBar/">
              <img src={searchbar} className="image" alt="" />
            </a>
            <div className="overlay">
              <div className="text">
                Alows the viewer to see seach for keywrds and get all the name
                with that key word.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <a href="https://amandagxagxa.github.io/UnitConverter/">
            <div className="project">
              <img src={unitconverter} className="image" alt="" />
              <div className="overlay">
                <div className="text">
                  This app converts the units. You can add any number on the{" "}
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-3">
          <a href="https://chimerical-cobbler-fb4ab4.netlify.app/">
            <div className="project">
              <img src={bashvalues} className="image" alt="" />
              <div className="overlay">
                <div className="text">
                 This allows Bash employees to be able to read and understand bash value and principle. They can take quiz after to see if thwy really meet the principles.{" "}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Wrapper >
  );
}

export default Projects;
