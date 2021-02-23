import React, { useRef } from "react"
import PropTypes from "prop-types"
import Div100vh from 'react-div-100vh'
import '../styles/styles.scss'

const Layout = ({ children, progressColors }) => {
  const overlay = useRef(null)

  const overlayStyle = {
    opacity: progressColors,
    background: `linear-gradient(${(progressColors * 255).toFixed(0)}deg, #86ccf8, #ec86f8)`
  }

  return (
    <Div100vh>
      <main className='app__wrapper'>
        <div ref={overlay} className='moving-overlay--portfolio grit' style={overlayStyle} />
        {children}
      </main>
    </Div100vh>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
