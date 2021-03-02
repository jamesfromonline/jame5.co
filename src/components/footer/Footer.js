import React from 'react'
import Email from '../email/Email'

const Footer = () => (
    <footer className='footer'>
        <h3 style={{ marginTop: 40, padding: '3px 7px' }} className='footer__tagline text text--black text--bold text--center grit'>
            <span className='footer__blob-green' />
        available for hire
        </h3>
        <div className='social-icons'>
            <a className='link social-icon social-icon--github grit' href='https://github.com/jamesfromonline' />
            <a className='link social-icon social-icon--codepen grit' href='https://codepen.io/jamesfromonline' />
            <a className='link social-icon social-icon--linkedin grit' href='https://linkedin.com/in/jamesfromonline' />
        </div>
        <Email />
        <p className=' text text--small text--black footer__copyright grit'>&copy;<strong>jame5</strong> {new Date().getFullYear()}</p>
        <div className='footer__svg grit' />
    </footer>
)

export default Footer