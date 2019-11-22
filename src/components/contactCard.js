import React from "react"
import styled from "styled-components"

import ContactIcon from "./svg/contact"

export default () => (
  <ContactCard>
    <h2>Our Information</h2>
    <p className="contact email">
      <ContactIcon /> hyhtoffw@ihyht.com
    </p>
    <p className="contact phone">
      <ContactIcon /> +86 188 1111 1111
    </p>
    <p className="contact">WORK IN PROGRESS</p>
  </ContactCard>
)

const ContactCard = styled.div`
  background-color: #2e83e6;
  color: #fff;
  max-height: 40vh;
  padding: 20px 30px;
  transform: translateX(150px);
  .contact {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;
    svg {
      fill: #fff;
      margin-right: 15px;
      width: 30px;
    }
  }
`
