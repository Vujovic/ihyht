import React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default props => {
  return (
    <Layout>
      <SEO title={props.data.title} />
      <NewsArticle>
        <ReactMarkdown
          source={props.data.strapiNews.NewsArticle}
          escapeHtml={false}
        />
      </NewsArticle>
    </Layout>
  )
}

export const NewsQuery = graphql`
  query getNewsArticle($link: String!) {
    strapiNews(Link: { eq: $link }) {
      NewsArticle
      Title
      Link
    }
  }
`

const NewsArticle = styled.section`
  margin: 0 auto;
  padding: 150px 0;
  width: 80%;
  h1,
  h2 {
    margin: 30px 0;
    text-align: center;
  }
  p {
    margin: 30px 0;
    text-align: justify;
  }
  img {
    display: block;
    max-width: 90%;
    margin: 75px auto;
  }
  .news-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    justify-content: space-evenly;
    figure {
      overflow: hidden;
      display: inline-block;
      text-align: center;
      margin: 5px;
      img {
        border-radius: 0 50px;
        height: 600px;
        margin: 5px;
        vertical-align: top;
      }
      figcaption {
        font-size: 20px;
        margin-top: 20px;
      }
    }
  }
`
