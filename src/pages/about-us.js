import React from "react"
import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "../components/about/about"
import History from "../components/about/history"
import Partners from "../components/about/partners"

export default () => (
  <Layout>
    <SEO title="About us" />
    <TabSection>
      <Tabs>
        <TabList>
          <Tab>企业简介</Tab>
          <Tab>History</Tab>
          <Tab>Team</Tab>
          <Tab>合作伙伴</Tab>
          <Tab>Contact Us</Tab>
          <Tab>Careers</Tab>
        </TabList>

        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <History />
        </TabPanel>
        <TabPanel>
          <h2>Team</h2>
        </TabPanel>
        <TabPanel>
          <Partners />
        </TabPanel>
        <TabPanel>
          <h2>Contact Us</h2>
        </TabPanel>
        <TabPanel>
          <h2>Careers</h2>
        </TabPanel>
      </Tabs>
    </TabSection>
  </Layout>
)

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
