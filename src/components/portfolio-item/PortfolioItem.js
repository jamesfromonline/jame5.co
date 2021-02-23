import React from 'react'
import { Blobs1, Blobs2, Blobs3 } from '../blobs/blobs'

const PortfolioItem = ({ name, url, description, box }) => {

    const Blobs = () => {
        if (box === 'one') {
            return <Blobs1 />
        } else if (box === 'two') {
            return <Blobs2 />
        } else {
            return <Blobs3 />
        }
    }

    return (
        <section className='portfolio'>
            <div className='portfolio__item grit'>
                <div className='portfolio__item-inner'>
                    <div className='portfolio__item-img'>
                        <div className='portfolio__item-blob'>
                            <Blobs />
                        </div>
                        <div className={`portfolio__item-img--${name}`} />
                    </div>
                    <div className='portfolio__item-description'>
                        <h2 className='grit'>
                            <a data-text={name} href={url} title={`${name} website`}>
                                {name}
                            </a>
                        </h2>
                        <p className='text text--regular'>
                            {description}
                        </p>
                    </div>
                </div>
                <div className={`portfolio__box portfolio__box-${box}`} />
            </div>
        </section>
    )
}

export default PortfolioItem