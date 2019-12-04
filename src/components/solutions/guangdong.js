import React from "react"
import styled from "styled-components"

export default () => {
  return (
    <SolutionsTemplate>
      <div className="solution">
        <div className="text">
          <h2>广东省国家税务局电子税务局私有云平台</h2>
          <p>
            广东省电子税务局主要由阿里云中间件产品支撑，在中间件基础上构建国地税共建应用，地方局特色应用等系统模块。电子税务局与核心征管系统通过ESB进行桥接，将以前需要依赖核心征管系统而实现的特色功能转接到内部电子税务局系统中，有效的降低核心征管系统的负载。在外网通过中间件的CSB产品，将系统的能力开放给第三方应用平台，实现在统一管理的基础上进行个性化开发和运维，实现税务系统灵活性和多样性。
          </p>
        </div>
      </div>
      <div className="solution">
        <div className="text">
          <h2>广东省国家税务局大数据基础平台</h2>
          <p>
            广东省国家税务局大数据基础平台是按照税务总局推进“互联网+税务”行动的战略部署，充分运用了“互联网+”思维，依托“互联网+”创新力量，引入了成熟的技术和解决方案，加强基础设施资源的共享和应用，规范税务应用环境，集中整合内外部数据资源，统一规范数据应用范畴，为各需求主体提供更为全面的决策和参考支持，构建了开发协作的税务数据生态环境。
            该项目的建设促进了IT资源的利用效率，提升结构化及非结构化数据的分析处理能力，提高税收业务应用服务能力和性能，建立起税务数据的资产化管理模式，提升数据治理和数据分析能力。
          </p>
        </div>
      </div>
    </SolutionsTemplate>
  )
}

export const SolutionsTemplate = styled.section`
  padding: 150px 0;
  .solution {
    h2 {
      text-align: center;
      margin-bottom: 75px;
    }
    p {
      margin: 0 25px 75px 25px;
    }
  }
  @media screen and (min-width: 1280px) {
    .text {
      margin: 0 auto;
      width: 40%;
      p {
        margin: 0 auto 75px auto;
        text-align: justify;
      }
    }
  }
`
