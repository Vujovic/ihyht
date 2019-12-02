import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => {
  console.log(props.data)

  return (
    <Layout>
      <SEO title={props.data.title} />
      <NewsArticle>
        <ReactMarkdown source={props.data.strapiNews.newsArticle} />
      </NewsArticle>
    </Layout>
  )
}

export const NewsQuery = graphql`
  query getNewsArticle($link: String!) {
    strapiNews(link: { eq: $link }) {
      newsArticle
      title
      link
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
`
