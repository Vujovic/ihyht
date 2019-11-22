import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ParticleBg from "./particleBg"
import bgImage from "../images/earthBG.jpg"

export default () => {
  const data = useStaticQuery(graphql`
    query getImages {
      earth: file(relativePath: { eq: "earth.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Hero>
      <ParticleBg />
      <div className="earthImage">
        <Img
          className="earth"
          draggable={false}
          fluid={data.earth.childImageSharp.fluid}
        />
      </div>
      <div className="text">
        <h2>数据智能解决方案提供商</h2>
        <h1>云服务+大数据</h1>
        <button>学到更多</button>
      </div>
    </Hero>
  )
}

const Hero = styled.section`
  background: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
  width: 100%;
  z-index: 0;

  .earthImage {
    position: absolute;
    left: 20%;
    width: 60%;
  }

  .earth {
    animation: 14s ease-in-out infinite planet;
    transition: all 4s ease-in 0.5s;
  }

  .text {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 100;
    width: 100%;
    height: 100%;
    h1 {
      animation: 1s forwards heroText;
      animation-delay: 0.2s;
      font-size: 72px;
      opacity: 0;
      padding: 80px 0;
    }
    h2 {
      animation: 1s forwards heroText;
      opacity: 0;
      font-size: var(--font-size__large);
    }
    button {
      animation: 1s forwards heroText;
      animation-delay: 0.4s;
      background-color: #fff;
      border: none;
      border-radius: 50px;
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
      color: #3379e0;
      cursor: pointer;
      font-size: 24px;
      margin: 0 auto;
      opacity: 0;
      padding: 10px 0;
      transition: all 0.3s;
      width: 250px;
      :hover {
        background-color: #3379e0;
        color: #fff;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .earthImage {
      top: 10%;
      left: -10%;
      overflow: hidden;
      width: 120%;
    }
    .text {
      h1 {
        font-size: var(--font-size__large);
      }
      h2 {
        font-size: var(--font-size__small);
      }
      button {
        font-size: 14px;
        width: 150px;
      }
    }
  }

  @keyframes planet {
    50% {
      transform: translateY(60px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes heroText {
    0% {
      opacity: 0;
      transform: translateY(-25px);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
