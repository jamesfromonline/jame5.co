import React from 'react'

const PhotoshopBox = () => {
    return (
        <section className='section section--regular' style={{ top: -8 }}>
            <div className='section__box'>
                <div className='photoshop__video'>
                    <iframe title='photoshop video' className='photoshop__video-iframe' src="https://www.youtube.com/embed/jDo6Q1lFgys" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='section__box-svg section--flip grit' />
            </div>
        </section>
    )
}

export default PhotoshopBox