import React from 'react';
import styled from "styled-components";

import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';


const ContactFormContainer = styled.div`
  max-width: 800px;
  height: 400px
`

export default function ContactForm() {
  return (
    <>
      <ContactFormContainer className="mx-auto gradient-custom mt-5" >
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">Welcome</MDBTypography>
              <p className="white-text">You are 30 seconds away from compleating your order!</p>
            </div>
            <div className="text-center">
              <MDBBtn color="white" rounded className="back-button">Go back</MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: '#495057' }} >Delivery Details</MDBTypography>
                </div>

                <form className="mb-0">
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Names' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Email' type='email' />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='subject' type='text' />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='textarea' type='textarea' />
                    </MDBCol>
                  </MDBRow>

                  <div className="float-end">
                    <MDBBtn rounded style={{backgroundColor: '#0062CC'}}>Place order</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </ContactFormContainer>
    </>
  );
}