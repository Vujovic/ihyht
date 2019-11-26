import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default () => (
  <Products>
    <h2>产品中心</h2>
    <Link to="/products">查看全部</Link>
  </Products>
)

const Products = styled.section`
  padding: 75px 0;
  text-align: center;
  > h2 {
    font-size: 36px;
  }
  > a {
    margin-bottom: 75px;
    font-size: 18px;
    padding: 5px 10px;
    transition: all 0.3s;
    :hover {
      opacity: 0.7;
    }
  }
`
