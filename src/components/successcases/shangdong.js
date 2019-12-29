import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Illustration from './svg/shangdongIllustration'
import ScrollAnimation from 'react-animate-on-scroll'

import { SuccessTemplate, Scroll } from './guangdong'

export default () => {
  const data = useStaticQuery(graphql`
    query GetSuccessCasesShandong {
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
          if (edge.node.Province === '山东省') {
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
        })}
      </div>
    </SuccessTemplate>
  )
}
