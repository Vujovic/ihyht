import React from 'react'
import styled from 'styled-components'

import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import History from './history'

import Illustration from '../svg/about'

export default () => (
  <About>
    <h2>企业简介</h2>

    <ScrollAnimation animateIn="fadeInUp" className="info" animateOnce>
      <div className="text">
        <p>
          北京华云慧通科技有限公司（以下简称：“华云慧通”）于2016年8月在北京注册成立，公司运营总部设立于北京，并已在广州、武汉、济南、杭州等地设立了分子公司，其中武汉为公司研发中心所在地。华云慧通现有员工100多人，并汇聚了大批的财税行业专家、大数据人工智能领域精英和政务领域资深商务人才。公司2019年营业收入将突破1亿元人民币。
        </p>
        <p>
          华云慧通是国内领先的专注于云计算、大数据、人工智能、区块链应用的新型高科技企业，以咨询规划、业务上云、数据中台、数据治理、智能应用五大核心能力，致力于为政府和财税机关提供云计算、大数据、数据中台、智能应用等整体解决方案，并利用财税大数据为金融机构和企业实现科技赋能。
        </p>
        <p>
          立了紧密战略合作伙伴关系，在财税领域深研云平台、大数据平台、数据中台、智能算法建设，通过近三年的扎实耕耘，已经成为中国税务总局认可的税务大数据TOP1品牌。2019年9月，华云慧通已与上海国家会计学院建立战略合作伙伴关系，共同致力于纳税服务领域新政策指标的探索与研究；2019年11月，华云慧通已与中央财经大学建立全面战略合作伙伴关系，并力争在国家税务总局大数据风险管理局和国家财政部信息中心的业务指导下共建中央财经大学“财税大数据实验室”。适逢数字政府科技治国之大好形势，华云慧通将提速发展，从税务走向财政、政府，积极求变，探索利用财税大数据为金融、大企业实现科技赋能。
        </p>
      </div>
      <Illustration />
    </ScrollAnimation>
    <History />
  </About>
)

const About = styled.section`
  padding: 75px 0;
  text-align: center;
  > h2 {
    font-size: 36px;
    margin-bottom: 75px;
  }
  .info {
    display: flex;
    .text {
      padding: 0 0 0 10%;
      width: 40%;
      text-align: justify;
      p {
        margin: 20px;
        max-width: 500px;
      }
    }
    svg {
      min-width: 45%;
      padding: 0 2.5%;
    }
  }
  @media screen and (max-width: 1280px) {
    .info {
      flex-direction: column-reverse;
      .text {
        padding: 0;
        width: 100%;
      }
    }
  }
`
