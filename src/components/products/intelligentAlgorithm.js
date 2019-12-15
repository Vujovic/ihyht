import React from 'react'

import { ProductsSm } from '../../templates/productsSm'
import FeatureCard from '../../templates/featureCard'

import Illustration from './svg/6'
// Icons
import WebCrawler from './svg/webCrawler'
import RealTimeData from './svg/realTimeData'
import Computing from './svg/computing'
import Processing from './svg/processing'

const features = [
  {
    icon: <WebCrawler />,
    title: '基础算法',
    description:
      '基础文本分析套件, 相似度量, 地址名称类, 企业纳税人归集, 文本信息抽取, 语义分析',
  },
  {
    icon: <RealTimeData />,
    title: '智能风控',
    description: '虚开增值税发票智能识别, 进销相似企业识别, 异常团伙企业发现',
  },
  {
    icon: <Computing />,
    title: '智能征管',
    description: '非正常户事前预测, 企业信用评估',
  },
  {
    icon: <Processing />,
    title: '智能纳服',
    description: '税务问答社区, 纳服能力评估',
  },
]

export default () => (
  <ProductsSm>
    <div className="description">
      <h2>智能算法</h2>
      <p>
        采用强大的人工智能算法，结合各类财税数据,为解决智能征管、风控和业务预测提供算法保障
      </p>
    </div>
    <div className="main">
      <div className="text">
        <h3>产品介绍</h3>
        <p>
          充分应用人工智能算法，人工智能神经网络技术和群集智能技术，结合人工智能基础算法,为财税不同场景业务提供智能风控、智能征管和智能纳服保障
          人工智能算法可以高效的应用于虚开增值税发票（变票）企业识别、相似企业的智能发现、异常团伙企业发现、非正常户预测模型和宏观税收预测
        </p>
      </div>
      <Illustration />
    </div>
    <div className="features">
      <h3>产品功能</h3>
      <div className="cards">
        {features.map(card => (
          <FeatureCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  </ProductsSm>
)
