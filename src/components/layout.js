import React from "react"
import { createGlobalStyle } from "styled-components"

import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Nav />
    <main>{children}</main>
    <Footer />
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
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #2E83E6;
    }
  }

  a {
    color: #3379e0;
    text-decoration: none;
  }

  .react-tabs__tab-list {
    font-size: 22px;
    justify-content: space-evenly !important;
    width: 75% !important;
  }
`

export default Layout
