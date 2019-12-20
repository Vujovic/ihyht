import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import ContactQR from './contactQR'
import Logo from './svg/logo'

export default () => (
  <Footer>
    <div className="company">
      <div className="certificates">
        <h3>资质证书</h3>
        <div className="list">
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 400"
          >
            <path fill="#fff" d="M0 0h900v400H0z" />
            <path
              d="M485 374h-58l-2-2 42-173 2-1c51-18 98-63 118-87 1-2 4-1 4 1l-2 86c-26 80-79 114-104 121l-2 2 4 51-2 2z"
              fill="#FF1212"
            />
            <path
              d="M491 275v-40c14-9 42-29 47-27 6 2 6 2 0 18-5 12-33 37-47 49z"
              fill="#fff"
            />
            <path
              d="M376 223l18-51c1-1-1-3-2-3-40 8-79 42-83 84-3 33 33 61 53 71 1 1 2 0 3-1l17-42c1-1 0-3-1-3-43-5-27-46-6-54l1-1z"
              fill="#FF1212"
            />
            <path
              d="M415 374h-56l-2-2 64-161c1-2-1-4-3-3l-23 10c-1 1-3-1-3-2l15-52 1-1c96-32 138-97 150-131 1-2 3-2 4-1 30 82-55 141-103 161l-1 1-41 180-2 1z"
              fill="#FF1212"
            />
          </svg>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 400"
          >
            <path fill="#fff" d="M0 0h900v400H0z" />
            <path
              d="M357 196c10 4 17 10 23 19 5 9 8 20 8 34 0 11-3 22-8 31-5 8-12 15-21 20s-20 7-32 7h-86V93h83c18 0 33 5 43 15 11 10 16 23 16 40 0 11-2 21-7 30-4 8-11 14-19 18zm-72-19h32c8 0 14-2 18-5s6-8 6-15c0-8-2-13-6-17-4-3-10-5-18-5h-32v42zm36 88c9 0 15-2 19-5 4-4 6-10 6-18s-2-14-6-17c-4-4-10-6-19-6h-36v46h36zM475 310c-18 0-34-5-47-14s-23-22-31-38c-7-17-10-36-10-58s3-41 10-58c8-16 18-29 31-38s29-14 47-14a85 85 0 0158 23l-14 40a66 66 0 00-43-19c-14 0-25 6-32 17-8 11-11 27-11 49s3 38 11 49c7 11 18 17 32 17 15 0 29-7 43-19l14 40a85 85 0 01-58 23z"
              fill="#0D318F"
            />
            <path
              d="M617 310c-18 0-33-5-47-14-13-9-23-22-30-38-7-17-11-36-11-58s4-41 11-58c7-16 17-29 30-38a85 85 0 01105 10l-13 39a66 66 0 00-44-19c-14 0-25 6-32 17s-11 27-11 49 4 38 11 49 18 17 32 17c15 0 29-7 44-19l14 40a85 85 0 01-58 23z"
              fill="#0D318F"
            />
            <path
              d="M142 283c30-21 134-62 308-66 174 4 278 45 308 66-35-77-220-95-308-94-88-1-273 17-308 94z"
              fill="#fff"
            />
            <path
              d="M145 283c30-21 131-51 305-55 174 4 278 34 308 55-35-77-220-84-308-83-88-1-270 6-305 83z"
              fill="#FF8038"
            />
          </svg>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 400"
          >
            <path fill="#fff" d="M0 0h900v400H0z" />
            <path
              d="M505 84c6 16-2 46-24 72-25 30-61 51-79 41l2 3 7 5c17 5 50-11 75-41 22-25 31-54 28-71l-9-9z"
              fill="#2D0A3D"
            />
            <path
              d="M415 66c-11 10-24 43-12 79 12 37 44 65 59 68h5l6-3c-16-3-50-33-61-69-12-36 2-66 14-78l-11 3z"
              fill="#2D0A3D"
            />
            <path
              d="M522 167c1-3 1-5-1-8-7-12-28-31-55-48-29-18-57-29-70-29l-6 4-1 2v1l-5 8 7-4c15-1 43 8 71 25 27 17 47 38 53 52 1 3-2 6-2 6l6-5v-1l3-3z"
              fill="#2D0A3D"
            />
            <path d="M384 97l-1 1 1-1z" fill="#fff" />
            <path
              d="M487 74c36 22 49 67 28 101l3 2a79 79 0 00-136-82l3 2c21-34 67-45 102-23z"
              fill="#D7EFFC"
            />
            <path
              d="M409 204a79 79 0 00109-27l-3-2c-21 34-65 44-101 22s-49-66-29-100l-3-2a79 79 0 0027 109z"
              fill="#127DC2"
            />
            <path
              d="M501 76a81 81 0 00-8-7c-19-9-56 4-82 35-25 31-31 69-19 85a93 93 0 0012 11l-2-3c-9-15 4-49 30-79 25-30 53-46 70-40l3 1-4-3z"
              fill="#127DC2"
            />
            <path
              d="M499 121c-12-38-45-63-62-63a76 76 0 00-16 5h5c13 4 42 29 53 64 12 36 3 71-6 83l-3 3a77 77 0 0015-6c13-10 26-48 14-86z"
              fill="#FFB548"
            />
            <path
              d="M381 97l-1 2c-4 12 14 46 49 68 36 22 76 24 85 15a102 102 0 008-13c-16 6-51-7-79-24-27-17-56-46-54-59a80 80 0 00-8 11z"
              fill="#009D4F"
            />
            <path
              d="M111 310c0-19 14-33 34-33 13 0 21 5 27 13l-14 10c-3-4-8-7-14-7-9 0-15 8-15 17 0 10 6 17 15 17 7 0 11-3 15-8l13 10c-6 8-14 14-28 14-18 0-33-14-33-33zM189 278h19l15 25 15-25h19v64h-18v-37l-16 25h-1l-16-25v37h-17v-64zM277 278h19l15 25 15-25h19v64h-18v-37l-16 25-17-25v37h-17v-64zM366 278h17v64h-17v-64zM423 278h11v64h-11v-64zM450 294h11v7c3-4 8-8 15-8 11 0 17 7 17 18v31h-11v-27c0-8-3-12-10-12-6 0-11 4-11 12v27h-11v-48zM503 336l5-8c5 4 11 6 15 6 5 0 8-2 8-5 0-4-5-5-11-7-7-2-15-5-15-14s8-15 17-15c7 0 13 2 18 6l-4 7c-5-2-10-4-14-4s-7 2-7 4v1c0 3 5 5 11 7 7 2 15 5 15 14 0 10-8 15-18 15-7 0-14-3-20-7zM554 329v-26h-6v-9h6v-13h11v13h13v9h-13v24c0 4 2 6 6 6l7-2v9l-10 3c-9 0-14-4-14-14zM589 276h12v10h-12v-10zm1 18h11v48h-11v-48zM617 329v-26h-6v-9h6v-13h11v13h13v9h-13v24c0 4 2 6 6 6l7-2v9c-3 2-6 3-10 3-8 0-14-4-14-14zM652 325v-31h11v27c0 8 4 12 10 12 7 0 11-4 11-12v-27h11v48h-11v-7c-3 4-7 8-15 8-11 0-17-7-17-18zM711 329v-26h-6v-9h6v-13h11v13h13v9h-13v24c0 4 2 6 6 6l7-2v9c-3 2-6 3-10 3-8 0-14-4-14-14zM742 318c0-14 10-25 24-25 15 0 23 12 23 26v3h-36c2 8 7 12 14 12 6 0 10-2 13-6l7 6c-5 6-11 9-20 9-14 0-25-10-25-25zm36-3c-1-8-5-13-12-13s-12 5-13 13h25zM391 285a9 9 0 0117 0 9 9 0 01-17 0zm17 0a8 8 0 10-16 0 8 8 0 1016 0zm-11-5h4l2 1a3 3 0 011 2 3 3 0 01-2 2l2 4h-2l-2-3h-2v3h-2l1-9zm3 4l2-1-2-1h-2v2h2z"
              fill="#363639"
            />
          </svg>
        </div>
      </div>
      <div className="contact-info">
        <h3>联系方式</h3>
        <p>web@ihyht.com</p>
        <p>+86 010 6477 6380</p>
      </div>
      <ContactQR />
    </div>
    <div className="copyright">
      <p>
        Copyright © 2016 - {new Date().getFullYear()} 北京华云慧通科技有限公司
        All Rights Reserved |{' '}
        <a
          href="http://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff' }}
        >
          京ICP备17004022
        </a>{' '}
        | 京公网安备 11010502033779
      </p>
      <Link to="/">
        <Logo />
      </Link>
    </div>
  </Footer>
)

const Footer = styled.footer`
  background-color: #12355e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%232e83e6' fill-opacity='0.54' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  color: #fff;
  margin-top: 75px;
  padding: 25px 0;
  .company {
    display: flex;
    align-items: stretch;
    justify-content: center;
    > * {
      width: 33.3%;
    }
    .certificates {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: center;
      h3 {
        font-size: 36px;
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        svg {
          margin: 5px;
          width: 150px;
        }
      }
    }
    .contact-info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: center;
      h3 {
        font-size: 36px;
      }
      p {
        margin: 10px 0;
      }
    }
  }
  .copyright {
    border-top: 1px solid #ccc;
    margin: 75px auto 0 auto;
    padding-top: 25px;
    text-align: center;
    width: 75%;
    svg {
      margin-top: 25px;
      fill: #fff;
    }
  }
  @media screen and (max-width: 1024px) {
    .company {
      flex-direction: column;
      > * {
        width: 100%;
        :last-child {
          .code {
            margin: 20px auto;
          }
        }
      }
      .contact-info {
        margin: 25px 0;
      }
    }
  }
`
