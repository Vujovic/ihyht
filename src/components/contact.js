import React from 'react'
import styled from 'styled-components'

import ContactCard from './contactCard'
import ContactForm from './contactForm'

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
  overflow-y: auto;
  @media screen and (max-width: 1366px) {
    height: 100vh;
  }
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
  }
`
