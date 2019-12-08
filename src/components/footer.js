import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Logo from "./svg/logo"

export default () => (
  <Footer>
    <div className="company">
      <div className="certificates">
        <p>Certificates</p>
      </div>
      <div className="contact-info">
        <p>hyhtoffw@ihyht.com</p>
        <p>+86 188 1111 1111</p>
      </div>
      <div className="qr-codes">
        <p>Qr Codes</p>
      </div>
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
  background-image: linear-gradient(to top right, #2e83e6, #259ec3);
  color: #fff;
  margin-top: 75px;
  padding: 75px 0;
  .company {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .contact-info {
      p {
        margin: 10px 0;
        text-align: center;
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
`
