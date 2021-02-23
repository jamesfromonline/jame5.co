import React from 'react'

const PhotoshopBox = () => {
    return (
        <section className='sect sect__two sec__art' style={{ top: -8 }}>
            <div className='sect__box'>
                <div className='video'>
                    <iframe title='photoshop video' className='video-iframe' src="https://www.youtube.com/embed/jDo6Q1lFgys" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='sect__box-svg sect--flip grit' />
            </div>
        </section>
    )
}

export default PhotoshopBox