import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Illustration from "../components/svg/solutionsMain"

export default () => (
  <Layout>
    <SEO title="解决方案" />
    <Solutions>
      <div className="hero">
        <Illustration />
        <h1>解决方案</h1>
        <p>
          依托云计算、大数据技术，建设一个“横向到边、纵向到底”的水平融合业务系统,
          打造一站式财税大数据智能解决方案
        </p>
      </div>
    </Solutions>
  </Layout>
)

const Solutions = styled.section`
  .hero {
    padding-top: 150px;
    text-align: center;
    svg {
      margin-bottom: 75px;
      max-height: 550px;
    }
    h1 {
      font-size: 36px;
    }
    p {
      margin-top: 25px;
    }
  }
`
