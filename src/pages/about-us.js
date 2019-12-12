import React from "react"
import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "../components/about/about"
import Partners from "../components/about/partners"
import Contact from "../components/about/contactUs"
import Careers from "../components/about/careers"

import Illustration from "../components/svg/aboutUsMain"

export default () => (
  <Layout>
    <SEO title="关于我们" />
    <Hero>
      <div className="text">
        <h1>关于我们</h1>
        <p>财税大数据领先企业</p>
      </div>
      <Illustration />
    </Hero>
    <TabSection>
      <Tabs>
        <TabList>
          <Tab>企业简介</Tab>
          <Tab>Team</Tab>
          <Tab>合作伙伴</Tab>
          <Tab>联系我们</Tab>
          <Tab>职位信息</Tab>
        </TabList>

        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <h2>Team</h2>
        </TabPanel>
        <TabPanel>
          <Partners />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
        <TabPanel>
          <Careers />
        </TabPanel>
      </Tabs>
    </TabSection>
  </Layout>
)

const Hero = styled.section`
  align-items: center;
  background-color: #eee;
  display: flex;
  justify-content: space-around;
  padding-top: 150px;
  svg {
    margin-bottom: 75px;
    max-width: 600px;
    width: 40%;
  }
  h1 {
    font-size: 36px;
    text-align: center;
  }
`

const TabSection = styled.section`
  padding-top: 150px;
  .react-tabs {
  }
  .react-tabs__tab-list {
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    flex-wrap: wrap;
    margin: 0 auto;
    text-align: center;
    width: 50%;
  }
  .react-tabs__tab {
    border: none;
    margin: 10px;
  }
  .react-tabs__tab--selected {
    color: #3379e0;
    border-bottom: 1px solid #3379e0;
  }
  @media screen and (max-width: 768px) {
    .react-tabs__tab-list {
      width: 100%;
    }
  }
`
