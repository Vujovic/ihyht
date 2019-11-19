import React from "react"
import { createGlobalStyle } from "styled-components"

import Nav from "./nav"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Nav />
    <main>{children}</main>
  </>
)

const GlobalStyle = createGlobalStyle`
  :root {
    --font-size__large: 36px;
    --font-size__medium: 24px;
    --font-size__small: 18px;
  }

  body, * {
    font-family: 'Noto Sans SC', sans-serif;
    margin: 0;
    padding: 0;
    outline: none;
  }

  .hidden {
    right: -100% !important;
  }

  html,
  body {
    overflow-x: hidden;
    position: relative;
  }
`

export default Layout
