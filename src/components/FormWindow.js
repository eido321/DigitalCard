import React, { useState } from 'react';
import '../App.css';
import ConfirmModal from './ConfirmModal';
import axios from 'axios';
var config = require('../config.js');

function FormWindow({ display, setDisplay }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(config.api.invokeUrl, {
                subject: title,
                body: content
            });

            if (response.status === 200) {
                setModalMessage('Email was sent successfully.');
            } else {
                setModalMessage('Failed to send email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setModalMessage('Failed to send email.');
        }

        setShowModal(true);
        setTitle('');
        setContent('');
    };

    if (!display) {
        return null;
    }

    return (
        <div className='formWindow'>
            <button className='exit' onClick={() => setDisplay(false)} />
            <form className='form' onSubmit={handleSubmit} style={{ height: '60%' }}>
                <div className='formHeader'>
                    <span>Send a mail to contact with me</span>
                </div>
                <div className='emailFormBody'>
                    <div className='formGroup'>
                        <label htmlFor='title'>Title:</label>
                        <input
                            style={{ width: '80%' }}
                            type='text'
                            id='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='formGroup'>
                        <label htmlFor='content'>Content:</label>
                        <textarea
                            style={{ width: '80%' }}
                            id='content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                        <button className='submitBtn' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
            <ConfirmModal show={showModal} onClose={() => setShowModal(false)} message={modalMessage} />
        </div>
    );
}

export default FormWindow;
