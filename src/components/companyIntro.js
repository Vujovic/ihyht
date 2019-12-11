import React from "react"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import ConsultingPlanning from "./svg/consultingPlanning"
import CloudSvg from "./svg/cloudSvg"
import DataBox from "./svg/dataBox"
import DataGov from "./svg/dataGov"
import SmartApp from "./svg/smartApp"

import CheckIcon from "./svg/check"

export default () => (
  <Introduction id="introduction">
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <h2 className="title">专注于财税大数据一站式服务</h2>
    </ScrollAnimation>
    <div className="cards">
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="card">
          <ConsultingPlanning />
          <h3>咨询规划</h3>
          <ul>
            <li>
              <CheckIcon />
              上云咨询
            </li>
            <li>
              <CheckIcon />
              数据治理
            </li>
            <li>
              <CheckIcon />
              智能算法
            </li>
            <li>
              <CheckIcon />
              创新应用
            </li>
          </ul>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce delay={100}>
        <div className="card">
          <CloudSvg />
          <h3>业务上云</h3>
          <ul>
            <li>
              <CheckIcon />
              降低成本
            </li>
            <li>
              <CheckIcon />
              提高效率
            </li>
            <li>
              <CheckIcon />
              便利性
            </li>
            <li>
              <CheckIcon />
              数据共享
            </li>
          </ul>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce delay={200}>
        <div className="card">
          <DataBox />
          <h3>数据中台</h3>
          <ul>
            <li>
              <CheckIcon />
              数据资产化
            </li>
            <li>
              <CheckIcon />
              标准化
            </li>
            <li>
              <CheckIcon />
              多样化
            </li>
            <li>
              <CheckIcon />
              实时性
            </li>
          </ul>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce delay={300}>
        <div className="card">
          <DataGov />
          <h3>数据治理</h3>
          <ul>
            <li>
              <CheckIcon />
              统一性
            </li>
            <li>
              <CheckIcon />
              自动化
            </li>
            <li>
              <CheckIcon />
              创新性
            </li>
            <li>
              <CheckIcon />
              数据计量
            </li>
          </ul>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce delay={400}>
        <div className="card">
          <SmartApp />
          <h3>智能应用</h3>
          <ul>
            <li>
              <CheckIcon />
              精准预测
            </li>
            <li>
              <CheckIcon />
              深度学习
            </li>
            <li>
              <CheckIcon />
              数据智能
            </li>
            <li>
              <CheckIcon />
              数据驱动
            </li>
          </ul>
        </div>
      </ScrollAnimation>
    </div>
  </Introduction>
)

const Introduction = styled.section`
  background-color: #fff;
  padding: 75px 0;
  position: relative;
  text-align: center;
  z-index: 20;
  .title {
    font-size: 36px;
    margin-bottom: 75px;
  }
  .cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 90%;
    .card {
      border-radius: 20px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
      font-size: 24px;
      margin: 10px auto;
      padding: 40px 50px;
      h3 {
        font-weight: 400;
        margin-top: 25px;
      }
      svg {
        height: 120px;
      }
      ul {
        list-style: none;
        margin-top: 25px;
        li {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 18px;
          margin: 10px 0;
          svg {
            margin-right: 15px;
            height: 14px;
            width: 14px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .cards {
      flex-direction: column;
    }
  }
`
