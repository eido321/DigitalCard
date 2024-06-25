import React from 'react';
import '../App.css';
import pdf from '../assets/CV.pdf';

function AdobeWindow({ display, setDisplay }) {
    if (!display) {
        return null;
    }

    return (
        <div className='adobeWindow'>
            <button className='exit' onClick={() => setDisplay(false)} />
            <iframe
                title="Resume"
                src={pdf}
                className='pdf'
            ></iframe>
        </div>
    );
}

export default AdobeWindow;
