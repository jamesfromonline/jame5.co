import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import KUTE from 'kute.js'
import { Blobs1, Blobs2, Blobs3 } from '../components/blob'
import ScrollTrigger from 'react-scroll-trigger'






const IndexPage = () => {
  const portfolioQuery = useStaticQuery(graphql`
        query {
        allFile(filter: { sourceInstanceName: {eq: "images"}}) {
            edges {
              node {
                  childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                  originalName
                      ...GatsbyImageSharpFluid
                      ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                  }
              }
            }
        }
        }`)
  const [progressColors, setProgressColors] = useState(0)
  const [progressDark, setProgressDark] = useState(0)


  let blobTransformA = () => {
    KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      {
        duration: 1000,
        repeat: 0
      }
    ).start()
  }



  const onEnter = () => {
    console.log('enter')
  }

  const onLeave = () => {
    console.log('leave')
  }

  const handleProgressColors = ({ progress, velocity }, ref) => {
    // console.log(progress.toFixed(2))
    setProgressColors(progress.toFixed(2))
  }

  const handleProgressDark = ({ progress, velocity }, ref) => {
    // console.log(1 - progress.toFixed(2))
    // setProgressColors(progress.toFixed(2))
    setProgressColors(1 - progress.toFixed(2))
  }

  return (
    (
      <Layout progressColors={progressColors} progressDark={progressDark}>
        <SEO title="Web Development and Graphic Dabblery" />
        <header>
          <div className='img__james grit' />
          {/* <svg style={{ fill: '#111111' }} className='header__logo grit' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
            <path id="james-full" dataname="james loglo 1" className="cls-1" d="M136.954,329.422c30.863-.316,109.917-6.6,121.794,10.242,8.429,11.955,3.415,73.521,3.414,94.452V592.293c0,28.606,2.828,61.636-3.414,85.348A112.579,112.579,0,0,1,239.4,717.47c-20.773,26.631-73.453,33.555-119.516,34.139-20.129.255-45.028,2.532-55.775-6.828-12.122-10.558-12.186-95.307,0-105.831,10.058-8.686,25.906-1.682,39.839-7.966,4.7-1.563,7.262-3.455,9.106-7.966,7.581-13.387,1.313-33.958,4.553-52.346q0.569-79.65,1.138-159.316C118.742,369.346,110.327,348.205,136.954,329.422Zm245.864,0H521.685c19.836,0,46.46-2.964,58.051,5.69,13.909,10.386,17.326,58.844,22.765,79.658L656,648.054c5.807,22.152,22.872,77.782,3.415,91.037-11.251,7.665-111.71,7.7-122.932,0-16.6-11.387-8.626-37.661-33.009-43.243-21.746-4.978-70.155-.345-77.4,10.242-9.282,13.56-4.787,30.2-21.627,36.415-13.243,4.884-101.736,3-110.41-2.276-22.2-13.51-3.307-74.634,3.414-100.141q24.471-108.1,48.945-216.214c9.28-35.689,7.2-72.422,31.872-93.314ZM1037.31,530.843h-5.69q-13.08,75.1-26.18,150.212c-4.59,20.336-2.27,44.777-17.071,54.622-10.606,7.055-38.234,3.417-54.636,3.414-15.787,0-39.759,2.941-50.083-3.414-13.87-8.536-11.771-26.861-15.936-45.518q-9.674-54.049-19.35-108.108c-2.886-12.774-.981-48.949-13.659-51.208V675.365c0,19.989,3.142,47.525-5.691,59.174-10.679,14.084-48.69,9.1-72.849,9.1-16.177,0-43.022,3.518-53.5-3.414-18.166-12.022-12.521-53.416-12.52-83.072V422.736c0-30.951-7.474-80.45,14.8-89.9,9.544-6.243,32.769-3.414,47.807-3.414H858.608c21.023,0,38.356-1.029,46.669,11.38,12.272,18.319,5.961,70.114,21.627,83.072,15.64,9.345,18.866-5.792,21.627-18.208,4.284-19.271,4.3-60.043,18.212-70.554,10.036-7.584,30.2-5.689,47.807-5.69H1126.1c18.92,0,40.16-2.188,48.94,7.966,12.67,14.648,6.83,59.478,6.83,85.348V649.192c0,30.7,6.75,78.82-12.52,91.037-10.74,6.815-37.12,3.414-53.5,3.414-23.15,0-60.64,4.849-71.71-7.966-9.81-11.365-6.83-38.293-6.83-59.174V530.843Zm194.65-201.421h190.08c31.1,0,70.84-4.135,97.89,2.276q3.99,5.121,7.97,10.242v89.9c-1.88,5.917-8.25,8.821-12.52,12.517-41.69-.2-109.97-6.258-145.69,2.276-36.18,49.9,82.96,26.84,114.96,35.277,11.64,18.6,10.36,79.5,3.41,103.555-24.37,16.618-85.74,2.008-118.37,9.1q-3.99,5.121-7.97,10.242c-0.1,7.067.98,10.953,2.27,15.931,26.73,18.725,113.66,4.149,154.81,9.1,8.38,11.019,9.1,20.948,9.1,42.105s5.4,60.931-7.97,69.416c-10.37,6.587-39.67,2.276-54.63,2.276H1325.29c-35.15,0-89.41,7.279-106.99-11.38q-0.57-149.058-1.14-298.147,0.57-46.653,1.14-93.314C1220.78,334.446,1226.74,333.118,1231.96,329.422Zm355.13,6.828h183.26c22.5,0,58.3-4.492,71.71,5.69,8.51,6.459,13.13,80.27,7.97,100.141-7.37,28.358-91.5,18.209-128.62,18.208-14.53,0-38.55-3.474-44.4,5.69-5.21,6.643.35,12.094,4.56,15.931q15.36-2.276,30.73-4.552c42.89-7.858,96.32,10.217,117.24,26.174,54.65,41.679,43.82,178.475-5.69,216.214-46.8,35.674-138.12,37.46-209.44,21.621-24.15-5.362-57.81-4.039-63.74-27.311-2.29-8.992,1.01-20.615,2.27-27.311,4-21.116-.74-43.309,13.66-53.485,10.76-7.6,31.48-2.685,45.53,0,32.5,6.208,81.66,8.077,111.55,0,17.43-29.406-10.93-23.531-33.01-27.311-40.17-6.878-88.83,2.792-127.48-4.552-8.28-13.988-2.3-45.945-2.28-67.14q2.85-89.322,5.69-178.661c2.47-9.456,9.53-12.717,15.94-18.208C1584.06,337.009,1585.57,336.63,1587.09,336.25Z" />
          </svg> */}
          <div className='header__logo grit' />
          <div className='header__svg grit' />
        </header>

        <section className='sect sect__one'>
          {/* <div className='sect__bar-one-svg grit' /> */}

          <p style={{ paddingTop: 20 }} className='text text--display text--white text--center grit'>
            i'm a full stack web dev.
          </p>
        </section>


        <section className='sect sect__two'>
          <div className='sect__box sect__intro'>
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
            </div>

            <p style={{ paddingBottom: 3 }} className='text text--display grit'>
              i like to create unique projects using tools like
              <span className='text__hover text__hover--pink'> javascript</span>,
              <span className='text__hover text__hover--blue'> react</span>,
              <span className='text__hover text__hover--pink'> gatsby</span>,
              <span className='text__hover text__hover--blue'> graphql</span>,
              <span className='text__hover text__hover--pink'> css/scss</span>,
              <span className='text__hover text__hover--blue'> photoshop</span>,
              and <span className='text__hover text__hover--pink'>node</span>.
            </p>

            <div className='sect__box-svg grit' />
          </div>
        </section>

        <section className='sect sect__one sect__divider'>
          <div className='sect__bar-one-svg grit' />
        </section>

        <section className='portfolio first'>
          <ScrollTrigger onEnter={onEnter} onExit={onLeave} onProgress={handleProgressColors} />
          <div className='portfolio__item grit'>
            <div className='portfolio__item-inner'>
              <div className='portfolio__item-img'>
                <div className='portfolio__item-blob'>
                  <Blobs1 />
                </div>
                <div className='portfolio__item-img--drafty' />
              </div>
              <div className='portfolio__item-description'>
                <h2 className='grit'><a data-text='drafty' href='https://drafty.cc' title='drafty website'>drafty</a></h2>
                <p className='text text--regular'>a webapp for people to write, format, and save notes, jokes, ideas, and anything in between.</p>
              </div>
            </div>

            {/* <svg className='portfolio__box portfolio__box-one desktop' fill="#f6edd4" xmlns="http://www.w3.org/2000/svg" width="1079" height="318" viewBox="0 0 1079 318">
              <path id="box3_1" data-name="box3 1" class="cls-1" d="M263.687,10.191h56.862c10.151,0,23.019-.865,31.477,1.017h26.4c18.359,0,34.169.751,48.738,4.066,10.656,2.425,21.965.908,31.477,3.049l22.339,1.016c13.291,2.932,29,3.066,42.646,6.1,7.936,1.764,22.078.4,28.431-1.016L576.426,23.4c14.542-3.207,32.031-3.049,49.754-3.049h17.261c21.333,4.648,47.174-3.644,68.031,1.017,18.938,4.231,36.187,7.115,59.908,7.115h17.261c10.051-2.2,20.973-3.909,30.462-6.1l37.569-1.016c7.276-1.561,21.156-1.621,28.431,0H903.38C919.5,25,934.4,29.562,954.149,29.5c26.373-.078,75.321-9.129,92.4,3.049,6.52,4.653,5.88,10.933,9.14,19.313,0.99,2.562,4.22,6.01,5.07,9.148,2.67,9.77-3.39,16.131-5.07,21.346v35.576c2.95,11.023,13.86,24.314,9.14,41.676-1.28,4.67-5.93,10.5-7.11,14.23-1.42,4.481,3.14,14.267,4.06,18.3,2.51,10.968-2.08,25.823-4.06,34.56-3.15,13.886,4.2,25.279,1.01,36.593-5.27,18.754-30.06,29.549-48.73,34.56-11.886,3.187-25.236,0-38.589,0H904.4c-9.234-2.1-19.659-4.936-28.431-7.116-8.7-2.162-25.333-.577-32.492,1.017H826.211c-6.649,1.466-15.83,2.586-22.339,4.066L761.226,294.8c-29.621,6.437-62.078-4.063-92.4-4.066H649.534c-6,1.313-16.1-.57-23.354,1.017l-62.954,5.082C538.139,302.633,513.434,307,482,307H452.549c-23.589-5.182-51.288-5.71-75.138-11.181l-39.6,3.049c-20.073.019-41.526-1.605-58.893,0-38.64,3.573-88.9,7.122-124.892-1.016l-33.508,1.016c-15.744-3.5-31.035-5.8-44.677-10.164-13.087-4.189-26.941-2.193-36.554-9.149-4.735-3.426-6.846-9.247-10.154-14.23-9.484-14.287-16.568-24.958-11.169-48.791q0.508-9.147,1.015-18.3c2.631-10.673,10.006-29.08,6.092-43.709-0.957-3.577-4.008-8.644-5.077-12.2l-2.031-18.3c-2.693-8.891-10.567-20-7.108-34.56,1.827-7.691,5.188-16.083,7.108-23.379,2.841-10.794.756-23.2,6.092-31.511,7.023-10.94,35.657-16.344,56.862-12.2,17.78,3.477,58.9,1.715,80.216-3.049h18.277c12.5-2.757,28.289-1.272,40.615-4.066C231.636,12.641,255.237,15.551,263.687,10.191Z" />
            </svg> */}

            <svg
              fill='#f6edd4'
              className='portfolio__box desktop'
              xmlns="http://www.w3.org/2000/svg"
              width="1079"
              height="318" viewBox="0 0 1079 318">
              <path id="box1" d="M263.687,10.191h56.862c10.151,0,23.019-.865,31.477,1.017h26.4c18.359,0,34.169.751,48.738,4.066,10.656,2.425,21.965.908,31.477,3.049l22.339,1.016c13.291,2.932,29,3.066,42.646,6.1,7.936,1.764,22.078.4,28.431-1.016L576.426,23.4c14.542-3.207,32.031-3.049,49.754-3.049h17.261c21.333,4.648,47.174-3.644,68.031,1.017,18.938,4.231,36.187,7.115,59.908,7.115h17.261c10.051-2.2,20.973-3.909,30.462-6.1l37.569-1.016c7.276-1.561,21.156-1.621,28.431,0H903.38C919.5,25,934.4,29.562,954.149,29.5c26.373-.078,75.321-9.129,92.4,3.049,6.52,4.653,5.88,10.933,9.14,19.313,0.99,2.562,4.22,6.01,5.07,9.148,2.67,9.77-3.39,16.131-5.07,21.346v35.576c2.95,11.023,13.86,24.314,9.14,41.676-1.28,4.67-5.93,10.5-7.11,14.23-1.42,4.481,3.14,14.267,4.06,18.3,2.51,10.968-2.08,25.823-4.06,34.56-3.15,13.886,4.2,25.279,1.01,36.593-5.27,18.754-30.06,29.549-48.73,34.56-11.886,3.187-25.236,0-38.589,0H904.4c-9.234-2.1-19.659-4.936-28.431-7.116-8.7-2.162-25.333-.577-32.492,1.017H826.211c-6.649,1.466-15.83,2.586-22.339,4.066L761.226,294.8c-29.621,6.437-62.078-4.063-92.4-4.066H649.534c-6,1.313-16.1-.57-23.354,1.017l-62.954,5.082C538.139,302.633,513.434,307,482,307H452.549c-23.589-5.182-51.288-5.71-75.138-11.181l-39.6,3.049c-20.073.019-41.526-1.605-58.893,0-38.64,3.573-88.9,7.122-124.892-1.016l-33.508,1.016c-15.744-3.5-31.035-5.8-44.677-10.164-13.087-4.189-26.941-2.193-36.554-9.149-4.735-3.426-6.846-9.247-10.154-14.23-9.484-14.287-16.568-24.958-11.169-48.791q0.508-9.147,1.015-18.3c2.631-10.673,10.006-29.08,6.092-43.709-0.957-3.577-4.008-8.644-5.077-12.2l-2.031-18.3c-2.693-8.891-10.567-20-7.108-34.56,1.827-7.691,5.188-16.083,7.108-23.379,2.841-10.794.756-23.2,6.092-31.511,7.023-10.94,35.657-16.344,56.862-12.2,17.78,3.477,58.9,1.715,80.216-3.049h18.277c12.5-2.757,28.289-1.272,40.615-4.066C231.636,12.641,255.237,15.551,263.687,10.191Z" />
              {/* <path id="box1b" style={{ visibility: 'hidden' }} d="M151.02,7.154c37.5,0.173,76.006-.161,114.267,6.915l47.694,1.976,68.56,7.9,61.605-1.976,45.707-8.89h83.465c17.3-3.024,43.1-2.016,59.617.988l64.586-3.951c30.507,5.518,61.228,3.048,92.407,9.878l36.764,9.878,25.834-.988,33.784-1.976c37.6-8.213,70.405-20.842,112.279-9.878,8.511,2.23,16.271,1.94,22.851,5.927,12.75,7.725,15.92,21.7,21.86,36.549,13.03,32.552,35.72,114.452,24.84,155.087-4.17,15.608-8.93,43.652-20.86,52.355-21.53,15.7-114,28.4-157,22.719-15.2-2.007-35.728-4.145-51.668-.987-58.218,11.532-129.3,8.914-199.719,8.89l-80.484-.988c-24.009,4.375-53.011,14.18-82.471,8.89-16.383-2.941-56.551-8.97-73.528-5.926l-30.8,2.963c-20.819,4.116-50.5,11.842-77.5,6.915-33.223-6.062-64.81-10.712-96.382-16.793l-52.662-.988c-13.224-2.521-26.777-6.459-43.72-4.939-18.7,1.677-38.8,2.233-55.643-3.951-17.052-6.26-37.812-49.513-31.8-78.038,2.244-10.638,9.739-20.739,6.955-35.561C17.352,155.792,4.5,148.03,8.932,130.631L26.817,91.119q-0.5-7.9-.994-15.805C28.957,60.737,28.214,44.3,39.734,35.8c21.575-15.909,58.32-18.779,88.433-25.683Z" /> */}
            </svg>

            <div className='portfolio__box portfolio__box-one mobile' />

          </div>
        </section>

        {/* <div className='portfolio-divider'>
          <div className='portfolio-divider__bar-one grit' />
          <div className='portfolio-divider__bar-two grit' />
        </div> */}

        <section className='portfolio'>
          <div className='portfolio__item grit'>
            <div className='portfolio__item-inner'>
              <div className='portfolio__item-img'>
                <div className='portfolio__item-blob'>
                  <Blobs2 />
                </div>
                <div className='portfolio__item-img--zalories' />
              </div>
              <div className='portfolio__item-description'>
                <h2 className='grit'><a data-text='zalories' href='#' title='zalories website'>zalories</a></h2>
                <p className='text text--regular'>a super simple calorie tracking webapp.</p>
              </div>
            </div>
            <div className='portfolio__box portfolio__box-two' />
          </div>
        </section>

        <section className='portfolio'>
          <div className='portfolio__item grit'>
            <div className='portfolio__item-inner'>
              <div className='portfolio__item-img'>
                <div className='portfolio__item-blob'>
                  <Blobs3 />
                </div>
                <div className='portfolio__item-img--nrdstr' />
              </div>
              <div className='portfolio__item-description'>
                <h2 className='grit'><a data-text='nrdstr' href='https://nrdstr.com' title='nrdstr website'>nrdstr</a></h2>
                <p className='text text--regular'>a digital design agency that offers graphic design, website design and development, and more.</p>
              </div>
            </div>
            <div className='portfolio__box portfolio__box-three' />
          </div>
          <ScrollTrigger onEnter={onEnter} onExit={onLeave} onProgress={handleProgressDark} />
        </section>

        <section className='sect sect__divider'>
          <div className='sect__bar-two-svg grit' />
        </section>

        <section className='sect sect__two sec__art' style={{ top: -8 }}>
          <div className='sect__box'>
            {/* <div className='skill-icon skill-icon--photoshop grit' /> */}

            <div className='video'>
              <iframe className='video-iframe' src="https://www.youtube.com/embed/jDo6Q1lFgys" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>



            <div className='sect__box-svg sect--flip grit' />
          </div>
        </section>

        <section className='sect__photoshop'>
          <p style={{ paddingTop: 20 }} className='text text--display text--white grit'>
            i also love to play around in <span className='text--pink'>photoshop</span> to see what i can come up with.
          </p>
          <div className='photoshop-grid__container'>
            <div id='ig' className='photoshop-grid'>
              {portfolioQuery.allFile.edges.map((item, i) => {
                return <Img
                  key={i}
                  className='photoshop-grid__img'
                  alt={'photoshop portfolio item'}
                  fluid={item.node.childImageSharp.fluid} />
              })}
            </div>
          </div>
        </section>


        <footer className='footer'>
          {/* <BlobNew /> */}
          <svg onClick={blobTransformA} style={{ zIndex: 2 }} id='blob-test' fill='#111' xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
            <path id="blob1" dataname="Shape 321 1" className="cls-1" d="M136.577,5c24.593-.3,35.979,9.227,52.474,15.823C236.4,39.758,274.735,66.355,290.04,116.752c2.73,8.991,1.124,16.99,2.97,27.691L294,178.067l-8.911,36.591c-3.848,9.252-11.3,14.506-16.831,21.757-33.631,44.11-47.675,46.752-112.869,58.349-30.609,5.444-52.529-8.193-70.3-15.823-43.966-18.884-59.566-31.629-72.276-82.084-3.309-13.136-8.731-36.192-3.96-53.4,5.9-21.269,25.34-66.237,37.623-82.084C56.375,48.6,73.67,41.142,87.073,31.7L107.865,14.89C116.076,9.861,127.893,10,136.577,5Z" />
            <path id="blob2" style={{ visibility: 'hidden' }} dataname="Shape 320 1" className="cls-1" d="M136.168,3.74c29.047,7.55,67.8,24.97,80.991,37.471,36.694,34.781,50.7,16.043,67.83,66.84,3.074,9.117,4.187,30.565,6.074,41.522,0.338,11.477-1.349,26-1.012,37.471-3.037,12.489-4.05,15.867-7.087,28.357-3.935,9.473-24.718,24.981-30.371,32.407-34.388,45.169-32.625,17.471-89.09,42.534-29.058,12.9-61.811,1.738-79.979-6.076-44.956-19.337-59.9-18.211-72.892-69.878-3.384-13.453,6.408-57.679,7.087-75.955,0.971-26.17,13.762-60.739,26.322-76.967C54.16,48.393,51.6,38.726,65.3,29.059c7.086-5.738,26.12-8.418,41.507-15.191C115.205,8.718,114.728,8.83,136.168,3.74Z" />
          </svg>
          {/* <a href='mailto:jamesobriendev@gmail.com' title='email me' className='img__mail grit' /> */}
          <div className='socials'>
            <a className='link icon icon--github grit' href='https://github.com/jamesfromonline' />
            <a className='link icon icon--codepen grit' href='https://codepen.io/jamesfromonline' />
            <a className='link icon icon--linkedin grit' href='https://linkedin.com/in/jamesfromonline' />
          </div>
          <h3 className='footer__tagline text text--black text--display text--center grit'>
            <span className='footer__blob-green' />
            available for hire
          </h3>
          <div className='footer__svg grit' />
        </footer>
      </Layout>
    )
  )
}

export default IndexPage