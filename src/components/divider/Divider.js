import React from 'react'

const Divider = ({ num }) => {

    return (
        <section className='section section__divider'>
            <div className={`section__bar-${num}-svg grit`} />
        </section>
    )
}

export default Divider