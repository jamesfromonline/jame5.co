import React from 'react'

const SkillIcon = ({ skill }) => (
    <div className='skill-icon'>
        <div className={`skill-icon--${skill} grit`} />
        <div className={`skill-icon--${skill}-pink grit`} />
        <div className={`skill-icon--${skill}-blue grit`} />
    </div>
)

export default SkillIcon