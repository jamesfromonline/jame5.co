import React from "react"
import PropTypes from "prop-types"
import Stars from './stars/Stars'
import '../styles/styles.scss'

const Layout = ({ children, progressColors, progressStars }) => {

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
