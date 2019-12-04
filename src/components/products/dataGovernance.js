import React from "react"

import { ProductsSm } from "../../templates/productsSm"
import FeatureCard from "../../templates/featureCard"

import Illustration from "./svg/4"

import WebCrawler from "./svg/webCrawler"
import RealTimeData from "./svg/realTimeData"
import Computing from "./svg/computing"
import Processing from "./svg/processing"

const features = [
  {
    icon: <WebCrawler />,
    title: "资产与服务",
    description:
      "数据计量, 交换与共享, 信息资源目录, 数据地图, 数据发布中心, 主体关系中心, 感知微服务中心",
  },
  {
    icon: <RealTimeData />,
    title: "标准管理",
    description: "数据元标准, 代码集标准, 指标标准, 维度标准, 数据归集标准",
  },
  {
    icon: <Computing />,
    title: "流程管控",
    description: "应用版本管控, 源端变更协同, 源端池化服务",
  },
  {
    icon: <Processing />,
    title: "数据归集",
    description: "主体标定识别, 主体属性圈选, 主体间关系定义, 问题数据打标",
  },
  {
    icon: <Processing />,
    title: "数据质量",
    description: "需求管理, 质量监控, 问题管理, 大数据智能诊疗",
  },
  {
    icon: <Processing />,
    title: "数据安全",
    description: "数据分类分级, 数据安全控制, 数据安全审计, 数据脱敏",
  },
]

export default () => (
  <ProductsSm>
    <div className="description">
      <h2>数据治理</h2>
      <p>
        通过数据口径规范和元数据管理，改善数据质量和创新数据服务，满足各业务单元使用数据的统一性、标准化、创新性
      </p>
    </div>
    <div className="main">
      <div className="text">
        <h3>产品介绍</h3>
        <p>
          基于微服务架构、以及前端展示框架，来设计、实现一个通用的即配即用、动态产生数据集成脚本、数据集成任务的数据集成平台，
          通过数据口径规范和元数据管理，改善数据质量和创新数据服务，满足各业务单元使用数据的统一性、标准化、创新性。
          数据治理不但提升了数据的价值，同时会根据不同的用户特点，在不同的时间节点上和不同的业务场景下应用不同的方法模型，采取不同的财税数据处理和行动
        </p>
      </div>
      <Illustration />
    </div>
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
