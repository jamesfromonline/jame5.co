import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import Div100vh from 'react-div-100vh'
import Stars from './stars/Stars'
import '../styles/styles.scss'

const Layout = ({ children, progressColors, progressStars }) => {
  const [styles, setStyles] = useState({ opacity: 0 })

  let underlayStyle = {
    opacity: progressColors
  }

  const starsStyle = {
    display: progressStars > 0 ? 'flex' : 'none',
    opacity: progressStars
  }

  return (
    <div>
      <main className='app__wrapper'>
        <div className='gradient-underlay grit' style={underlayStyle} />
        {children}
      </main>
      <Stars styles={starsStyle} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
