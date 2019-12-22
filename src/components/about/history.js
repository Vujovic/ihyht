import React from 'react'
import styled from 'styled-components'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import '../../styles/timeline.css'

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
        date="2018.12"
        icon={<Shangdong />}
      >
        <h1>中标山东省税务局大数据平台建设项目</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018.10"
        icon={<BigData />}
      >
        <h1>中标浙江省税务局大数据平台建设项目</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018.06"
        icon={<Algorithm />}
      >
        <h1>公司税务智能算法体系发布</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018.05"
        icon={<ProvinceTax />}
      >
        <h1>山东省税务局实名办税系统全省上线</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018.02"
        icon={<BigDataAlliance />}
      >
        <h1>全面推进广东省税务局税务大数据创新应用</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017.10"
        icon={<Transport />}
      >
        <h1>中标交通部ETC电子发票云平台建设项目</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017.05"
        icon={<DataAlliance />}
      >
        <h1>加入中关村大数据产业联盟</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017.01"
        icon={<Tax />}
      >
        <h1>中标广东省国家税务局大数据平台建设项目</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016.12"
        icon={<Cloud />}
      >
        <h1>中标广东省国家税务局电子税务局云平台建设项目</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016.09"
        icon={<Partnership />}
      >
        <h1>公司与阿里云建立战略合作伙伴关系</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016.08"
        icon={<FoundedIcon />}
      >
        <h1>公司成立</h1>
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
