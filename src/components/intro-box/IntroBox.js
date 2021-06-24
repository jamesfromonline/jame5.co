import React, { useState, useRef } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import SkillIcons from '../skill-icons/SkillIcons'

const IntroBox = () => {
  const [animate, setAnimate] = useState(false)
  const intro = useRef(null)

  const toggleAnimation = () => {
    if (!animate) {
      intro.current.classList.add('skills-section--active')
    } else {
      intro.current.classList.remove('skills-section--active')
    }
    setAnimate(!animate)
  }

  return (
    <section className='section section--regular section__introbox'>
      <div ref={intro} className='section__box skills-section'>
        <SkillIcons />
        <p style={{ paddingBottom: 3 }} className='text text--display grit'>
          i like to create unique projects using tools like
              <span className='text__hover text__hover--pink'> javascript</span>,
              <span className='text__hover text__hover--blue'> react</span>,
              <span className='text__hover text__hover--pink'> graphql</span>,
              <span className='text__hover text__hover--blue'> css</span>,
              <span className='text__hover text__hover--pink'> photoshop</span>,
              and <span className='text__hover text__hover--blue'>node</span>.
            </p>
        <ScrollTrigger onEnter={toggleAnimation} onExit={toggleAnimation} />
        <div className='section__box-svg grit' />
      </div>
    </section>
  )
}

export default IntroBox