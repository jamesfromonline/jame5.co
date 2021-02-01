import React from "react"
import { Link } from "gatsby"
import Particles from "react-tsparticles";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const particleSize = 65

const BlobBlack = () => {
  return (
    <svg className='blob-1' viewBox="0 0 600 600">
      <path>
        <animate attributeName="d" dur="18s" repeatCount="indefinite"
          values="M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;

                  M404.4 176.7c20.9 16.4 20.8 58.8 38.8 106.2 18.1 47.4 54.4 99.7 40.9 123.6-13.5 23.9-76.7 19.3-131.6 40.4-54.8 21-101.2 67.7-150.5 71.7-49.4 4.1-101.7-34.5-107.8-81.9C88 389.2 128 333 144.2 278c16.2-55.1 8.5-108.8 30.5-125 22-16.1 73.7 5.5 120.4 11.3 46.7 5.9 88.5-3.9 109.3 12.4z;

                  M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;" />
      </path>
    </svg>
  )
}

const BlobPink = () => {
  return (
    <svg className='blob-2' viewBox="0 0 600 600">
      <path>
        <animate attributeName="d" dur="19s" repeatCount="indefinite"
          values="M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;

                  M404.4 176.7c20.9 16.4 20.8 58.8 38.8 106.2 18.1 47.4 54.4 99.7 40.9 123.6-13.5 23.9-76.7 19.3-131.6 40.4-54.8 21-101.2 67.7-150.5 71.7-49.4 4.1-101.7-34.5-107.8-81.9C88 389.2 128 333 144.2 278c16.2-55.1 8.5-108.8 30.5-125 22-16.1 73.7 5.5 120.4 11.3 46.7 5.9 88.5-3.9 109.3 12.4z;

                  M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;" />
      </path>
    </svg>
  )
}

const BlobBlue = () => {
  return (
    <svg className='blob-3' viewBox="0 0 600 600">
      <path>
        <animate attributeName="d" dur="17s" repeatCount="indefinite"
          values="M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;

                  M404.4 176.7c20.9 16.4 20.8 58.8 38.8 106.2 18.1 47.4 54.4 99.7 40.9 123.6-13.5 23.9-76.7 19.3-131.6 40.4-54.8 21-101.2 67.7-150.5 71.7-49.4 4.1-101.7-34.5-107.8-81.9C88 389.2 128 333 144.2 278c16.2-55.1 8.5-108.8 30.5-125 22-16.1 73.7 5.5 120.4 11.3 46.7 5.9 88.5-3.9 109.3 12.4z;

                  M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;" />
      </path>
    </svg>
  )
}

