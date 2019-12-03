import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import AddressIcon from "./svg/address"

export default () => {
  const data = useStaticQuery(graphql`
    query getBranches {
      branches: file(relativePath: { eq: "branches.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <Branches>
        <h2>子分机构</h2>
        <div className="hero">
          <div className="branches">
            <div className="branch">
              <AddressIcon />
              <div className="text">
                <h3>北京华云慧通科技有限公司(总部)</h3>
                <p>北京市朝阳区望京利泽中一路博雅国际中心A座16层</p>
                <p>010-64776380</p>
              </div>
            </div>
            <div className="branch">
              <AddressIcon />
              <div className="text">
                <h3>北京华云慧通科技有限公司山东分公司</h3>
                <p>济南市高新区经十东路7000号汉峪金谷A2-4号楼18层</p>
                <p>0531-55515358</p>
              </div>
            </div>
            <div className="branch">
              <AddressIcon />
              <div className="text">
                <h3>北京华云慧通科技有限公司广州分公司</h3>
                <p>广州市黄埔大道西33号三新大厦14H室</p>
                <p>020-89281243</p>
              </div>
            </div>
            <div className="branch">
              <AddressIcon />
              <div className="text">
                <h3>北京华云慧通科技有限公司武汉分公司</h3>
                <p>武汉市洪山区欢乐大道1号德成国贸中心B座1406室</p>
                <p>027-87828198</p>
              </div>
            </div>
            <div className="branch">
              <AddressIcon />
              <div className="text">
                <h3>北京华云慧通科技有限公司杭州分公司</h3>
                <p>浙江省杭州市西湖区中田大厦11F-D</p>
                <p>0571-86726509</p>
              </div>
            </div>
          </div>
          <Img draggable="false" fluid={data.branches.childImageSharp.fluid} />
        </div>
      </Branches>
      <Form>
        <h2>联系我们</h2>
      </Form>
    </>
  )
}

const Branches = styled.section`
  padding: 75px 0;
  text-align: center;
  > h2 {
    font-size: 36px;
    margin-bottom: 75px;
  }
  .hero {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    .branches {
      .branch {
        display: flex;
        margin: 30px 0;
        text-align: left;
        svg {
          margin-right: 10px;
          width: 40px;
        }
      }
    }
    .gatsby-image-wrapper {
      width: 50%;
    }
  }
`

const Form = styled.section`
  margin: 75px 0;
  > h2 {
    font-size: 36px;
    margin-bottom: 75px;
    text-align: center;
  }
`
