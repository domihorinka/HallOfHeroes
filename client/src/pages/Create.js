import React, { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
// import Modal from '../components/Modal/Modal.js'
import API from "../utils/API"

// get data and display.
function Create() {
    const[successMessage, setSuccessMessage] = useState("")
    const [character, setCharacter] = useState([])
    const [formObject, setFormObject]= useState({})

      function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };


  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.class) {
      API.saveCharacter({
        name: formObject.name,
        class: formObject.class,
        level: formObject.level,
        hp: formObject.hp,
        strength: formObject.strength,
        dexterity: formObject.dexterity,
        constitution: formObject.constitution,
        intelligence: formObject.intelligence,
        wisdom: formObject.wisdom,
        charisma: formObject.charisma,
        inventory: formObject.inventory,
        background: formObject.background,
        appearance: formObject.appearance,

      })
        .then.create();
    }
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
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            placeholder="Character name"
                            name="name"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            placeholder="class"
                            name="class"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="number"
                            className="form-control"
                            placeholder="level"
                            name="level"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="number"
                            className="form-control"
                            placeholder="hit points"
                            name="hp"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="number"
                            className="form-control"
                            placeholder="Strength"
                            name="strength"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="number"
                            className="form-control"
                            placeholder="dexterity"
                            name="dexterity"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="number"
                            className="form-control"
                            placeholder="constitution"
                            name="constitution"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="number"
                            className="form-control"
                            placeholder="intelligence"
                            name="intelligence"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="number"
                            className="form-control"
                            placeholder="wisdom"
                            name="wisdom"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="number"
                            className="form-control"
                            placeholder="charisma"
                            name="charisma"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            placeholder="what items and gold does your character have?"
                            name="inventory"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            placeholder="What is your character's background"
                            name="background"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <div className="text-center">
                            <input 
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            placeholder="Describe your character's appearance."
                            name="appearance"
                            // ref={
                            //     register({
                            //         required: "Please name your character"
                            //     })
                            // }
                            />
                            <div className="line"></div>
                        </div>
                        <button className="btn-main-offer create-btn" onClick={handleFormSubmit} type="submit">create character</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create