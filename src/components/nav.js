import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ReactModal from 'react-modal'

import Contact from './contact'

import Logo from './svg/logo'
import ContactIcon from './svg/contact'

import '../styles/hamburger.css'

ReactModal.setAppElement(`#___gatsby`)
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
        <Link to="/" aria-label="Company Logo. Click to go back home.">
          <Logo />
        </Link>
        <div className="button">
          <button
            onClick={this.handleMenu}
            type="button"
            aria-label="Menu"
            className={
              this.state.isMenuActive
                ? 'hamburger hamburger--spin is-active'
                : 'hamburger hamburger--spin'
            }
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className={this.state.isMenuActive ? 'menu' : 'menu hidden'}>
          <ul>
            <li>
              <Link to="/products">产品中心</Link>
            </li>
            <li>
              <Link to="/solutions">解决方案</Link>
            </li>
            <li>
              <Link to="/services">服务支持</Link>
            </li>
            <li>
              <Link to="/success-cases">成功案例</Link>
            </li>
            <li>
              <Link to="/about-us">关于我们</Link>
            </li>
          </ul>
          <div className="icons">
            <button
              className="letter"
              onClick={this.handleModal}
              aria-label="toggle modal"
            >
              <ContactIcon />
            </button>
            <ReactModal
              style={customStyles}
              isOpen={this.state.isModalOpen}
              onRequestClose={this.handleModal}
              contentLabel="Contact form"
            >
              <Contact />
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
    overflow: 'hidden',
  },
}

// Styled-Components
const Nav = styled.nav`
  animation: 1s forwards navAnimate;
  background-color: #fff;
  border-radius: 0 0 50px 50px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  height: 75px;
  margin-left: 2.5%;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 95%;
  z-index: 40;
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
        font-size: 19px;
        font-weight: 900;
        text-decoration: none;
        color: #3379e0;
        display: inline-block;
        padding: 15px 20px;
        position: relative;
        :after {
          background: none repeat scroll 0 0 transparent;
          bottom: 0;
          content: '';
          display: block;
          height: 2px;
          left: 50%;
          position: absolute;
          background: #3379e0;
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
      .letter {
        background-color: transparent;
        border: none;
        cursor: pointer;
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
    border-radius: 0;
    margin-left: 0;
    width: 100%;
    .menu {
      background-color: #fff;
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
          font-size: 24px;
        }
      }
      .icons {
        flex-direction: column;
        margin: 0;
        svg {
          margin-top: 20px;
          margin-left: 0;
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

  @keyframes navAnimate {
    0% {
      transform: translateY(-75px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
