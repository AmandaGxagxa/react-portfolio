import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  background-color: #ffafcc;
`;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: left;
// `;
// const FormWrap = styled.div`
// max-width:100%
// `

function Contacts() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [message, setMessage] = useState("");
  const [msgErr, setMsgErr] = useState(false);
  const [subject, setSubject] = useState("");
  const [subjectErr, setSubjectErr] = useState(false);

  const form = useRef();

  function userHandler(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function msgHandler(e) {
    setMessage(e.target.value);
  }
  function subjectHandler(e) {
    setSubject(e.target.value);
  }

  function sendEmail(e) {
    e.preventDefault();

    if (name.length < 4) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }

    if (email.length < 4) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    if (message.length < 4) {
      setMsgErr(true);
    } else {
      setMsgErr(false);
    }

    if (subject.length < 4) {
      setSubjectErr(true);
    } else {
      setSubjectErr(false);
    }

    emailjs
      .sendForm(
        "service_ewxeyhm",
        "template_7yjkak8",
        form.current,
        "DeemCVrPOlwKeTS5r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(e);
  }

  return (
    <>
      <Wrapper id="contacts">
        <Container>
        <Row >
          <Col className="col-md-6">
            <h2>CONTACT ME</h2>
            <span className="line"></span>
            <br />
            <span>Want to connect with me or collaborate?</span>
            <br />
            <br />
            <br />
            <div className="col-xs-12">
              <a href="https://www.linkedin.com/in/amanda-gxagxa-5826a0128/">
                <img src="img/linkedin.png" alt=" " />
              </a>
              <a href="https://github.com/AmandaGxagxa">
                <img src="img/github.png" alt="" />
              </a>
              <a href="https://twitter.com/amanda_gxagxa">
                <img src="img/twitter.png" alt="" />
              </a>
            </div>
          </Col>
          <Col className="col-md-6 ">
           
            <Form name="contact" onSubmit={sendEmail} ref={form} method="post">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Jess Pro"
                  onChange={userHandler}
                  value={name}
                  name="name"
                  id="names"
                />
                {nameErr ? <span id="name-error">invalid name</span> : null}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={emailHandler}
                  className="form-control requiredField"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                />
                {emailErr ? <span id="email-error">invalid email</span> : null}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subect</Form.Label>
                <Form.Control
                  type="text"
                  value={subject}
                  onChange={subjectHandler}
                  className="form-control requiredField"
                  name="subject"
                  id="subject"
                />
                {subjectErr ? (
                  <span id="invalid subject">Invalid subject</span>
                ) : null}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="form-control requiredField"
                  value={message}
                  onChange={msgHandler}
                  name="message"
                  id="message"
                />
                {msgErr ? (
                  <span id="message-error">invalid message</span>
                ) : null}
              </Form.Group>
              <input
                className="btn btn-pink"
                id="btn-pink"
                type="submit"
                value="Submit"
              />
            </Form>
          </Col>
        </Row>
        </Container>
      </Wrapper>
    </>
  );
}

export default Contacts;
