import React from "react"
import styled from "styled-components"

import ContactCard from "./contactCard"
import ContactForm from "./contactForm"

export default () => (
  <Contact>
    <ContactForm />
    <ContactCard />
  </Contact>
)

const Contact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  height: 100%;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