const Blobs = (t) => {
  return (
    <>
      <svg className='blob-1' viewBox="0 0 600 600">
        <path>
          <animate attributeName="d" dur="18s" repeatCount="indefinite"
            values="M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;

                    M404.4 176.7c20.9 16.4 20.8 58.8 38.8 106.2 18.1 47.4 54.4 99.7 40.9 123.6-13.5 23.9-76.7 19.3-131.6 40.4-54.8 21-101.2 67.7-150.5 71.7-49.4 4.1-101.7-34.5-107.8-81.9C88 389.2 128 333 144.2 278c16.2-55.1 8.5-108.8 30.5-125 22-16.1 73.7 5.5 120.4 11.3 46.7 5.9 88.5-3.9 109.3 12.4z;

                    M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;" />
        </path>
      </svg>

      <svg className='blob-2' viewBox="0 0 600 600">
        <path>
          <animate attributeName="d" dur="19s" repeatCount="indefinite"
            values="M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;

                    M404.4 176.7c20.9 16.4 20.8 58.8 38.8 106.2 18.1 47.4 54.4 99.7 40.9 123.6-13.5 23.9-76.7 19.3-131.6 40.4-54.8 21-101.2 67.7-150.5 71.7-49.4 4.1-101.7-34.5-107.8-81.9C88 389.2 128 333 144.2 278c16.2-55.1 8.5-108.8 30.5-125 22-16.1 73.7 5.5 120.4 11.3 46.7 5.9 88.5-3.9 109.3 12.4z;

                    M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;" />
        </path>
      </svg>

      <svg className='blob-3' viewBox="0 0 600 600">
        <path>
          <animate attributeName="d" dur="17s" repeatCount="indefinite"
            values="M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;

                    M404.4 176.7c20.9 16.4 20.8 58.8 38.8 106.2 18.1 47.4 54.4 99.7 40.9 123.6-13.5 23.9-76.7 19.3-131.6 40.4-54.8 21-101.2 67.7-150.5 71.7-49.4 4.1-101.7-34.5-107.8-81.9C88 389.2 128 333 144.2 278c16.2-55.1 8.5-108.8 30.5-125 22-16.1 73.7 5.5 120.4 11.3 46.7 5.9 88.5-3.9 109.3 12.4z;

                    M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;" />
        </path>
      </svg>
    </>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <h1 className='header__logo grit'>JAME5</h1>
      <div className='header__svg grit' />
    </header>

    <section className='sect sect__one'>
      {/* <div className='sect__bar-one-svg grit' /> */}

      <p style={{ textAlign: 'center' }} className='grit'>
        i'm a full stack web dev.
      </p>
    </section>

    <section className='sect sect__two'>
      <div className='sect__box'>
        <div className='sect__skills'>
          <div className='skill-icon'>
            <div className='skill-icon--javascript grit' />
            <div className='skill-icon--javascript-pink grit' />
            <div className='skill-icon--javascript-blue grit' />
          </div>

          <div className='skill-icon'>
            <div className='skill-icon--react grit' />
            <div className='skill-icon--react-pink grit' />
            <div className='skill-icon--react-blue grit' />
          </div>

          <div className='skill-icon'>
            <div className='skill-icon--gatsby grit' />
            <div className='skill-icon--gatsby-pink grit' />
            <div className='skill-icon--gatsby-blue grit' />
          </div>

          <div className='skill-icon'>
            <div className='skill-icon--pen grit' />
            <div className='skill-icon--pen-pink grit' />
            <div className='skill-icon--pen-blue grit' />
          </div>

          {/* <div className='skill-icon skill-icon--react grit' /> */}
          {/* <div className='skill-icon skill-icon--gatsby grit' /> */}
          {/* <div className='skill-icon skill-icon--codepencil grit' /> */}
        </div>
        <p className='grit'>
          i like to create unique projects using tools like javascript, react, gatsby, graphql, css/scss, photoshop, and node.
        </p>

        {/* <div className='socials'>
          <a className='link icon icon--github grit' href='https://github.com/jamesfromonline' />
          <a className='link icon icon--codepen grit' href='https://codepen.io/jamesfromonline' />
          <a className='link icon icon--linkedin grit' href='https://linkedin.com/in/jamesfromonline' />
        </div> */}

        <div className='sect__box-svg grit' />
      </div>
    </section>

    <section className='sect sect__one sect__divider'>
      <div className='sect__bar-one-svg grit' />
    </section>

    <section className='portfolio first'>
      <div className='portfolio__item grit'>
        <div className='portfolio__item-inner'>
          <div className='portfolio__item-img'>
            <div className='portfolio__item-blob'>
              <Blobs />
            </div>
            <div className='portfolio__item-img--drafty' />
          </div>
          <div className='portfolio__item-description'>
            <h2 className='grit'><a data-text='drafty' href='https://drafty.cc' title='drafty website'>drafty</a></h2>
            <p>a webapp for people to write, format, and save notes, jokes, ideas, and anything in between.</p>
          </div>
        </div>
        <div className='portfolio__box portfolio__box-one' />
      </div>
    </section>

    <div className='portfolio-divider'>
      <div className='portfolio-divider__bar-one grit' />
      <div className='portfolio-divider__bar-two grit' />
    </div>

    <section className='portfolio'>
      <div className='portfolio__item grit'>
        <div className='portfolio__item-inner'>
          <div className='portfolio__item-img-2'>
            <div className='portfolio__item-blob'>
              <Blobs />
            </div>
            <div className='portfolio__item-img-2--nrdstr' />
          </div>
          <div className='portfolio__item-description'>
            <h2 className='grit'><a data-text='nrdstr' href='https://nrdstr.com' title='nrdstr website'>nrdstr</a></h2>
            <p>a digital design agency that offers graphic design, website design and development, and more.</p>
          </div>
        </div>
        <div className='portfolio__box portfolio__box-two' />
      </div>
    </section>


    {/* <!-- Sunset Footer --> */}
    {/* <footer className='sun__wrapper'>
      <div className="sun">
        <div className='sun__texture' />
        <div className="sun-glow-1"></div>
        <div className="sun-glow-2"></div>
      </div>
    </footer> */}

  </Layout>
)

export default IndexPage