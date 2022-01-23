import React from 'react'
import Email from '../email/Email'

const Footer = () => (
    <footer className='footer'>
        {/* <p className='text text--regular text--bold footer__hire-me'><span>available</span> for hire.</p> */}
        <div className='social-icons'>
            <a className='link social-icon social-icon--github grit' href='https://github.com/jamesfromonline' />
            <a className='link social-icon social-icon--codepen grit' href='https://codepen.io/jamesfromonline' />
        </div>
        <Email />
        <p className=' text text--small text--black footer__copyright grit'>
            &copy; {new Date().getFullYear()} <strong> jame5.co</strong>
        </p>
        <div className='footer__svg grit' />
    </footer>
)

export default Footer