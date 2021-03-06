import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query GetAllPartners {
      allStrapiPartners {
        edges {
          node {
            id
            Images {
              childImageSharp {
                fixed(quality: 90, width: 200, height: 200) {
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
      <div className="cards">
        {data.allStrapiPartners.edges.map(card => (
          <div className="card" key={card.node.id}>
            <Img fixed={card.node.Images.childImageSharp.fixed} />
          </div>
        ))}
      </div>
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
    justify-content: center;
    flex-wrap: wrap;
    .card {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
      height: 200px;
      margin: 10px;
      width: 200px;
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
