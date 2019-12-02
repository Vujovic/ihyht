import styled from "styled-components"

export const ProductsSm = styled.section`
  text-align: center;
  .description {
    margin-top: 150px;
    p {
      margin-top: 25px;
    }
  }
  .main {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 75px;
    svg {
      width: 40%;
    }
    .text {
      padding: 0 5%;
      width: 30%;
      p {
        margin-top: 25px;
        text-align: justify;
      }
    }
  }
  .features {
    margin-top: 75px;
    .cards {
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;
      justify-content: space-evenly;
    }
  }
`
