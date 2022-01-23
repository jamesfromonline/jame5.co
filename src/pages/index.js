import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollTrigger from 'react-scroll-trigger'
import Header from '../components/header/Header'
import IntroSummary from '../components/intro-summary/IntroSummary'
import IntroBox from '../components/intro-box/IntroBox'
import PortfolioItem from '../components/portfolio-item/PortfolioItem'
import PhotoshopGrid from "../components/photoshop/PhotoshopGrid"
import Footer from '../components/footer/Footer'

const IndexPage = () => {
  const [progressColors, setProgressColors] = useState(0)
  const [progressStars, setProgressStars] = useState(0)
  const handleProgressColors = ({ progress }) => setTimeout(() => setProgressColors(progress.toFixed(4)), 100)
  const handleProgressDark = ({ progress }) => setTimeout(() => setProgressColors(1 - progress.toFixed(2)), 100)
  const handleProgressStars = ({ progress }) => setTimeout(() => setProgressStars(progress.toFixed(4)), 100)

  return (
    <Layout progressColors={progressColors} progressStars={progressStars}>
      <SEO title="Web Development and Graphic Dabblery" />
      <Header />
      <IntroSummary />
      <IntroBox />
      <ScrollTrigger onProgress={handleProgressColors} />
      <PortfolioItem name='mepage'
        url='https://mepage.is'
        description='supercharge your online presence with one sweet link.'
        box='three' />

      <PortfolioItem name='drafty'
        url='https://drafty.cc'
        description='a platform for writers to draft, format, and save their ideas and projects.'
        box='one' />

      <PortfolioItem name='zalories'
        url='https://zalories.jame5.co'
        description='dead simple calorie tracking for minimalist enthusiasts.'
        box='two' />

      <ScrollTrigger onProgress={handleProgressDark} />
      <ScrollTrigger onProgress={handleProgressStars} />
      {/* <PhotoshopBox /> */}
      <PhotoshopGrid />
      <Footer />
    </Layout>
  )
}

export default IndexPage