import React from "react"
import styled from "styled-components"

import ContactQR from "./contactQR"

import ContactIcon from "./svg/contact"
import PhoneIcon from "./svg/phone"

export default () => (
  <ContactCard>
    <h2>Our Information</h2>
    <p className="contact email">
      <ContactIcon /> hyhtoffw@ihyht.com
    </p>
    <p className="contact phone">
      <PhoneIcon /> +86 188 1111 1111
    </p>
    <ContactQR />
  </ContactCard>
)

const ContactCard = styled.div`
  animation: 1s slideUp;
  background-color: #2e83e6;
  color: #fff;
  padding: 20px 30px;
  transform: translateX(100px);
  .contact {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 45px;
    svg {
      fill: #fff;
      margin-right: 15px;
      width: 25px;
    }
  }
  .phone {
    svg {
      margin-left: 3px;
      width: 19px;
    }
  }
  @media screen and (max-width: 1280px) {
    animation: none;
    transform: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @keyframes slideUp {
    0% {
      transform: translate(100px, 50px);
    }
    100% {
      transform: translate(100px, 0);
    }
  }
`
