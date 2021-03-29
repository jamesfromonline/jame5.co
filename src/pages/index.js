import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollTrigger from 'react-scroll-trigger'
import Header from '../components/header/Header'
import IntroSummary from '../components/intro-summary/IntroSummary'
import IntroBox from '../components/intro-box/IntroBox'
import PortfolioItem from '../components/portfolio-item/PortfolioItem'
import PhotoshopBox from "../components/photoshop/PhotoshopBox"
import PhotoshopGrid from "../components/photoshop/PhotoshopGrid"
import Footer from '../components/footer/Footer'

const IndexPage = () => {
  const [progressColors, setProgressColors] = useState(0)
  const [progressStars, setProgressStars] = useState(0)
  const handleProgressColors = ({ progress }) => setTimeout(() => setProgressColors(progress.toFixed(4)), 100)
  const handleProgressDark = ({ progress }) => setTimeout(() => setProgressColors(1 - progress.toFixed(2)), 100)
  const handleProgressStars = ({ progress }) => setTimeout(() => setProgressStars(progress.toFixed(4)), 100)

  useEffect(() => {
    console.log('%clinkedin: https://linkedin.com/in/jamesfromonline', 'color: #fefefe; background-color: #0072b1; font-weight: bold; padding: 10px')
    console.log('%cresume: https://jame5.co/JamesOBrien_Resume.pdf', 'color: #fefefe; background-color: #111; font-weight: bold; padding: 10px')
  }, [])

  return (
    <Layout progressColors={progressColors} progressStars={progressStars}>
      <SEO title="Web Development and Graphic Dabblery" />
      <Header />
      <IntroSummary />
      <IntroBox />
      <ScrollTrigger onProgress={handleProgressColors} />
      <PortfolioItem name='drafty'
        url='https://drafty.cc'
        description='a webapp for people to write, format, and save notes, jokes, ideas, and anything in between.'
        box='one' />

      <PortfolioItem name='zalories'
        url='https://zalories.jame5.co'
        description='a super simple calorie tracking webapp.'
        box='two' />

      <PortfolioItem name='nrdstr'
        url='https://nrdstr.com'
        description='a digital design agency that offers graphic design, website design and development, and more.'
        box='three' />

      <ScrollTrigger onProgress={handleProgressDark} />
      <ScrollTrigger onProgress={handleProgressStars} />
      <PhotoshopBox />
      <PhotoshopGrid />
      <Footer />
    </Layout>
  )
}

export default IndexPage