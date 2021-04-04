import React, { useEffect, useState, useParams } from 'react'
import Button from '../components/Button/Button'
import Modal from '../components/Modal/Modal.js'
import API from "../utils/API"

// get data and display.
function Create() {
    const [character, setCharacter] = useState([])


    useEffect(() => {
        loadCharacters()
    }, [])

    function loadCharacters() {
        API.getCharacter()
            .then(res =>
                setCharacter(res.data)
            )
            .catch(err => console.log(err));
    };

    // ------ reusing useState for Modal component------ //
    const useModal = () => {
        const [value, setValue] = useState()

        return [value, setValue]
    }

    const [showModal, setShowModal] = useModal(false)


    return (
        <div>
            {/* trie to bring in component but wasn't sure how to pass onClick to component */}
            <button onClick={() => setShowModal(true)}>
                New Character
            </button>

            {/* <Modal open={showModal} onCancel={() => setShowModal(false)}>
                Modal works

            </Modal> */}
            {character.length ? (
                <div>
                    {character.map(char => {
                        return (
                            <div key={char.name}>
                                {char.name} by {char.class}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <h3>No Results to Display</h3>
            )}
        </div>
    )
}

export default Create