import React, {useEffect, useState} from 'react'
import API from "../utils/API"

// get data and display.
function Create() {
    const [character, setCharacter] = useState([])

    useEffect(()=> {
        loadCharacters()
    }, [])

    function loadCharacters() {
        API.getCharacters()
            .then(res =>
                setCharacter(res.data)
            )
            .catch(err => console.log(err));
    };
    return (
        <div className="Create">
            <div className="text-center">
                <h1>Create character</h1>
                {/* <span className="success-message">{successMessage}</span> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Character name"
                            name="CharacterName"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create