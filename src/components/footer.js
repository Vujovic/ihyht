import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Logo from "./svg/logo"

export default () => (
  <Footer>
    <h1>内容</h1>
    <ul>
      <Link to="/">
        <li>主页</li>
      </Link>
      <Link to="/products">
        <li>产品中心</li>
      </Link>
      <Link to="/solutions">
        <li>解决方案</li>
      </Link>
      <Link to="/services">
        <li>服务支持</li>
      </Link>
      <Link to="/success-cases">
        <li>成功案例</li>
      </Link>
      <Link to="/about-us">
        <li>关于我们</li>
      </Link>
    </ul>
    <div className="copyright">
      <p>
        Company 北京华云慧通科技有限公司 © All Rights Reserved 2019
        京ICP备17004022 | 京公网安备 11010502033779
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
  h1 {
    margin-left: 250px;
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin-top: 75px;
    padding: 0 200px;
    a {
      color: #fff;
      font-size: 18px;
      :hover {
        opacity: 0.7;
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
