import React, { useState } from 'react';
import '../App.css';
import ConfirmModal from './confirmModal';

function FormWindow({ display, setDisplay }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [showModal, setShowModal] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, content);
        setTitle('');
        setContent('');
        setShowModal(true);
    }

    if (!display) {
        return null;
    }

    return (
        <div className='formWindow'>
            <button className='exit' onClick={() => setDisplay(false)} />
            <form className='form' style={{ height: '60%' }}>
                <div className='formHeader'>
                    <span>Send a mail to cantact withe me</span>
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
                        <button className='submitBtn' onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
            <ConfirmModal show={showModal} onClose={setShowModal} message={'Email was sent successfully.'} />
        </div>
    );
}

export default FormWindow;
