import React, { useState } from "react";
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import styled from "styled-components";
import "./About.css";
import mypic from "./mishy.png";

const Wrapper = styled.section`
  min-height: 100vh;
  background-color: #ffafcc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;
const Text = styled.div`
  margin: auto;
  text-align: left;
  margin-top:3em;
`;

function About() {
  // const [contact, setContact] = useState({
  //   firstName: "Amanda",
  //   lastName: "Gxagxa",
  // });
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    if (showProfile === false) {
      setShowProfile(true);
    } else {
      setShowProfile(false);
    }
  };

  let url = "https://www.babesgotbytes.org/";

  return (
    <Wrapper className="container">
      <div className="row">
        <div className="col-md-6 me">
          <Text>
            <h1 className="name">
              Hi, I am Amanda Gxagxa
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
                {!showProfile ? "read more >>" : "<<read less"}
              </button>
            </p>
            {showProfile && (
              <div id="more">
                <p>
                  {" "}
                  I am co-founder of an NPO,{" "}
                  <a href={url} target="_blank" rel="noreferrer">
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
          </Text>
        </div>
        <div className="col-md-6 ab">
          <img src={mypic} alt="Logo" />
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
