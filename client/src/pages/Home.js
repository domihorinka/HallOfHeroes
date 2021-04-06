import React, { useState } from 'react'
// import Nav from '../components/Nav'
import Question from "./Question"
import Modal from '../components/Modal/Modal'
import Questionaire from './Question'
import AuthNav from "../components/AuthNav/AuthNav"
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function Home() {
    const { isAuthenticated } = useAuth0();

    const [showModal, setShowModal] = useState(false)


    return (
        <>
            <button onClick={() => setShowModal(true)}>
                New Character
            </button>

            <Modal open={showModal} onCancel={() => setShowModal(false)}>

                <Questionaire />
            </Modal>
            <h1>Hello and Welcome! to Hall of Heroes</h1>
        </>

    )
}

export default Home
