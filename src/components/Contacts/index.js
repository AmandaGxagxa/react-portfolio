import React, { useState } from "react";
// import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import Form from 'react-bootstrap/Form';
import styled from "styled-components";


function Contacts() {
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [mssage, setMessage] = useState("");
    const [msgErr, setMsgErr] = useState(false);

      function userHandler(e){
        let item = e.target.value

        if(item.length < 4){
            setNameErr(true)
        } else {
            setNameErr(false)
        }
        setName(item)
            // console.warn(e.target.value)
      }
   
      function emailHandler(e){
        let item = e.target.value

        if(item.length < 4){
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
        setEmail(item)
            // console.warn(e.target.value)
      }
   
      function msgHandler(e){
        let item = e.target.value

        if(item.length < 4){
            setMsgErr(true)
        } else {
            setMsgErr(false)
        }
        setMessage(item)
            // console.warn(e.target.value)
      }
   
   function formHandler(e){
    e.preventDefault();

   }
      


    const Wrapper = styled.section`
    min-height: 100vh;
    background-color: #ffafcc;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
`

  return (



    <Wrapper classNameName="container">

      
            <div className="row">
                <div className="col-md-6">
                    <h2>CONTACT ME</h2>
                    <span className="line"></span>
                    <br />
                    <span>Want to connect with me or collaborate?</span>
                    <br /><br /><br />
                    <div className="col-xs-12">
                        <a href="https://www.linkedin.com/in/amanda-gxagxa-5826a0128/"><img src="img/linkedin.png"
                                alt=" " /></a>
                        <a href="https://github.com/AmandaGxagxa"><img src="img/github.png" alt="" /></a>
                        <a href="https://twitter.com/amanda_gxagxa"><img src="img/twitter.png" alt="" /></a>

                    </div>
                </div>
                <div className="col-md-6 form">
                    <form name="contact" onSubmit={formHandler} action="https://formspree.io/f/xnqrdrge" method="post" >
                        <div className="mb-3">
                            <label htmlFor="names" className="form-label">Names</label>
                            <input type="text" onChange={userHandler} className="form-control requiredField" name="name" id="names"
                                placeholder="Names" /><br />
                            { nameErr?<span id="name-error">invalid name</span>:null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" onChange={emailHandler} className="form-control requiredField" name="email" id="email"
                                placeholder="name@example.com" />
                            <br />
                            { emailErr? <span id="email-error">invalid email</span>:null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control requiredField" onChange={msgHandler} name="message" id="message" rows="3"></textarea>
                            <br />
                            
                            {msgErr?<span id="message-error">invalid message</span>: null}
                        </div>
                        <input className="btn btn-pink" id="btn-pink" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </Wrapper>

  );
}

export default Contacts;
