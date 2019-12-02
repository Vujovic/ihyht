import React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  const data = useStaticQuery(graphql`
    query getNewsPage {
      allStrapiNews(sort: { order: DESC, fields: [date] }) {
        edges {
          node {
            id
            title
            publisher
            date(formatString: "YYYY-M-D")
            link
            thumbnail {
              childImageSharp {
                fixed(quality: 90, width: 100, height: 100) {
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
      <SEO title="新闻中心" />
      <NewsCenter>
        <h2>新闻中心</h2>
        <div className="content">
          <div className="news">
            {data.allStrapiNews.edges.map(edge => (
              <div className="post" key={edge.node.id}>
                <div className="description">
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.date}</p>
                  <Link to={edge.node.link}>Read more</Link>
                </div>
                <Img
                  fixed={edge.node.thumbnail.childImageSharp.fixed}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </NewsCenter>
    </Layout>
  )
}

const NewsCenter = styled.section`
  padding: 150px 0;
  text-align: center;
  > h2 {
    font-size: 36px;
  }
  > a {
    font-size: 18px;
    padding: 5px 10px;
    transition: all 0.3s;
    :hover {
      opacity: 0.7;
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 75px;
    text-align: justify;
    svg {
      border-right: 1px solid #ccc;
      margin-left: 5%;
      padding-right: 10%;
      width: 35%;
    }
    .news {
      width: 50%;
      .post {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
        padding: 20px 40px;
        .description > * {
          margin: 10px 0;
        }
        a {
          :hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .content {
      flex-direction: column;
      svg {
        border: none;
        width: 55%;
      }
      .news {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .content {
      .news {
        .post {
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-evenly;
          img {
            margin-top: 20px;
          }
        }
      }
    }
  }
`
