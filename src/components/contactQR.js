import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import WeChat from "./svg/wechat"
import WeiBo from "./svg/weibo"

export default () => {
  const data = useStaticQuery(graphql`
    query getCodes {
      wechat: file(relativePath: { eq: "wechat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      weibo: file(relativePath: { eq: "weibo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <ContactQR>
      <div className="code weibo">
        <Img draggable={false} fluid={data.weibo.childImageSharp.fluid} />
        <p>
          官方微博 <WeiBo />
        </p>
      </div>
      <div className="code wechat">
        <Img draggable={false} fluid={data.wechat.childImageSharp.fluid} />
        <p>
          官方微信 <WeChat />
        </p>
      </div>
    </ContactQR>
  )
}

const ContactQR = styled.div`
  display: flex;

  .code {
    margin-top: 60px;
    min-width: 140px;
    padding: 0 20px;
    p {
      background-color: #f0f0f0;
      color: #434343;
      display: flex;
      justify-content: space-around;
      font-size: 18px;
      padding: 5px;
      svg {
        width: 25px;
      }
    }
  }
`
