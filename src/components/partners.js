import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import ScrollContainer from 'react-indiana-drag-scroll'
import Img from 'gatsby-image'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

export default () => {
  const data = useStaticQuery(graphql`
    query GetPartners {
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
    <ScrollAnimation animateIn="fadeInUp" animateOnce>
      <Partners>
        <h2>合作伙伴</h2>
        <ScrollContainer className="cards">
          {data.allStrapiPartners.edges.map(card => (
            <div className="card" key={card.node.id}>
              <Img fixed={card.node.Images.childImageSharp.fixed} />
            </div>
          ))}
        </ScrollContainer>
      </Partners>
    </ScrollAnimation>
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
      height: 200px;
      margin: 10px 20px;
      width: 200px;
    }
  }
  @media screen and (max-width: 768px) {
    .cards {
      justify-content: flex-start;
      .card {
        width: 75%;
      }
    }
  }
`
