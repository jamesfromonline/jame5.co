import React, { useRef } from "react"
import PropTypes from "prop-types"
import Div100vh from 'react-div-100vh'
import Stars from './stars/Stars'
import '../styles/styles.scss'

const Layout = ({ children, progressColors, progressStars }) => {
  const underlay = useRef(null)

  const underlayStyle = {
    opacity: progressColors,
    background: `linear-gradient(212deg, #86ccf8, #ec86f8)`
  }

  const starsStyle = {
    display: progressStars > 0 ? 'flex' : 'none',
    opacity: progressStars
  }

  return (
    <div>
      <main className='app__wrapper'>
        <div ref={underlay} className='gradient-underlay grit' style={underlayStyle} />
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
