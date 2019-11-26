import React from "react"
import styled from "styled-components"

import ChooseUsSvg from "../components/svg/chooseUsSvg"
import Check from "../components/svg/check"

export default () => (
  <WhyChooseUs>
    <h2>为什么选择华云慧通</h2>
    <div className="section-content">
      <ChooseUsSvg />
      <div className="reasons">
        <ul>
          <li>
            <Check /> 卓越的市场开拓能力
          </li>
          <li>
            <Check /> 卓越的市场开拓能力
          </li>
          <li>
            <Check /> 卓越的市场开拓能力
          </li>
          <li>
            <Check /> 卓越的市场开拓能力
          </li>
          <li>
            <Check /> 卓越的市场开拓能力
          </li>
        </ul>
      </div>
    </div>
  </WhyChooseUs>
)

const WhyChooseUs = styled.section`
  padding: 75px 0;
  text-align: center;
  > h2 {
    font-size: 36px;
    margin-bottom: 75px;
  }
  .section-content {
    display: flex;
    justify-content: space-evenly;
    svg {
      height: 550px;
    }
    ul {
      li {
        border-radius: 50px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        font-size: 24px;
        margin-bottom: 50px;
        padding: 20px 95px;
        svg {
          height: 24px;
          margin-right: 25px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .section-content {
      flex-direction: column;
      ul {
        li {
          font-size: 16px;
          margin: 0 10px 20px 10px;
          padding: 20px 70px;
        }
      }
    }
  }
`
