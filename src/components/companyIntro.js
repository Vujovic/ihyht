import React from "react"
import styled from "styled-components"

import ConsultingPlanning from "./svg/consultingPlanning"
import CloudSvg from "./svg/cloudSvg"
import DataBox from "./svg/dataBox"
import DataGov from "./svg/dataGov"
import SmartApp from "./svg/smartApp"

export default () => (
  <Introduction>
    <h2>专注于财税大数据一站式服务</h2>
    <div className="cards">
      <div className="card">
        <ConsultingPlanning />
        <h3>咨询规划</h3>
      </div>
      <div className="card">
        <CloudSvg />
        <h3>业务上云</h3>
      </div>
      <div className="card">
        <DataBox />
        <h3>数据中台</h3>
      </div>
      <div className="card">
        <DataGov />
        <h3>数据治理</h3>
      </div>
      <div className="card">
        <SmartApp />
        <h3>智能应用</h3>
      </div>
    </div>
  </Introduction>
)

const Introduction = styled.section`
  background-color: #fff;
  padding: 75px 0;
  position: relative;
  text-align: center;
  z-index: 20;
  > h2 {
    font-size: 36px;
    margin-bottom: 75px;
  }
  .cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 70%;
    .card {
      font-size: 24px;
      margin: 10px;
      h2 {
        font-weight: 400;
      }
      svg {
        height: 120px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .cards {
      flex-direction: column;
    }
  }
`
