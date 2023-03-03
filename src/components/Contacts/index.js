import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Wrapper = styled.section`
  min-height: 100vh;
  background-color: #ffafcc;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

function Contacts() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [message, setMessage] = useState("");
  const [msgErr, setMsgErr] = useState(false);
  const [subject, setSubject] = useState("");
  const [subjectErr, setSujectErr] = useState(false);

  const form = useRef();

  function userHandler(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
    // console.warn(e.target.value)
  }

  function msgHandler(e) {
    setMessage(e.target.value);
    // console.warn(e.target.value)
  }
  function subjectHandler(e) {
    setSubject(e.target.value);
    // console.warn(e.target.value)
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
      setSujectErr(true);
    } else {
      setSujectErr(false);
    }

    // e.preventDefault();

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
      e.target.reset(e)
  }

  return (
    <Wrapper className="container">
      <div className="row">
        <div className="col-md-6">
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
        </div>
        <div className="col-md-6 form">
          <form
            name="contact"
            onSubmit={sendEmail}
            ref={form}
            method="post"
            className="form-control"
          >
            <div className="mb-3">
              <label htmlFor="names" className="form-label">
                Names
              </label>
              <input
                type="text"
                onChange={userHandler}
                value={name}
                className="form-control requiredField"
                name="name"
                id="names"
                placeholder="Names"
              />
              <br />
              {nameErr ? <span id="name-error">invalid name</span> : null}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={emailHandler}
                className="form-control requiredField"
                name="email"
                id="email"
                placeholder="name@example.com"
              />
              <br />
              {emailErr ? <span id="email-error">invalid email</span> : null}
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subect
              </label>
              <input
                type="subject"
                value={subject}
                onChange={subjectHandler}
                className="form-control requiredField"
                name="subject"
                id="subject"
              />
              <br />
              {subjectErr ? (
                <span id="invalid subject">Invalid subject</span>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control requiredField"
                value={message}
                onChange={msgHandler}
                name="message"
                id="message"
                rows="3"
              ></textarea>
              <br />

              {msgErr ? <span id="message-error">invalid message</span> : null}
            </div>
            <input
              className="btn btn-pink"
              id="btn-pink"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contacts;
