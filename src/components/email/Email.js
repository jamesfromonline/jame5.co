import React, { useState } from 'react'
import Mailto from 'react-protected-mailto'


const Email = () => {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => !visible && setVisible(true)
    const contactText = visible ? (
        <Mailto email='jamesfromonline@gmail.com' />
    ) : 'click/tap to show email'

    return (
        <div role='button'
            onClick={toggleVisible}
            style={{ zIndex: 2 }}
            className='email grit'>
            <div className={`text text--white text--bold email__msg ${visible ? 'email__msg--active' : 'email__msg--inactive'}`}>
                {contactText}
            </div>
        </div>
    )
}

export default Email