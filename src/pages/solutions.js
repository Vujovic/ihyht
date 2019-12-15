import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { TabSection } from './products'

import Illustration from '../components/svg/solutionsMain'
import FeatureIcon1 from '../components/solutions/svg/1'
import FeatureIcon2 from '../components/solutions/svg/2'
import FeatureIcon3 from '../components/solutions/svg/3'
import FeatureIcon4 from '../components/solutions/svg/4'

export default () => (
  <Layout>
    <SEO title="解决方案" />
    <Solutions>
      <div className="hero">
        <div className="text">
          <h1>解决方案</h1>
          <p>
            依托云计算、大数据技术，建设一个“横向到边、纵向到底”的水平融合业务系统,
            打造一站式财税大数据智能解决方案
          </p>
        </div>
        <Illustration />
      </div>
      <TabSection>
        <Tabs>
          <TabList>
            <Tab>财税行业</Tab>
            <Tab>公共部门</Tab>
            <Tab>业务上云</Tab>
            <Tab>数据上云</Tab>
          </TabList>

          <TabPanel>
            <div className="intro">
              <h2>智慧财税大数据解决方案</h2>
              <p>
                基于大数据、人工智能和云计算等新一代信息技术，建设以企业社会信用代码为主线，展示所有涉企信息，实现财政信息共享与服务，财政资金闭环管理综合服务平台。
                为数字政府、大型企业和金融机构提供高效、智能的财税服务
              </p>
            </div>
            <div className="features">
              <h3>智慧财税、数据赋能</h3>
              <ul>
                <li>
                  <FeatureIcon1 />
                  <p>人工智能技术</p>
                </li>
                <li>
                  <FeatureIcon2 />
                  <p>财税数据共享服务</p>
                </li>
                <li>
                  <FeatureIcon3 />
                  <p>专业财税咨询团队</p>
                </li>
                <li>
                  <FeatureIcon4 />
                  <p>全量企业基础数据</p>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="intro">
              <h2>经济大脑解决方案</h2>
              <p>
                经济大脑充分融合了财税研究、数据建模、大数据技术以及各类经济数据源，具备全景洞察、企业画像、招商雷达、风控雷达和企业服务平台功能，全面帮助区域政府有效管理企业和决策
              </p>
            </div>
            <div className="features">
              <h3>经济大脑、决策智能</h3>
              <ul>
                <li>
                  <FeatureIcon1 />
                  <p>全产业链分析</p>
                </li>
                <li>
                  <FeatureIcon2 />
                  <p>业务场景建模</p>
                </li>
                <li>
                  <FeatureIcon3 />
                  <p>关键风险预警</p>
                </li>
                <li>
                  <FeatureIcon4 />
                  <p>政策执行透明</p>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="intro">
              <h2>业务上云智能解决方案</h2>
              <p>
                依托云计算、大数据技术，建设一个“横向到边、纵向到底”的水平融合业务系统,实现IT基础设施深度整合，数据资源共享，打造现有财税应用的平滑迁云和财税业务应用创新的新生态
              </p>
            </div>
            <div className="features">
              <h3>业务上云、业务智能</h3>
              <ul>
                <li>
                  <FeatureIcon1 />
                  <p>垂直业务梳理</p>
                </li>
                <li>
                  <FeatureIcon2 />
                  <p>水平业务融合</p>
                </li>
                <li>
                  <FeatureIcon3 />
                  <p>系统无缝对接</p>
                </li>
                <li>
                  <FeatureIcon4 />
                  <p>业务访问便利</p>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="intro">
              <h2>数据上云智能解决方案</h2>
              <p>
                依托大数据云平台，提供数据“采-存-通-用-治”供应链的全过程管理，实现数据上云，为财税用户提供全流程的数据洞察，提升数据上云的服务质量
              </p>
            </div>
            <div className="features">
              <h3>数据上云、数据智能</h3>
              <ul>
                <li>
                  <FeatureIcon1 />
                  <p>数据采集多样</p>
                </li>
                <li>
                  <FeatureIcon2 />
                  <p>海量数据存储</p>
                </li>
                <li>
                  <FeatureIcon3 />
                  <p>业务通用性</p>
                </li>
                <li>
                  <FeatureIcon4 />
                  <p>应用广泛性</p>
                </li>
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      </TabSection>
    </Solutions>
  </Layout>
)

const Solutions = styled.section`
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
  .react-tabs {
    .intro {
      h2 {
        margin-top: 150px;
        margin-bottom: 25px;
        text-align: center;
      }
      p {
        margin: 0 auto;
        max-width: 600px;
      }
    }
    .features {
      h3 {
        font-size: 24px;
        margin: 150px 0 75px 0;
        text-align: center;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style-type: none;
        font-size: 18px;
        li {
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 50px;
          p {
            margin-top: 25px;
          }
          svg {
            width: 120px;
          }
        }
      }
    }
    .application {
      h2 {
        margin-top: 150px;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 1366px) {
    .hero {
      svg {
        max-height: 350px;
      }
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
  }
`
