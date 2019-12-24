import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ServicesCard from '../components/servicesCard'
import { ServiceFeaturesCards } from '../templates/serviceFeaturesCard'

import Services3 from '../components/svg/services3'
import Support from '../components/svg/support'
import Delivery from '../components/svg/delivery'
import Management from '../components/svg/management'
import Check from '../components/svg/check'

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
      <SEO title="服务支持" />
      <Services>
        <ScrollAnimation offset={50} animateIn="fadeIn" animateOnce>
          <header className="standard">
            <div className="text">
              <h1>服务支持</h1>
              <p>
                全方位提供专业咨询规划、业务上云、数据治理、平台建设和智能应用服务，为客户数据赋能和决策提供支持
              </p>
            </div>
            <div className="image">
              <Img
                draggable={false}
                fluid={data.services.childImageSharp.fluid}
              />
            </div>
          </header>
        </ScrollAnimation>
        <ServiceFeaturesCards>
          <ScrollAnimation offset={50} animateIn="fadeInUp" animateOnce>
            <h2>咨询规划</h2>
          </ScrollAnimation>
          <div className="cards">
            <ScrollAnimation offset={50} animateIn="fadeInUp" animateOnce>
              <div className="card">
                <h3>上云咨询服务</h3>
                <ul>
                  <li>
                    <Check /> 云计算基础平台
                  </li>
                  <li>
                    <Check /> 大数据基础平台
                  </li>
                  <li>
                    <Check /> 业务上云咨询
                  </li>
                  <li>
                    <Check /> 数据上云咨询
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset={50}
              animateIn="fadeInUp"
              animateOnce
              delay={100}
            >
              <div className="card">
                <h3>数据治理规划</h3>
                <ul>
                  <li>
                    <Check /> 数据资产地图
                  </li>
                  <li>
                    <Check /> 数据资源目录
                  </li>
                  <li>
                    <Check /> 统一数据标准
                  </li>
                  <li>
                    <Check /> 自助化数据智能
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset={50}
              animateIn="fadeInUp"
              animateOnce
              delay={200}
            >
              <div className="card">
                <h3>智能算法咨询</h3>
                <ul>
                  <li>
                    <Check /> 基础算法
                  </li>
                  <li>
                    <Check /> 智能风控
                  </li>
                  <li>
                    <Check /> 智能征管
                  </li>
                  <li>
                    <Check /> 智能纳服
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              offset={50}
              animateIn="fadeInUp"
              animateOnce
              delay={300}
            >
              <div className="card">
                <h3>创新应用规划</h3>
                <ul>
                  <li>
                    <Check /> 12类创新应用
                  </li>
                  <li>
                    <Check /> 实名办税
                  </li>
                  <li>
                    <Check /> 综合治税
                  </li>
                  <li>
                    <Check /> 动态信用
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </ServiceFeaturesCards>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
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
        </ScrollAnimation>
        <div className="serviceSystem">
          <ScrollAnimation offset={50} animateIn="fadeInUp" animateOnce>
            <div className="text">
              <h2>服务支持体系</h2>
              <p>
                华云慧通以客户为中心，以专业、创新、主动、价值为服务理念，持续提升自身能力，建立了对服务的支持、交付、管理三大核心体系，为我们的客户带来有价值的服务。
              </p>
            </div>
          </ScrollAnimation>
          <div className="cards">
            <ScrollAnimation offset={50} animateIn="fadeInUp" animateOnce>
              <ServicesCard
                img={<Support />}
                title="服务支持体系"
                description="建立“服务台”，以事件、问题、变更、配置等知识库为基础，为业务、客户和用户提供365x7x24全年无休服务。"
              />
            </ScrollAnimation>
            <ScrollAnimation
              offset={50}
              animateIn="fadeInUp"
              animateOnce
              delay={100}
            >
              <ServicesCard
                img={<Delivery />}
                title="服务交付体系"
                description="全国“本地化”布署服务机构，实现服务矩阵化；建立集中统一的专家中心和一线、二线 服务队伍，实现服务层次化。"
              />
            </ScrollAnimation>
            <ScrollAnimation
              offset={50}
              animateIn="fadeInUp"
              animateOnce
              delay={200}
            >
              <ServicesCard
                img={<Management />}
                title="服务管理体系"
                description="从公司资质，技术能力，项目经验三个方面全力打造服务“金刚钻”，提升服务管理水平。"
              />
            </ScrollAnimation>
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
    font-size: 36px;
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
        margin: 25px auto 0 auto;
        max-width: 700px;
        text-align: center;
      }
    }
  }
  .cards {
    display: flex;
    justify-content: space-around;
    margin-top: 75px;
    .card {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
      border-radius: 20px;
      margin: 10px auto;
      padding: 20px 50px;
      li {
        min-width: 136px;
      }
    }
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
