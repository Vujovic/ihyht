import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"

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
        <h1>财税大数据资产管理与运营服务提供商</h1>
        <h2>
          探索财税大数据奥妙，为政府决策、企业服务、金融风控提供数据服务和科技赋能
        </h2>
        <div className="button">
          <button onClick={() => scrollTo("#introduction")}>
            <svg
              width="86"
              height="45"
              viewBox="0 0 86 45"
              fill="#2E83E6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.6546 43.7158C41.5564 45.4281 44.444 45.4281 46.3458 43.7158L84.2797 9.56138C86.3319 7.71367 86.4977 4.55219 84.6499 2.50001V2.50001C82.8022 0.447834 79.6408 0.28208 77.5886 2.12979L46.3457 30.2598C44.444 31.972 41.5564 31.972 39.6546 30.2598L8.41131 2.12975C6.35913 0.28205 3.19764 0.447823 1.34995 2.50001V2.50001C-0.497751 4.5522 -0.331981 7.71368 1.72021 9.56138L39.6546 43.7158Z"
              />
            </svg>
          </button>
        </div>
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
      font-size: 58px;
      opacity: 0;
      text-align: center;
    }
    h2 {
      animation: 1s forwards heroText;
      opacity: 0;
      font-size: 22px;
      padding: 40px 0 80px 0;
      text-align: center;
    }
    .button {
      background-color: #fff;
      border-radius: 50%;
      height: 20px;
      width: 20px;
      padding: 10px;
      position: absolute;
      bottom: 20px;
      button {
        background: none;
        border: none;
        cursor: pointer;
        display: inline-flex;
      }
      svg {
        animation: 1s chevron infinite;
        margin-top: 2px;
        height: 20px;
        width: 20px;
        transition: all 0.3s;
        :hover {
          animation: none;
          opacity: 0.8;
          transform: translateY(3px);
        }
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

  @keyframes chevron {
    50% {
      transform: translateY(3px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
