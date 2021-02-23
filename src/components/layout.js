/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Div100vh from 'react-div-100vh'
import "./layout.css"
import '../css/styles.scss'

const Layout = ({ children, progressColors }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const overlay = useRef(null)
  // useEffect(() => {
  // }, [progress])

  return (
    <Div100vh>
      <main className='app__wrapper'>
        <div ref={overlay} className='moving-overlay--portfolio grit' style={{ opacity: `${progressColors}` }} />
        {children}
      </main>
    </Div100vh>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
