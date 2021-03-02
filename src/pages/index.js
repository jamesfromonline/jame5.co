import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollTrigger from 'react-scroll-trigger'
import Header from '../components/header/Header'
import IntroSummary from '../components/intro-summary/IntroSummary'
import IntroBox from '../components/intro-box/IntroBox'
import PortfolioItem from '../components/portfolio-item/PortfolioItem'
import PhotoshopBox from "../components/photoshop/PhotoshopBox"
import PhotoshopGrid from "../components/photoshop/PhotoshopGrid"
import Divider from '../components/divider/Divider'
import Footer from '../components/footer/Footer'

const IndexPage = () => {
  const [progressColors, setProgressColors] = useState(0)
  const [progressStars, setProgressStars] = useState(0)
  const handleProgressColors = ({ progress }) => setProgressColors(progress.toFixed(4))
  const handleProgressDark = ({ progress }) => setProgressColors(1 - progress.toFixed(2))
  const handleProgressStars = ({ progress }) => setProgressStars(progress.toFixed(4))

  return (
    <Layout progressColors={progressColors} progressStars={progressStars}>
      <SEO title="Web Development and Graphic Dabblery" />
      <Header />
      <IntroSummary />
      <IntroBox />
      <Divider num='one' />
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
      <Divider num='two' />
      <ScrollTrigger onProgress={handleProgressStars} />
      <PhotoshopBox />
      <PhotoshopGrid />
      <Footer />
    </Layout>
  )
}

export default IndexPage