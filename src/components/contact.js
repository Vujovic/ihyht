import React from "react"
import styled from "styled-components"

import ContactCard from "./contactCard"
import ContactForm from "./contactForm"

export default () => (
  <Contact>
    <ContactCard />
    <ContactForm />
  </Contact>
)

const Contact = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
