import React, { useState, useRef } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

const IntroBox = () => {
  const [isIntroAnimationToggled, setIsIntroAnimationToggled] = useState(false)
  const intro = useRef(null)

  const toggleIntroAnimation = () => {
    if (!isIntroAnimationToggled) {
      console.log('this one')
      intro.current.classList.add('sect__intro--active')
    } else {
      intro.current.classList.remove('sect__intro--active')
    }
    setIsIntroAnimationToggled(!isIntroAnimationToggled)
  }

  return (
    <section className='sect sect__two'>
      <div ref={intro} className='sect__box sect__intro'>
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
      <ScrollTrigger onEnter={toggleIntroAnimation} onExit={toggleIntroAnimation} />
    </section>
  )
}

export default IntroBox