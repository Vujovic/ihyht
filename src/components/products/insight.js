import React from "react"
import styled from "styled-components"

import { ProductsSm } from "../../templates/productsSm"
import FeatureCard from "../../templates/featureCard"

import Illustration from "./svg/2"
import Tree from "./svg/productTree2"
import WebCrawler from "./svg/webCrawler"
import RealTimeData from "./svg/realTimeData"
import Computing from "./svg/computing"
import Processing from "./svg/processing"

const features = [
  {
    icon: <WebCrawler />,
    title: "增值税专项分析",
    description:
      "以云计算、大数据为技术平台，以纳税人的涉税业务环节为主线，自动感知涉税行为特征，以机器学习算法、专家经验、人工分析特征相结合为手段，从纳税人的第一次登记到锁定应对的期间，构建高频、迭代的防虚扫描体系，将事后风控转向事前预测，将数据转成智慧，提升防虚的主动性、准确率，形成一个感知、预测、应对、反馈、沉淀的工作闭环，不断提升平台的防虚能力。",
  },
  {
    icon: <RealTimeData />,
    title: "票流分析",
    description:
      "以纳税人发票数据为基础，从宏观角度分析发票与经济之间的关系，从中观角度分析某一个行业、纳税人群体的发票上下游特征，从微观角度分析一个纳税人的进销、上下游、节点追溯等信息，深度挖掘票流的数据价值。",
  },
  {
    icon: <Computing />,
    title: "稽查专项分析",
    description:
      "通过稽查专项分析实现：对纳税人多维度分级分类，更易于随机抽查名单管理；智能识别虚开纳税人，可视化研判团伙关系，提升选案准确度；全面勾画执法人员全息画像，准确匹配与选派检查执法人员；违法企业、案件归集管理，全程跟踪与管理户、案、档、罚、反馈等；全面监控与掌握全局稽查业务运行情况；与税务云盘打通，为“云上稽查”打基础。",
  },
  {
    icon: <Processing />,
    title: "大企业专项分析",
    description:
      "通过对企业360度大企业画像，结合大企业税务数据，三方涉税信息和互联网数据，为大企业税收风控和经济分析预测提供个性化财税大数据服务",
  },
  {
    icon: <Processing />,
    title: "移动分析中心",
    description:
      "让各级领导、业务处室用户在移动手机端能够随时、随地监控到其岗位对应的视窗，可以分析业务的基本规律，以及查询其关心的各项涉税信息，从而利用互联网+思维更加有效的促进管理决策的深入运行。",
  },
  {
    icon: <Processing />,
    title: "图表监控分析平台",
    description:
      "基于本公司的微服务架构、实现基于配置、快速发布、快速响应、一体化管理的图表监控分析平台，能够根据该功能对应的配置信息，来动态渲染出一个运行时刻的图表监控分析功能。",
  },
  {
    icon: <Processing />,
    title: "统计分析平台",
    description:
      "通过该功能能够通过可视化的功能，实现多维分析立方体的构建，提供维度表、事实表的配置，维度、指标的配置功能，并且支持维度的层级、成员、钻取，然后需要按照立方体的标准生成立方体，满足报表分析工具的数据分析与展示需求",
  },
]

export default () => (
  <ProductsSm>
    <div className="description">
      <h2>智能分析</h2>
      <p>
        智能财税大数据挖掘、业务分析系统，根据不同的财税场景，通过智能可视化场景界面，实现一站式智能数据分析服务
      </p>
    </div>
    <div className="main">
      <div className="text">
        <h3>产品介绍</h3>
        <p>
          基于财税不同场景和不同数据维度进行全方位的智能分析服务，满足用户不同的分析服务需求
          智能分析平台整合互联网数据和三方数据，从多元化数据进行分析，提供智化的预测分析服务
        </p>
      </div>
      <Illustration />
    </div>
    <ProductTree>
      <Tree />
    </ProductTree>
    <div className="features">
      <h3>产品功能</h3>
      <div className="cards">
        {features.map(card => (
          <FeatureCard
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  </ProductsSm>
)

const ProductTree = styled.div`
  height: 500px;
  margin: 75px 0;
  svg {
    height: 100%;
  }
  @media screen and (max-width: 1024px) {
    height: 250px;
  }
  @media screen and (max-width: 500px) {
    svg {
      margin: 25px 0;
      height: 25vh;
    }
  }
`
