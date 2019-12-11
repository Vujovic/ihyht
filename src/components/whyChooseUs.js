import React from "react"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import ChooseUsSvg from "../components/svg/chooseUsSvg"
import Check from "../components/svg/check"

export default () => (
  <WhyChooseUs>
    <ScrollAnimation offset={50} animateIn="fadeInUp" animateOnce>
      <h2 className="title">为什么选择华云慧通</h2>
    </ScrollAnimation>
    <div className="section-content">
      <ScrollAnimation offset={50} animateIn="fadeInLeft" animateOnce>
        <ChooseUsSvg />
      </ScrollAnimation>
      <div className="reasons">
        <ul>
          <ScrollAnimation offset={50} animateIn="fadeInRight" animateOnce>
            <li>
              <Check /> 卓越的市场开拓能力
            </li>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            animateIn="fadeInRight"
            animateOnce
            delay={50}
          >
            <li>
              <Check /> 独特数据共享机制
            </li>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            animateIn="fadeInRight"
            animateOnce
            delay={100}
          >
            <li>
              <Check /> 深厚的业务、技术积累
            </li>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            animateIn="fadeInRight"
            animateOnce
            delay={150}
          >
            <li>
              <Check /> 科学的股权治理
            </li>
          </ScrollAnimation>
          <ScrollAnimation
            offset={50}
            animateIn="fadeInRight"
            animateOnce
            delay={200}
          >
            <li>
              <Check /> 超强的战略生态合作体系
            </li>
          </ScrollAnimation>
        </ul>
      </div>
    </div>
  </WhyChooseUs>
)

const WhyChooseUs = styled.section`
  padding: 75px 0;
  text-align: center;
  .title {
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
      justify-content: center;
      align-items: center;
      ul {
        li {
          font-size: 16px;
          margin: 0 10px 20px 10px;
          padding: 20px;
          svg {
            margin-bottom: 0;
            height: 18px;
          }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    svg {
      margin-bottom: 20px;
      max-height: 350px;
    }
  }
`
