import React from "react"
import styled from "styled-components"

export default props => (
  <Card>
    {props.icon}
    <h4>{props.title}</h4>
    <p>{props.description}</p>
  </Card>
)

const Card = styled.div`
  margin: 20px;
  min-width: 20%;
  h4 {
    font-size: 18px;
    margin-top: 25px;
  }
  p {
    margin: 25px auto 0 auto;
    max-width: 300px;
    text-align: justify;
  }
  svg {
    width: 100px;
  }
`
