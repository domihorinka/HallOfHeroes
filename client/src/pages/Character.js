import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import API from "../utils/API"

const Details = () => {

  const [character, setCharacter] = useState([])
  const [formObject, setFormObject] = useState({})
  //specifies which character we are viewing with id
  const { id } = useParams()

  function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({...formObject, [name]: value})
  }

  function loadCharacter() {

    // console.log(id)
    API.getCharacter(id)
      .then(res =>
        setCharacter(res.data)
      )
      .catch(err => console.log(err));
  }

  useEffect(() => {
    loadCharacter()
  }, [])

  // function handleFormSubmit(event,r) {
  // // event.preventDefault();
  // if (formObject.name && formObject.class) {
  //   API.saveCharacter({
  //     name: formObject.name,
  //     class: formObject.class,
  //     level: formObject.level,
  //     hp: formObject.hp,
  //     strength: formObject.strength,
  //     dexterity: formObject.dexterity,
  //     constitution: formObject.constitution,
  //     intelligence: formObject.intelligence,
  //     wisdom: formObject.wisdom,
  //     charisma: formObject.charisma,
  //     inventory: formObject.inventory,
  //     background: formObject.background,
  //     appearance: formObject.appearance,

  //     })

  //     .then(() => {
  //         r.target.reset()
  //       }).catch(err => console.log(err));
  //   }

  return (
    <>
    <div className="Character">
      <div className="text-center">
        <h1>{character.name}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              placeholder={character.class}
              />
            </div>
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="number"
              className="form-control"
              placeholder={character.level}
              />
            </div>
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="number"
              className="form-control"
              placeholder={character.hp}
              />
            </div>
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="number"
              className="form-control"
              placeholder={character.strength}
              />
            </div>
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="number"
              className="form-control"
              placeholder={character.dexterity}
              />
            </div>
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="number"
              className="form-control"
              placeholder={character.constitution}
              />
            </div>
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="number"
              className="form-control"
              placeholder={character.intelligence}
              />
            </div>
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="number"
              className="form-control"
              placeholder={character.wisdom}
              />
            </div>
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="number"
              className="form-control"
              placeholder={character.charisma}
              />
            </div>
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              placeholder={character.inventory}
              />
            </div>
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              placeholder={character.background}
              />
            </div>
            <div className="text-center">
              <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              placeholder={character.appearance}
              />
            </div>
            {/* <button className="btn-main-offer create-btn" onClick={handleInputChange} type="submit"></button> */}
          </div>
        </div>
      </div>
    </div>



    </>
     ) 
}

export default Details
