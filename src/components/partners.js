import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ScrollContainer from "react-indiana-drag-scroll"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query GetPartners {
      allStrapiPartners {
        edges {
          node {
            name
            images {
              childImageSharp {
                fixed(quality: 90, width: 300, height: 300) {
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
    <Partners>
      <h2>合作伙伴</h2>
      <ScrollContainer hideScrollbars={false} className="cards">
        {data.allStrapiPartners.edges.map(card => (
          <div class="card">
            <Img fixed={card.node.images.childImageSharp.fixed} />
          </div>
        ))}
      </ScrollContainer>
    </Partners>
  )
}

const Partners = styled.section`
  padding: 75px 0;
  text-align: center;
  > h2 {
    font-size: 36px;
    margin-bottom: 75px;
  }
  .cards {
    display: flex;
    .card {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
      height: 300px;
      margin: 10px 20px;
      width: 300px;
    }
  }
  @media screen and (max-width: 768px) {
    .cards {
      .card {
        width: 75%;
      }
    }
  }
`