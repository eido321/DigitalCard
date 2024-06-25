import React from 'react';
import '../App.css';

function Footer({ setDisplay }) {
    return (
        <footer className='footer'>
            <div className='startBtn' />
            <button className='taskBtn' onClick={() => setDisplay(true)} />
            <div className='TlBtn' />
        </footer>
    );
}

export default Footer;