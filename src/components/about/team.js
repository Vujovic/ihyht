import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Check from '../svg/check'

export default () => {
  const data = useStaticQuery(graphql`
    query GetTeamImages {
      cto: file(relativePath: { eq: "team/cto.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      cso: file(relativePath: { eq: "team/cso.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      cmo: file(relativePath: { eq: "team/cmo.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sales: file(relativePath: { eq: "team/sales.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      pdl: file(relativePath: { eq: "team/pdl.png" }) {
        childImageSharp {
          fluid(maxWidth: 512, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Team>
      <h2>管理团队</h2>
      <div className="team-cards">
        <div className="card">
          <div className="image">
            <Img fluid={data.cto.childImageSharp.fluid} />
          </div>
          <h2>杨正洪</h2>
          <h3>首席科学家兼CTO</h3>
          <p>
            <Check />
            曾任美国NASDAQ上市企业CTO，北京大型国企CIO、国内大型互联网公司CTO等职
          </p>
          <p>
            <Check /> 2013年海外引进人才，国内知名的大数据和AI专家
          </p>
          <p>
            <Check /> 参与了多项国家级大数据相关标准的制定工作
          </p>
        </div>
        <div className="card">
          <div className="image">
            <Img fluid={data.cso.childImageSharp.fluid} />
          </div>
          <h2>胡玮</h2>
          <h3>CSO</h3>
          <p>
            <Check />
            华中科技大学通讯工程工学学士
          </p>
          <p>
            <Check /> 曾任某国有信用管理企业总经理和某行业大数据企业CSO
          </p>
          <p>
            <Check /> 主要负责公司的战略规划设计和金融科技事业板块
          </p>
        </div>
        <div className="card">
          <div className="image">
            <Img fluid={data.cmo.childImageSharp.fluid} />
          </div>
          <h2>刘冬冬</h2>
          <h3>CMO</h3>
          <p>
            <Check />
            曾先后服务于统一、联想、百度、D&B、华为、海航等世界知名企业的市场战略部门，资深的市场战略专家，企业数字化转型专家
          </p>
          <p>
            <Check />
            首席数据官联盟创始人，提任博雅大数据研究院副主任委员等众多大数据联盟专家委员
          </p>
        </div>
        <div className="card">
          <div className="image">
            <Img fluid={data.sales.childImageSharp.fluid} />
          </div>
          <h2>礼群</h2>
          <h3>财税事业部销售负责人</h3>
          <p>
            <Check /> 20年IT营销管理经验
          </p>
          <p>
            <Check /> 曾任日冲商业（中国）有
            限公司销售部总经理、中国软件税务本部市场总经理，
            北京世纪畅想公司副总经理等职务
          </p>
        </div>
        <div className="card">
          <div className="image">
            <Img fluid={data.pdl.childImageSharp.fluid} />
          </div>
          <h2>田明涛</h2>
          <h3>项目交付负责人</h3>
          <p>
            <Check /> 20年IT行业经验
          </p>
          <p>
            <Check />
            曾任中创等上市公司架构师、技术总监、高级总监。精通大数据、微服务、区块链；熟悉税务、政府等行业，
            主导众多大型政务应用工程的建设工作
          </p>
        </div>
      </div>
    </Team>
  )
}

const Team = styled.section`
  padding: 75px 0;
  text-align: center;
  > h2 {
    font-size: 36px;
    margin-bottom: 75px;
  }
  .team-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .card {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
      margin: 25px 0;
      padding: 25px;
      width: 250px;
      .image {
        background-color: #eee;
        border-radius: 50%;
        margin: 10px auto;
        height: 150px;
        width: 150px;
      }
      h3 {
        margin: 25px 0;
      }
      p {
        margin: 10px 0;
        text-align: justify;
        svg {
          width: 18px;
        }
      }
    }
  }
  @media screen and (max-width: 1366px) {
    .team-cards {
      .card {
        width: 350px;
      }
    }
  }
`
