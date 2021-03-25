import React, { useState, useRef } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import SkillIcons from '../skill-icons/SkillIcons'

const IntroBox = () => {
  const [isIntroAnimationToggled, setIsIntroAnimationToggled] = useState(false)
  const intro = useRef(null)

  const toggleIntroAnimation = () => {
    if (!isIntroAnimationToggled) {
      intro.current.classList.add('skills-section--active')
    } else {
      intro.current.classList.remove('skills-section--active')
    }
    setIsIntroAnimationToggled(!isIntroAnimationToggled)
  }

  return (
    <section className='section section--regular section__introbox'>
      <div ref={intro} className='section__box skills-section'>
        <SkillIcons />
        <p style={{ paddingBottom: 3 }} className='text text--display grit'>
          i like to create unique projects using tools like
              <span className='text__hover text__hover--pink'> javascript</span>,
              <span className='text__hover text__hover--blue'> react</span>,
              <span className='text__hover text__hover--pink'> gatsby</span>,
              <span className='text__hover text__hover--blue'> css/scss</span>,
              <span className='text__hover text__hover--pink'> photoshop</span>,
              and <span className='text__hover text__hover--blue'>node</span>.
            </p>

        <div className='section__box-svg grit' />
      </div>
      <ScrollTrigger onEnter={toggleIntroAnimation} onExit={toggleIntroAnimation} />
    </section>
  )
}

export default IntroBox