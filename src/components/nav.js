import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ReactModal from "react-modal"

import Logo from "./svg/logo"
import Contact from "./svg/contact"
import search from "../images/search.png"

import "../styles/hamburger.css"

export default class Navigation extends React.Component {
  state = {
    isModalOpen: false,
    isMenuActive: false,
  }

  handleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen })
  handleMenu = () => this.setState({ isMenuActive: !this.state.isMenuActive })

  render() {
    return (
      <Nav>
        <Link to='/'>
          <Logo />
        </Link>
        <div className='button'>
          <button
            onClick={this.handleMenu}
            type='button'
            className={
              this.state.isMenuActive
                ? "hamburger hamburger--spin"
                : "hamburger hamburger--spin is-active"
            }
          >
            <span className='hamburger-box'>
              <span class='hamburger-inner'></span>
            </span>
          </button>
        </div>
        <div className={this.state.isMenuActive ? "menu hidden" : "menu"}>
          <ul>
            <li>
              <Link to='/products'>产品中心</Link>
            </li>
            <li>
              <Link to='/solutions'>解决方案</Link>
            </li>
            <li>
              <Link to='/services'>服务支持</Link>
            </li>
            <li>
              <Link to='/success-cases'>成功案例</Link>
            </li>
            <li>
              <Link to='/about-us'>关于我们</Link>
            </li>
          </ul>
          <div className='icons'>
            <input type='search' />
            <Link to='#' onClick={this.handleModal}>
              <Contact />
            </Link>
            <ReactModal
              style={customStyles}
              isOpen={this.state.isModalOpen}
              onRequestClose={this.handleModal}
              contentLabel='Contact form'
            >
              <h1>Test</h1>
            </ReactModal>
          </div>
        </div>
      </Nav>
    )
  }
}

// React-Modal
const customStyles = {
  overlay: {
    zIndex: 300,
  },
}

const Nav = styled.nav`
  background-color: #434343;
  color: #fff;
  height: 75px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 20;
  > * {
    text-align: center;
  }
  .menu {
    align-items: center;
    display: flex;
    transition: all 0.5s;
    ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
      a {
        font-size: var(--font-size__small);
        text-decoration: none;
        letter-spacing: 0.15em;
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
        position: relative;
        :after {
          background: none repeat scroll 0 0 transparent;
          bottom: 0;
          content: "";
          display: block;
          height: 2px;
          left: 50%;
          position: absolute;
          background: #fff;
          transition: width 0.3s ease 0s, left 0.3s ease 0s;
          width: 0;
        }
        :hover:after {
          width: 100%;
          left: 0;
        }
      }
    }
    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 40px;
      input {
        background: #fff url(${search}) no-repeat 10px center;
        border: none;
        border-radius: 50px;
        color: rgba(255, 255, 255, 0);
        cursor: pointer;
        padding: 6px 0;
        font-size: 18px;
        transition: all 0.5s;
        width: 40px;
        :hover {
          transform: scale(1.2);
        }
        :focus {
          color: #434343;
          cursor: auto;
          padding-left: 40px;
          transform: scale(1);
          width: 250px;
        }
      }
      svg {
        margin-left: 30px;
        width: 30px;
        transition: all 0.3s;
        :hover {
          transform: scale(1.2);
        }
      }
    }
  }
  .button {
    display: none;
  }
  @media screen and (max-width: 1280px) {
    .menu {
      background-color: #fff;
      color: #3379e0;
      flex-direction: column;
      justify-content: space-evenly;
      height: calc(100vh - 75px);
      position: absolute;
      right: 0;
      top: 75px;
      width: 30%;
      ul {
        flex-direction: column;
        a {
          color: #3379e0;
          font-size: 24px;
        }
      }
    }
    .button {
      display: inline;
    }
  }
  @media screen and (max-width: 1280px) {
    .menu {
      width: 100%;
    }
  }
`
