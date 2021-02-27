import React from 'react'
import Email from '../email/Email'

const Footer = () => {

    return (
        <footer className='footer'>
            <h3 style={{ marginTop: 40 }} className='footer__tagline text text--black text--display text--center grit'>
                <span className='footer__blob-green' />
            available for hire
          </h3>
            <Email />
            {/* <a href='mailto:jamesobriendev@gmail.com' title='email me' className='img__mail grit' /> */}
            <div className='social-icons'>
                <a className='link social-icon social-icon--github grit' href='https://github.com/jamesfromonline' />
                <a className='link social-icon social-icon--codepen grit' href='https://codepen.io/jamesfromonline' />
                <a className='link social-icon social-icon--linkedin grit' href='https://linkedin.com/in/jamesfromonline' />
            </div>
            <div className='footer__svg grit' />
        </footer>
    )
}

export default Footer


  // let blobTransformA = () => {
  //   KUTE.fromTo(
  //     "#blob1",
  //     { path: "#blob1" },
  //     { path: "#blob2" },
  //     {
  //       duration: 1000,
  //       repeat: 0
  //     }
  //   ).start()
  // }