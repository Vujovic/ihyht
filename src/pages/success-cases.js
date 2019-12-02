import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SuccessCaseMain from "../components/svg/successCaseMain"

export default () => {
  const data = useStaticQuery(graphql`
    query GetSuccessCases {
      allStrapiSuccesscases {
        edges {
          node {
            id
            link
            title
            Excerpt
            image {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="成功案例" />
      <SuccessCases>
        <div className="hero">
          <SuccessCaseMain />
          <h1>成功案例</h1>
          <p>数字经济下领先财税大数据资产管理和运营服务提供商成功故事</p>
        </div>
        <div className="cards">
          {data.allStrapiSuccesscases.edges.map(edge => (
            <div className="card" key={edge.node.id}>
              <Img
                fixed={edge.node.image.childImageSharp.fixed}
                draggable={false}
              />
              <div className="description">
                <h3>{edge.node.title}</h3>
                <p>{edge.node.Excerpt}</p>
                <Link to={edge.node.link}>Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </SuccessCases>
    </Layout>
  )
}

const SuccessCases = styled.section`
  .hero {
    padding-top: 150px;
    text-align: center;
    svg {
      margin-bottom: 75px;
      max-height: 550px;
    }
    h1 {
      font-size: 36px;
    }
    p {
      margin-top: 25px;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 75px;
    .card {
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 35px 20px;
      text-align: center;
      > * {
        margin: 20px 0;
      }
      h3 {
        margin-bottom: 30px;
      }
      p {
        margin-bottom: 30px;
        max-width: 500px;
      }
      a {
        background-color: #3379e0;
        border-radius: 100px;
        color: #fff;
        padding: 10px 100px;
        :hover {
          background-color: #174f90;
        }
      }
    }
  }
`
