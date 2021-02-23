import React from 'react'

const Footer = () => {

    return (
        <footer className='footer'>
            <svg style={{ zIndex: 2 }} id='blob-test' fill='#111' xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
                <path id="blob1" dataname="Shape 321 1" className="cls-1" d="M136.577,5c24.593-.3,35.979,9.227,52.474,15.823C236.4,39.758,274.735,66.355,290.04,116.752c2.73,8.991,1.124,16.99,2.97,27.691L294,178.067l-8.911,36.591c-3.848,9.252-11.3,14.506-16.831,21.757-33.631,44.11-47.675,46.752-112.869,58.349-30.609,5.444-52.529-8.193-70.3-15.823-43.966-18.884-59.566-31.629-72.276-82.084-3.309-13.136-8.731-36.192-3.96-53.4,5.9-21.269,25.34-66.237,37.623-82.084C56.375,48.6,73.67,41.142,87.073,31.7L107.865,14.89C116.076,9.861,127.893,10,136.577,5Z" />
                <path id="blob2" style={{ visibility: 'hidden' }} dataname="Shape 320 1" className="cls-1" d="M136.168,3.74c29.047,7.55,67.8,24.97,80.991,37.471,36.694,34.781,50.7,16.043,67.83,66.84,3.074,9.117,4.187,30.565,6.074,41.522,0.338,11.477-1.349,26-1.012,37.471-3.037,12.489-4.05,15.867-7.087,28.357-3.935,9.473-24.718,24.981-30.371,32.407-34.388,45.169-32.625,17.471-89.09,42.534-29.058,12.9-61.811,1.738-79.979-6.076-44.956-19.337-59.9-18.211-72.892-69.878-3.384-13.453,6.408-57.679,7.087-75.955,0.971-26.17,13.762-60.739,26.322-76.967C54.16,48.393,51.6,38.726,65.3,29.059c7.086-5.738,26.12-8.418,41.507-15.191C115.205,8.718,114.728,8.83,136.168,3.74Z" />
            </svg>
            {/* <a href='mailto:jamesobriendev@gmail.com' title='email me' className='img__mail grit' /> */}
            <div className='socials'>
                <a className='link icon icon--github grit' href='https://github.com/jamesfromonline' />
                <a className='link icon icon--codepen grit' href='https://codepen.io/jamesfromonline' />
                <a className='link icon icon--linkedin grit' href='https://linkedin.com/in/jamesfromonline' />
            </div>
            <h3 className='footer__tagline text text--black text--display text--center grit'>
                <span className='footer__blob-green' />
            available for hire
          </h3>
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