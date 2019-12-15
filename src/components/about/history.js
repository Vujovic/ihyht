import React from 'react'
import styled from 'styled-components'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import FoundedIcon from './svg/1'
import Partnership from './svg/2'
import Cloud from './svg/3'
import Tax from './svg/4'
import DataAlliance from './svg/5'
import Transport from './svg/6'
import BigDataAlliance from './svg/7'
import ProvinceTax from './svg/8'
import Algorithm from './svg/9'
import BigData from './svg/10'
import Shangdong from './svg/11'

export default () => (
  <History>
    <h2>公司历史</h2>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016.08"
        icon={<FoundedIcon />}
      >
        <h1>公司成立</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016.09"
        icon={<Partnership />}
      >
        <h1>与阿里战略合作</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016.12"
        icon={<Cloud />}
      >
        <h1>广东国税电子税局云平台</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017.01"
        icon={<Tax />}
      >
        <h1>广东税务大数据平台</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017.05"
        icon={<DataAlliance />}
      >
        <h1>中关村大数据产业联盟</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017.10"
        icon={<Transport />}
      >
        <h1>交通委ETC电子发票云平台</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018.02"
        icon={<BigDataAlliance />}
      >
        <h1>广东税务大数据创新应用</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018.05"
        icon={<ProvinceTax />}
      >
        <h1>山东国税实名办税全省上线</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018.06"
        icon={<Algorithm />}
      >
        <h1>税务智能算法发布</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018.10"
        icon={<BigData />}
      >
        <h1>浙江税务 大数据</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018.12"
        icon={<Shangdong />}
      >
        <h1>山东税务大数据平台</h1>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </History>
)

const History = styled.section`
  h2 {
    margin: 75px 0;
  }
  .vertical-timeline {
    .vertical-timeline-element {
      .vertical-timeline-element-icon {
        width: 80px;
        height: 80px;
        svg {
          width: 50px;
          height: 50px;
          margin-left: -25px;
          margin-top: -25px;
        }
      }
    }
  }
  @media screen and (max-width: 1170px) {
    .vertical-timeline {
      .vertical-timeline-element {
        .vertical-timeline-element-content {
          margin-left: 90px;
        }
      }
    }
  }
`
