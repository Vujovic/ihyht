import React from "react"
import styled from "styled-components"

import { ProductsSm } from "../../templates/productsSm"
import FeatureCard from "../../templates/featureCard"

import Illustration from "./svg/1"

import WebCrawler from "./svg/webCrawler"
import RealTimeData from "./svg/realTimeData"
import Computing from "./svg/computing"
import Processing from "./svg/processing"
import Tree from "./svg/productTree1"

const features = [
  {
    icon: <WebCrawler />,
    title: "智慧大屏",
    description:
      "面向管理决策者，提供一个集业务监控、指挥调度、管理决策为一体的全职能大屏中心。以大屏为渠道，将税务体系中税收、经济、户籍、征管、纳服、稽查、舆情等各类主题，以监控、评价、预警为导向，以提升全局管理与决策水平为目标，进行全方位的监控和高效率的指挥调度。",
  },
  {
    icon: <RealTimeData />,
    title: "税收看经济",
    description:
      "以税收数据为基础，以经济动向为视角，分析税收与经济间的关系，从税收来反推经济的运行动态情况。",
  },
  {
    icon: <Computing />,
    title: "增值税防虚开",
    description:
      "利用大数据算法，对增值税商品名称进行聚类分析，进项、销项、企业关联关系、企业画像能整体分析，对企业进行进出口权限类企业的增值税优惠情况、政效评估和增值税虚开风险预警。",
  },
  {
    icon: <Processing />,
    title: "实名办税",
    description:
      "实名办税是对纳税人的办税人员身份确认的制度。办税人员在办理涉税事项时提供有效个人身份证明，税务机关采集、比对、确认其身份信息后，办理涉税事项。",
  },
  {
    icon: <Processing />,
    title: "纳税人画像",
    description:
      "借助互联网大数据领域“画像”、“标签”等新思路、新技术，刻画纳税人基本信息、税收特征、经营行为、关联关系等多角度特征，形成有价值的纳税人画像，为税源管理、风险识别、纳税服务等提供管理决策的支撑。",
  },
  {
    icon: <Processing />,
    title: "关系云图",
    description:
      "分析与提取纳税人之间的各类关系，包括：产权投资关系、涉税关联关系、往来交易关系……，在关系库基础之上，通过可视化的方式进行关系展示、关系研发分析、以及针对风险因子进行关系传导的风险监控。",
  },
  {
    icon: <Processing />,
    title: "动态信用",
    description:
      "依托云计算、大数据技术平台，融合纳税人画像，机器学习等智能算法，结合第三方数据完成企业所得税的总体监控、全维度画像、多视角分析，建立企业评价体系，动态评估企业信用。",
  },
  {
    icon: <Processing />,
    title: "优惠评测",
    description:
      "以大数据、机器学习算法为核心，以画像、相关性分析为手段，构建纳税人减免标签库，从全局监控优惠减免的执行情况，对重要税种、政策进行年度预测分析、效应分析，对优惠的执行情况进行减免分析，动态识别纳税人的优惠享受风险，跟踪纳税人优惠享受情况，从而提升优惠评测及管理的智能化水平。",
  },
]

export default () => (
  <ProductsSm>
    <div className="description">
      <h2>智能应用</h2>
      <p>
        基于人工智能为基础的新一代应用,以财税大数据为引领的智能化技术与管理应用，快速产生精确结果，提高劳动率，提升智能服务水平
      </p>
    </div>
    <div className="main">
      <div className="text">
        <h3>产品介绍</h3>
        <p>
          面向管理决策者，数字经济，人员身份、评测和企业信用等方面，基于财税数据提供智能化应用.
          智能应用平台具有实用性，高集成性和动态实时预测，保障财税大数据业务全方面的应用智能化.
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
