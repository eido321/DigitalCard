import React from 'react';
import '../App.css';

function File({text, click}) {
    return (
        <button className='fileContainer' onClick={()=>click(true)}>
            <div className='file' />
            <span className='fileName'>{text}</span>
        </button>
    );
}

export default File;