import React from 'react';
import '../App.css';  // Ensure you import the stylesheet

function ConfirmModal({ show, onClose, message }) {
    if (!show) {
        return null;
    }

    return (
        <div className="confirmModal">
            <div className="confirmModalHeader">
                <span>Confirm File Delete</span>
                <button className="closeBtn" onClick={() => onClose(false)}>X</button>
            </div>
            <div className="confirmModalBody">
                <span>{message}</span>
            </div>
            <div className="confirmModalFooter">
                <button className="confirmBtn" onClick={() => onClose(false)}>Confirm</button>
            </div>
        </div>
    );
}

export default ConfirmModal;
