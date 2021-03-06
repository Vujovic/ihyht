import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Illustration from './svg/guangdongIllustration'
import ScrollAnimation from 'react-animate-on-scroll'

export default () => {
  const data = useStaticQuery(graphql`
    query GetSuccessCasesGuangdong {
      allStrapiSuccesscases {
        edges {
          node {
            id
            Title
            Post
            Province
          }
        }
      }
    }
  `)

  return (
    <SuccessTemplate>
      <ScrollAnimation offset={50} animateIn="fadeInUp" animateOnce>
        <Illustration />
      </ScrollAnimation>
      <div className="cards">
        {data.allStrapiSuccesscases.edges.map((edge, index) => {
          if (edge.node.Province === '广东省') {
            return (
              <Scroll
                offset={50}
                animateIn="fadeInUp"
                delay={index * 100}
                animateOnce
              >
                <div className="card" key={edge.node.id}>
                  <div className="description">
                    <h3>{edge.node.Title}</h3>
                    <p>{edge.node.Post}</p>
                  </div>
                </div>
              </Scroll>
            )
          }
          return null
        })}
      </div>
    </SuccessTemplate>
  )
}

export const SuccessTemplate = styled.div`
  svg {
    display: block;
    margin: 50px auto;
    max-width: 700px;
  }
  .cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 75px auto 0 auto;
    width: 90%;
    .card {
      > * {
        margin: 20px 0;
      }
      h3 {
        margin-bottom: 30px;
      }
    }
  }
`
export const Scroll = styled(ScrollAnimation)`
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  text-align: center;
  width: 25%;
  @media screen and (max-width: 1366px) {
    width: 40%;
  }
  @media screen and (max-width: 1024px) {
    width: 85%;
  }
`
