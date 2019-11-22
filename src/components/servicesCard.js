import React from "react"
import styled from "styled-components"

export default props => (
  <Card>
    <div className="img">{props.img}</div>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </Card>
)

const Card = styled.div`
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  color: #434343;
  max-width: 300px;
  padding: 30px 25px;
  .img {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
    border-radius: 100px;
    display: inline-block;
    margin-left: calc(50% - 50px);
    margin-bottom: 30px;
    padding: 20px;
    width: 80px;
    height: 80px;
  }
  svg {
    display: block;
    margin: 0 auto;
  }
  h3 {
    text-align: center;
  }
  @media screen and (max-width: 1280px) {
    margin-bottom: 40px;
  }
`
