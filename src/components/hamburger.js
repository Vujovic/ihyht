import React from "react"

import "../styles/hamburger.css"

export default props => (
  <div className='button'>
    <button
      onClick={props.toggleMenu}
      className='hamburger hamburger--spin'
      type='button'
      aria-label='menu'
    >
      <span className='hamburger-box'>
        <span class='hamburger-inner'></span>
      </span>
    </button>
  </div>
)
