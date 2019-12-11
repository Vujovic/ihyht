import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import ContactQR from "./contactQR"
import Logo from "./svg/logo"

export default () => (
  <Footer>
    <div className="company">
      <div className="certificates">
        <p>Certificates</p>
      </div>
      <div className="contact-info">
        <h3>联系方式</h3>
        <p>hyhtoffw@ihyht.com</p>
        <p>+86 188 1111 1111</p>
      </div>
      <ContactQR />
    </div>
    <div className="copyright">
      <p>
        Copyright © 2016 - {new Date().getFullYear()} 北京华云慧通科技有限公司
        All Rights Reserved | 京ICP备17004022 | 京公网安备 11010502033779
      </p>
      <Link to="/">
        <Logo />
      </Link>
    </div>
  </Footer>
)

const Footer = styled.footer`
  background-color: #12355e;
  color: #fff;
  margin-top: 75px;
  padding: 25px 0;
  .company {
    display: flex;
    align-items: center;
    justify-content: space-around;
    > * {
      width: 33.3%;
    }
    .contact-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      h3 {
        font-size: 36px;
        margin-bottom: 25px;
      }
      p {
        margin: 10px 0;
      }
    }
  }
  .copyright {
    border-top: 1px solid #ccc;
    margin: 75px auto 0 auto;
    padding-top: 25px;
    text-align: center;
    width: 75%;
    svg {
      margin-top: 25px;
      fill: #fff;
    }
  }
  @media screen and (max-width: 1024px) {
    .company {
      flex-direction: column;
      > * {
        width: 75%;
      }
      .contact-info {
        margin: 25px 0;
      }
    }
  }
`
