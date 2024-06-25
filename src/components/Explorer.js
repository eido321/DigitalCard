import React, { useRef, useEffect } from 'react';
import '../App.css';
import QRCode from "qrcode.react";
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const pdfDownloadLink = "https://drive.google.com/uc?export=download&id=12LovFqUyOj_Zpms3FoTUMzQf8qMLQDmE";

function Explorer({ display, setDisplay }) {
    const qrCodeRef = useRef(null);
    const rainbowTextRef = useRef(null);

    useEffect(() => {
        if (display) {
            const text = "Download amazing CV here!!!";
            const rainbowTextContainer = rainbowTextRef.current;
            if (rainbowTextContainer) {
                rainbowTextContainer.innerHTML = ''; // Clear any existing content

                text.split('').forEach((letter, index) => {
                    const span = document.createElement('span');
                    span.style.animationDelay = `${index * 0.1}s`;
                    span.textContent = letter;
                    rainbowTextContainer.appendChild(span);
                });
            }
        }
    }, [display]);

    if (!display) {
        return null;
    }

    return (
        <div className='window'>
            <button className='exit' onClick={() => setDisplay(false)} />

            <div style={{ width: '100%', height: '80%', marginTop: '10%', alignItems: 'center' }}>
                <div className='body'>
                    <div className='leftSide'>
                        <div className='form'>
                            <div className='formHeader'>
                                <span>Welcome to my Digital Card!</span>
                            </div>
                            <div className='formBody'>
                                <div className='formGroup'>
                                    <label>Full Name</label>
                                    <input value={'Eido Peretz'} type='text' readOnly />
                                </div>
                                <div className='formGroup'>
                                    <label>Email</label>
                                    <input value={'eido2488@gmai.com'} type='text' readOnly />
                                </div>
                                <div className='formGroup'>
                                    <label>Phone</label>
                                    <input value={'052-7542999'} type='text' readOnly />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                                    <button className='submitBtn'>Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className='iconsCon'>
                            <a
                                href="https://github.com/eido321"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/eido-peretz-986171224/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                    <div className='rightSide'>
                        <div className='profile' >
                            <div className='profileImage' />
                        </div>
                    </div>
                    <div className='QR'>
                        <span ref={rainbowTextRef} className="rainbow-text">Download amazing CV here!!!</span>
                        <div style={{ width: 'fit-content', backgroundColor: 'white', padding: '2%' }}>
                            <QRCode value={pdfDownloadLink} size={64} ref={qrCodeRef} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explorer;
