import React from 'react';
import '../App.css';

function ExFileManager({ display, setDisplay, adobe }) {
    if (!display) {
        return null;
    }

    const handleClick = () => {
        setDisplay(false);
        adobe(true);
    }

    return (
        <div className='fileWindow'>
            <button className='adobeFile' onClick={() => {handleClick()}}>
                <div className='exIcon' />
                <span className='adobeFleName'>
                    Contact_Me
                </span>
            </button>
        </div>
    );
}

export default ExFileManager;