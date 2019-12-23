import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Illustration from '../components/svg/newsMain'

export default () => {
  const data = useStaticQuery(graphql`
    query getNewsPage {
      allStrapiNews(sort: { order: DESC, fields: [Date] }) {
        edges {
          node {
            id
            Title
            Publisher
            Date(formatString: "YYYY-M-D")
            Link
            Thumbnail {
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
        <div className="hero">
          <h1>新闻中心</h1>
          <Illustration />
        </div>
        <div className="content">
          <div className="news">
            {data.allStrapiNews.edges.map(edge => (
              <div className="post" key={edge.node.id}>
                <div className="description">
                  <h3>{edge.node.Title}</h3>
                  <p>{edge.node.Date}</p>
                  <Link to={edge.node.Link}>Read more</Link>
                </div>
                <Img
                  fixed={edge.node.Thumbnail.childImageSharp.fixed}
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
  .hero {
    align-items: center;
    background-color: #eee;
    display: flex;
    justify-content: space-around;
    padding-top: 150px;
    svg {
      margin-bottom: 75px;
      max-width: 500px;
      width: 40%;
    }
    h1 {
      font-size: 36px;
      text-align: center;
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
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 80%;
      .post {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px;
        padding: 20px 40px;
        .description > * {
          margin: 10px 0;
        }
        a {
          :hover {
            opacity: 0.7;
          }
        }
        img {
          border-radius: 50%;
        }
        h3 {
          padding-right: 5px;
        }
        :nth-child(-n + 3) {
          flex-direction: column-reverse;
          text-align: center;
        }
        :nth-child(n + 4) {
          grid-column-start: 1;
          grid-column-end: 4;
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
