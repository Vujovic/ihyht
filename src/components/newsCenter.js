import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import Illustration from './svg/readingNews'
import NewsIcon from './svg/newsIcon'

export default () => {
  const data = useStaticQuery(graphql`
    query getNews {
      allStrapiNews(limit: 4, sort: { order: DESC, fields: [date] }) {
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
    <NewsCenter>
      <ScrollAnimation offset={50} animateIn="fadeInUp" animateOnce>
        <h2 className="title">新闻中心</h2>
        <Link to="/news">查看全部</Link>
      </ScrollAnimation>
      <div className="content">
        <ScrollAnimation offset={50} animateIn="fadeInLeft" animateOnce>
          <Illustration />
        </ScrollAnimation>
        <div className="news">
          {data.allStrapiNews.edges.map(edge => (
            <div className="post" key={edge.node.id}>
              <ScrollAnimation
                offset={50}
                animateIn="fadeInRight"
                animateOnce
                delay={edge.node.id * 50}
              >
                <div className="text-block">
                  <NewsIcon />
                  <div className="description">
                    <h3>{edge.node.title}</h3>
                    <p>{edge.node.date}</p>
                    <Link to={edge.node.link}>Read more</Link>
                  </div>
                </div>

                <Img
                  fixed={edge.node.thumbnail.childImageSharp.fixed}
                  draggable={false}
                />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </NewsCenter>
  )
}

const NewsCenter = styled.section`
  padding: 75px 0;
  text-align: center;
  .title {
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
    > .animated {
      border-right: 1px solid #ccc;
      margin-left: 5%;
      padding-right: 10%;
      width: 35%;
    }
    .news {
      width: 50%;
      .post {
        > .animated {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
          padding: 0 120px;
          a {
            :hover {
              opacity: 0.7;
            }
          }
          img {
            border-radius: 50%;
          }
          .text-block {
            display: flex;
            align-items: center;
            svg {
              border: none;
              margin-right: 20px;
              margin-left: 0;
              padding: 0;
              width: 50px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .content > .news > .post {
      padding: 0 40px;
    }
  }
  @media screen and (max-width: 1024px) {
    padding-bottom: 0;
    .content {
      flex-direction: column;
      > .animated {
        border: none;
        margin: 5px;
        padding: 0;
        width: 95%;
      }
      svg {
        max-width: 90%;
      }
      .news {
        width: 100%;
        .post {
          padding: 0 5px;
          width: calc(100% - 10px);
          h3 {
            max-width: 150px;
          }
          .animated {
            padding: 0;
            width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .content {
      .news {
        .post {
          flex-direction: column;
        }
      }
    }
  }
`
