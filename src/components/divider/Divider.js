import React from 'react'

const Divider = ({ num }) => {

    return (
        <section className='sect sect__divider'>
            <div className={`sect__bar-${num}-svg grit`} />
        </section>
    )
}

export default Divider