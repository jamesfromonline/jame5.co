import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Header = () => {
    const headerQuery = useStaticQuery(graphql`
        query {
        allFile(filter: { sourceInstanceName: {eq: "images"}}) {
            edges {
                node {
                    childImageSharp {
                    fluid(maxWidth: 300, quality: 100) {
                    originalName
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                    }
                }
            }
        }
    }`)

    return (
        <header>
            <Img
                className='img__james grit'
                alt={'james'}
                fluid={headerQuery.allFile.edges[0].node.childImageSharp.fluid} />
            <div className='header__logo grit' />
            <div className='header__svg grit' />
        </header>
    )
}

export default Header