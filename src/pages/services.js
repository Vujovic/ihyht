import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesCard from "../components/servicesCard"

import Services3 from "../components/svg/services3"
import Support from "../components/svg/support"
import Delivery from "../components/svg/delivery"
import Management from "../components/svg/management"

export default () => {
  const data = useStaticQuery(graphql`
    query getImage {
      services: file(relativePath: { eq: "services-main.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="services" />
      <Services>
        <header className="standard">
          <div className="text">
            <h1>服务支持</h1>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="image">
            <Img
              draggable={false}
              fluid={data.services.childImageSharp.fluid}
            />
          </div>
        </header>
        <div className="serviceSystem">
          <div className="text">
            <h2>服务支持体系</h2>
            <p>
              华云慧通以客户为中心，以专业、创新、主动、价值为服务理念，持续提升自身能力，建立了对服务的支持、交付、管理三大核心体系，为我们的客户带来有价值的服务。
            </p>
          </div>
          <div className="cards">
            <ServicesCard
              img={<Support />}
              title="服务支持体系"
              description="建立“服务台”，以事件、问题、变更、配置等知识库为基础，为业务、客户和用户提供365x7x24全年无休服务。"
            />
            <ServicesCard
              img={<Delivery />}
              title="服务交付体系"
              description="全国“本地化”布署服务机构，实现服务矩阵化；建立集中统一的专家中心和一线、二线 服务队伍，实现服务层次化。"
            />
            <ServicesCard
              img={<Management />}
              title="服务管理体系"
              description="从公司资质，技术能力，项目经验三个方面全力打造服务“金刚钻”，提升服务管理水平。"
            />
          </div>
        </div>
        <div className="standard serviceStandards">
          <div className="text">
            <h2>服务标准</h2>
            <p>
              华云慧通严格遵循由信息技术服务标准工作组组织研究制定ITSS（信息技术服务标准），围绕IT服务的核心要素（PPTR）：人员、过程、技术、资源和生命周期（PIOIS）：规划设计、部署实施、服务运营、持续改进、监督管理，充分体现质量管理原理和过程改进方法的精髓，确保实现标准化的IT服务、可信赖的IT服务、安全的IT服务。
            </p>
          </div>
          <div className="image">
            <Services3 />
          </div>
        </div>
      </Services>
    </Layout>
  )
}

const Services = styled.section`
  h1,
  h2 {
    color: #434343;
    font-size: 48px;
    text-align: center;
  }
  p {
    margin-top: 20px;
    text-align: justify;
  }
  .standard {
    align-items: center;
    background-color: #eee;
    display: flex;
    justify-content: space-around;
    padding-top: 150px;
    .text {
      p {
        max-width: 300px;
      }
    }
    .image {
      width: 40%;
    }
  }
  .serviceSystem {
    padding: 75px 0;
    .text {
      p {
        color: #555;
        margin: 0 auto;
        max-width: 700px;
        text-align: center;
      }
    }
  }
  .cards {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
  }
  @media screen and (max-width: 1280px) {
    .cards {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1024px) {
    .standard {
      flex-direction: column-reverse;
      .text {
        p {
          margin-bottom: 30px;
        }
      }
      .image {
        margin-bottom: 30px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .standard {
      .image {
        width: 75%;
      }
    }
  }
`
