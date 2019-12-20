import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import SuccessCaseMain from '../components/svg/successCaseMain'

export default () => {
  const data = useStaticQuery(graphql`
    query GetSuccessCases {
      allStrapiSuccesscases {
        edges {
          node {
            id
            title
            post
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
          <div className="text">
            <h1>成功案例</h1>
            <p>数字经济下领先财税大数据资产管理和运营服务提供商成功故事</p>
          </div>
          <SuccessCaseMain />
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
                <p>{edge.node.post}</p>
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
    align-items: center;
    background-color: #eee;
    display: flex;
    justify-content: space-around;
    padding-top: 150px;
    svg {
      margin-bottom: 75px;
      max-width: 800px;
      width: 40%;
    }
    h1 {
      font-size: 36px;
      text-align: center;
    }
    p {
      margin-top: 25px;
      max-width: 500px;
    }
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 75px auto 0 auto;
    width: 90%;
    .card {
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px;
      max-width: 25%;
      padding: 35px 20px;
      text-align: center;
      .description {
        margin-left: 20px;
      }
      > * {
        margin: 20px 0;
      }
      h3 {
        margin-bottom: 30px;
      }
      p {
        margin-bottom: 30px;
        text-align: justify;
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

  @media screen and (max-width: 1366px) {
    .cards {
      .card {
        max-width: 40%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .hero {
      flex-direction: column-reverse;
      p {
        margin: 25px;
      }
      svg {
        margin-bottom: 30px;
        width: 75%;
      }
    }

    .cards {
      .card {
        margin: 25px;
        padding: 0;
        width: 85%;
        .gatsby-image-wrapper {
          margin: 0 !important;
          width: 100% !important;
        }
        p {
          padding: 0 20px;
        }
        a {
          padding: 10px 30px;
        }
      }
    }
  }

  @media screen and (max-width: 1366px) {
    .cards {
      .card {
        max-width: 95%;
      }
    }
  }
`
