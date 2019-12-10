import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

export default () => {
  const data = useStaticQuery(graphql`
    query GetCareers {
      allStrapiCareers {
        edges {
          node {
            id
            positionName
            jobCategory
            Location
            postDate(formatString: "YYYY/MM/DD")
            Education
            Experience
            jobDescription
          }
        }
      }
    }
  `)

  return (
    <Careers>
      <h2>职位信息</h2>
      <div className="cards">
        <ul className="card-header">
          <li>职位名称</li>
          <li>职位类别</li>
          <li>工作地点</li>
          <li>发布时间</li>
        </ul>
        {data.allStrapiCareers.edges.map(edge => (
          <div className="card" key={edge.node.id}>
            <ul>
              <li>{edge.node.positionName}</li>
              <li>{edge.node.jobCategory}</li>
              <li>{edge.node.Location}</li>
              <li>{edge.node.postDate}</li>
            </ul>
            <div className="description">
              <div className="content">
                <h3>学历: {edge.node.Education}</h3>
                <h3>本科: {edge.node.Experience}</h3>
                <ReactMarkdown source={edge.node.jobDescription} />
                <a href="mailto:name@email.com">发电子邮件</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Careers>
  )
}

const Careers = styled.section`
  padding: 75px 0;
  text-align: center;
  > h2 {
    font-size: 36px;
    margin-bottom: 75px;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    padding: 25px;
  }
  .card-header {
    background-color: #2e83e6;
    color: #fff;
  }
  .card {
    ul {
      cursor: pointer;
      :hover {
        color: #2e83e6;
      }
    }
  }
  .description {
    background-color: #eee;
    margin: 0 auto;
    padding: 25px;
    text-align: left;
    .content {
      margin: 0 auto;
      width: 75%;
      h3 {
        margin: 25px 0;
      }
      a {
        background-color: #2e83e6;
        color: #fff;
        display: inline-block;
        margin: 25px 0;
        padding: 10px 25px;
        :hover {
          background-color: #2364b0;
        }
      }
    }
  }
`
