import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import Questionaire from './Question'
import About from '../components/About/About'
import { useAuth0 } from "@auth0/auth0-react";
import '../components/About/About.css'

function Home() {
    const { isAuthenticated } = useAuth0();

    const [showModal, setShowModal] = useState(false)


    return (
        <>
            <button className='modalBtn' onClick={() => setShowModal(true)}>
                New Character
            </button>

            <Modal open={showModal} onCancel={() => setShowModal(false)}>
                <Questionaire />
            </Modal>
            <About />
        </>

    )
}

export default Home
