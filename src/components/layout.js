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
    font-family: 'Noto Serif SC', serif;
    margin: 0;
    padding: 0;
    outline: none;
  }

  .hidden {
    right: -100% !important;
  }

  html,
  body {
    color: #434343;
    overflow-x: hidden;
    position: relative;
  }

  body, * {
    ::-webkit-scrollbar {
      height: 3px;
      width: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #aaa;
    }
  }

  a {
    color: #3379e0;
    text-decoration: none;
  }
`

export default Layout
