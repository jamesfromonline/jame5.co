import React from 'react'

const Divider = ({ num }) => (
    <section className='section section__divider'>
        <div className={`section__bar-${num}-svg grit`} />
    </section>
)

export default Divider