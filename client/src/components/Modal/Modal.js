import React from 'react'
import './Modal.css'

function Modal({ open, children, onCancel }) {
    if (!open) return null
    return (
        <>
            <div className='overlay' />
            <form className='modal'>
                {children}
                <button onClick={onCancel}>Cancel</button>
            </form>
        </>
    )
}

export default Modal
