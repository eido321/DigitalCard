import React from 'react';
import '../App.css';

function FileManager({ display, setDisplay, adobe }) {
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
                <div className='adobeIcon' />
                <span className='adobeFleName'>
                    CV
                </span>
            </button>
        </div>
    );
}

export default FileManager;