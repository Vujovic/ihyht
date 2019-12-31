import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Illustration from './svg/zhejiangIllustration'
import ScrollAnimation from 'react-animate-on-scroll'

import { SuccessTemplate, Scroll } from './guangdong'

export default () => {
  const data = useStaticQuery(graphql`
    query GetSuccessCasesZhejiang {
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
          if (edge.node.Province === '浙江省') {
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
