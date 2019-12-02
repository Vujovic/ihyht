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
  margin: 10px;
  h4 {
    font-size: 18px;
    margin-top: 25px;
  }
  p {
    margin-top: 25px;
    max-width: 300px;
    text-align: justify;
  }
  svg {
    width: 100px;
  }
`
