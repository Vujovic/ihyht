import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { TabSection } from './products'

import Guangdong from '../components/successcases/guangdong'
import Shangdong from '../components/successcases/shangdong'
import Zhejiang from '../components/successcases/zhejiang'

import SuccessCaseMain from '../components/svg/successCaseMain'

export default () => (
  <Layout>
    <SEO title="成功案例" />
    <SuccessCases>
      <div className="hero">
        <div className="text">
          <h1>成功案例</h1>
          <p>数字经济下领先财税大数据资产管理和运营服务提供商成功故事</p>
        </div>
        <SuccessCaseMain />
      </div>
      <TabSection>
        <Tabs>
          <ScrollAnimation offset={50} animateIn="fadeInUp" animateOnce>
            <TabList>
              <Tab>广东省</Tab>
              <Tab>山东省</Tab>
              <Tab>浙江省</Tab>
            </TabList>
          </ScrollAnimation>

          <TabPanel>
            <Guangdong />
          </TabPanel>
          <TabPanel>
            <Shangdong />
          </TabPanel>
          <TabPanel>
            <Zhejiang />
          </TabPanel>
        </Tabs>
      </TabSection>
    </SuccessCases>
  </Layout>
)

const SuccessCases = styled.section`
  .hero {
    align-items: center;
    background-color: #eee;
    display: flex;
    justify-content: space-around;
    padding-top: 150px;
    svg {
      margin-bottom: 75px;
      max-width: 800px;
      width: 40%;
    }
    h1 {
      font-size: 36px;
      text-align: center;
    }
    p {
      margin-top: 25px;
      max-width: 500px;
    }
  }

  @media screen and (max-width: 1024px) {
    .hero {
      flex-direction: column-reverse;
      p {
        margin: 25px;
      }
      svg {
        margin-bottom: 30px;
        width: 75%;
      }
    }
`
