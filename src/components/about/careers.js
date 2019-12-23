import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

export default () => {
  const data = useStaticQuery(graphql`
    query GetCareers {
      allStrapiCareers {
        edges {
          node {
            id
            PositionName
            JobCategory
            Location
            PostDate(formatString: "YYYY/MM/DD")
            Education
            Experience
            JobDescription
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
            <input id={edge.node.id} className="toggle" type="checkbox" />
            <label htmlFor={edge.node.id} className="lbl-toggle">
              <ul>
                <li>{edge.node.PositionName}</li>
                <li>{edge.node.JobCategory}</li>
                <li>{edge.node.Location}</li>
                <li>{edge.node.PostDate}</li>
              </ul>
            </label>
            <div className="description">
              <div className="content">
                <h3>学历: {edge.node.Education}</h3>
                <h3>本科: {edge.node.Experience}</h3>
                <ReactMarkdown
                  source={edge.node.JobDescription}
                  escapeHtml={false}
                />
                <a href="mailto:web@ihyht.com">申请职位</a>
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
    li {
      width: 25%;
    }
  }
  .card-header {
    background-color: #2e83e6;
    color: #fff;
  }
  .card {
    input[type='checkbox'] {
      display: none;
    }
    ul {
      border: 1px solid #eee;
      cursor: pointer;
      :hover {
        color: #2e83e6;
      }
    }
    .toggle:checked + .lbl-toggle + .description {
      max-height: 500vh;
    }
    .toggle:checked + .lbl-toggle::before {
      transform: rotate(90deg) translateX(-3px);
    }

    .toggle:checked + .lbl-toggle {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .description {
    background-color: #eee;
    max-height: 0px;
    overflow: hidden;
    text-align: left;
    transition: max-height 0.5s ease-in-out;
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
