import React, { useState } from "react";
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import mypic from './mishy.png'
import './About.css'
import styled from "styled-components";

function About() {
  const [contact, setContact] = useState({
    firstName: "Amanda",
    lastName: "Gxagxa",
  });
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    if (showProfile === false) {
      setShowProfile(true)
    } else {
      setShowProfile(false)
    }
  }

  let url = "https://www.babesgotbytes.org/";

  const Wrapper = styled.section`
    min-height: 100vh;
    background-color: #ffafcc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
`


  return (
    <Wrapper className="container">
      <div className="row">
        <div className="col-md-6 me">
          <h1 className="name">
            Hi, I am {contact.firstName} {contact.lastName}
          </h1>
          <br />
          <p>
            I am originaly from Eastern Cape in South Africa and currently
            reside in Langa near Cape Town.
          </p>
          <p>
            I am a mother of two children who I adore. I am a resilient,
            dedicated, game changer. I love making an impact in the community
            and giving back.{" "}
            <button onClick={toggleProfile} id="link_more">
              {!showProfile ? 'read more >>' : '<<read less'}
            </button>
          </p>
          {showProfile && (
            <div id="more">
              <p>
                {" "}
                I am co-founder of an NPO,{" "}
                <a href={url} target="_blank">
                  Babes Got Bytes
                </a>
                , where we teach young girls how to code. Our aim is to raise
                awareness and close the gender gap in the tech industry. I am
                very interested in learning new things, and developing myself
                careerwise and businesswise.{" "}
              </p>
            </div>
          )}

          <br />

          <a href="#skills" className="btn btn-white">
            <span>view my skills</span>
          </a>
          <a href="#contacts" className="btn btn-white">
            <span>contact me</span>
          </a>
        </div>
        <div className="col-md-6 ab">
          <img src={mypic} alt="Logo" />
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
