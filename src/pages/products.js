import React from "react"
import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SmartApplication from "../components/products/smartApplication"
import Insight from "../components/products/insight"
import DataCollection from "../components/products/dataCollection"
import DataGovernance from "../components/products/dataGovernance"
import DataCenter from "../components/products/dataCenter"
import IntelligentAlgorithm from "../components/products/intelligentAlgorithm"

import Illustration from "../components/svg/productsMain"

export default () => (
  <Layout>
    <SEO title="产品中心" />
    <Hero>
      <Illustration />
      <h1>产品中心</h1>
      <p>构建面向政府、大型企业和金融科技三维一体的财税大数据产品体系</p>
    </Hero>
    <TabSection>
      <Tabs>
        <TabList>
          <Tab>智能应用</Tab>
          <Tab>智能分析</Tab>
          <Tab>数据采集</Tab>
          <Tab>数据治理</Tab>
          <Tab>数据中台</Tab>
          <Tab>智能算法</Tab>
        </TabList>

        <TabPanel>
          <SmartApplication />
        </TabPanel>
        <TabPanel>
          <Insight />
        </TabPanel>
        <TabPanel>
          <DataCollection />
        </TabPanel>
        <TabPanel>
          <DataGovernance />
        </TabPanel>
        <TabPanel>
          <DataCenter />
        </TabPanel>
        <TabPanel>
          <IntelligentAlgorithm />
        </TabPanel>
      </Tabs>
    </TabSection>
  </Layout>
)

const Hero = styled.section`
  padding-top: 150px;
  text-align: center;
  svg {
    margin-bottom: 75px;
    max-width: 800px;
  }
  h1 {
    font-size: 36px;
  }
  p {
    margin-top: 25px;
  }
`

export const TabSection = styled.section`
  padding-top: 150px;
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
