import React from 'react'
import Email from '../email/Email'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='footer'>
            <h3 style={{ marginTop: 40 }} className='footer__tagline text text--black text--bold text--center grit'>
                <span className='footer__blob-green' />
            available
          </h3>
            <div className='social-icons'>
                <a className='link social-icon social-icon--github grit' href='https://github.com/jamesfromonline' />
                <a className='link social-icon social-icon--codepen grit' href='https://codepen.io/jamesfromonline' />
                <a className='link social-icon social-icon--linkedin grit' href='https://linkedin.com/in/jamesfromonline' />
            </div>
            <Email />
            <p className=' text text--small text--black footer__copyright grit'>&copy;<strong>jame5</strong> {year}</p>
            <div className='footer__svg grit' />
        </footer>
    )
}

export default Footer