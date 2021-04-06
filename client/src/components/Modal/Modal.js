import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

function Modal({ open, children, onCancel }) {
    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div className='overlay' />
            <form className='modal'>
                {children}

            </form>
        </>,
        document.getElementById('portal')
    )
}

export default Modal