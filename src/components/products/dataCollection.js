import React from "react"

import { ProductsSm } from "../../templates/productsSm"
import FeatureCard from "../../templates/featureCard"

import Illustration from "./svg/3"

import WebCrawler from "./svg/webCrawler"
import RealTimeData from "./svg/realTimeData"
import Computing from "./svg/computing"
import Processing from "./svg/processing"

const features = [
  {
    icon: <WebCrawler />,
    title: "智能网络爬虫",
    description:
      "智能化的爬虫系统对于不同目标数据源进行实时，全面的数据爬取和全程监控",
  },
  {
    icon: <RealTimeData />,
    title: "实时采集",
    description: "综合运用数据采集技术、流计算，建立实时自动数据采集与处理系统",
  },
  {
    icon: <Computing />,
    title: "分布式计算",
    description: "最大程度的利用财务大数据平台计算资源对数据进行处理",
  },
  {
    icon: <Processing />,
    title: "数据交互处理",
    description: "实现不同数据格式，数据源和数据字典进行无缝的数据对接",
  },
]

export default () => (
  <ProductsSm>
    <div className="description">
      <h2>数据采集</h2>
      <p>
        多维度采集税务结构化数据、半结构化数据、非结构化数据及第三方涉税数据，进行数据清洗和加工，转化为有价值的数据
      </p>
    </div>
    <div className="main">
      <div className="text">
        <h3>产品介绍</h3>
        <p>
          将内部税务结构化数据、半结构化数据如日志、报文、json配置文件等及非结构化数据如图片、语音、影像等、第三方如海关、房管局、工商局等涉税数据，
          企业端数据如工商数据与互联网涉税数据如网店交易数据、财经数据进行融合，实现数据采集、清洗和监控的全流程处理。
          数据采集平台具备网络实时爬取、批量数据导入、数据交互、数据存储和外部系统实时对接等功能，根据不同财税业务场景进行数据自动匹配。
          平台的大规模分布式计算和大数据仓库，以及独特的财税查询引擎，能够满足用户对财税数据不同维度的数据采集需求。
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
