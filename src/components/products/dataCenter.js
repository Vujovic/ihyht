import React from "react"

import { ProductsSm } from "../../templates/productsSm"
import FeatureCard from "../../templates/featureCard"

import Illustration from "./svg/5"
// Icons
import WebCrawler from "./svg/webCrawler"
import RealTimeData from "./svg/realTimeData"
import Computing from "./svg/computing"
import Processing from "./svg/processing"

const features = [
  {
    icon: <WebCrawler />,
    description: "用全量数据来引导科学决策, 防止过失和偏差",
  },
  {
    icon: <RealTimeData />,
    description: "催生AI服务应用, 为AI提供全量数据, 支持数据创新和业务创新",
  },
  {
    icon: <Computing />,
    description: "赋能数据服务思维, 运营数据化, 智能化",
  },
  {
    icon: <Processing />,
    description: `盘点数据资源, 将所有数据资源进行完整呈现, 并通过元数据信息收集, 数据血缘探查, 数据权限申请授权等手段, 解决"有哪些数据可用", "到哪里可以找到数据"的难题, 提升数据资源的利用率`,
  },
  {
    icon: <WebCrawler />,
    description:
      "通过标准数据模型解决架构设计和数据开发的不一致性, 实现了模型分层和统一开发规范",
  },
  {
    icon: <WebCrawler />,
    description:
      "构建标签体系, 对各主题域进行标签赋能, 将其特征数字化, 为后续进行精准分析和用户画像提供必要条件",
  },
]

export default () => (
  <ProductsSm>
    <div className="description">
      <h2>数据中台</h2>
      <p>
        全方位的财税数据服务中台，致力于财税数据资产化、标准化、多样化和实时性，进而为财税智能服务应用提供基础中台支撑
      </p>
    </div>
    <div className="main">
      <div className="text">
        <h3>产品介绍</h3>
        <p>
          大数据技术，以阿里云、华为云、Hadoop生态圈产品为基础，集成并优化了对海量数据进行采集、计算、存储、加工的一系列大数据技术产品。
          几千个财税数据模型、上百个财税算法、上百个主题库、上万个财税标签、上亿个财税画像、数据管理等等。
          我们的主题库帮助财税人员全面理解财税行业的业务概念，标签库融合了我们在三个大省建设财税大数据的智慧结晶，数据管理平台能清晰地追溯数据、标签和应用服务的来龙去脉，安全管控各类数据。
        </p>
      </div>
      <Illustration />
    </div>
    <div className="features">
      <h3>产品功能</h3>
      <div className="cards">
        {features.map(card => (
          <FeatureCard icon={card.icon} description={card.description} />
        ))}
      </div>
    </div>
  </ProductsSm>
)
