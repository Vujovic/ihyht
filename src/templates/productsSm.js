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
  @media screen and (max-width: 1024px) {
    .main {
      flex-direction: column-reverse;
      svg {
        width: 60%;
      }
      .text {
        width: 70%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .main {
      svg {
        margin-bottom: 30px;
        width: 80%;
      }
    }
  }
`
