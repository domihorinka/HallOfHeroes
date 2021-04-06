import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import API from "../utils/API"

const Details = () => {

  const [character, setCharacter] = useState([])

  //specifies which character we are viewing with id
  const { id } = useParams()

  console.log(id)



  function loadCharacter() {

    console.log(id)
    API.getCharacter(id)
      .then(res =>
        setCharacter(res.data)
      )
      .catch(err => console.log(err));
  }


  useEffect(() => {
    loadCharacter()
  }, [])



  return (
    <>
      {/* <h1>dexterity: {character.dexterity}</h1>
      <h1>constitution: {character.constitution}</h1>
      <h1>intelligence: {character.intelligence}</h1>
      <h1>wisdom: {character.wisdom}</h1>
      <h1>charisma: {character.charisma}</h1>
      <h1>inventory: {character.inventory}</h1>
      <h1>background: {character.background}</h1>
      <h1>appearance: {character.appearance}</h1>
       */}
    <div className="Character">
      <div className="text-center">
        <h1>{character.name}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <input
              type="text"
              className="form-control"
              placeholder={character.class}
              />
            </div>
            <div className="text-center">
              <input
              type="number"
              className="form-control"
              placeholder={character.level}
              />
            </div>
            <div className="text-center">
              <input
              type="number"
              className="form-control"
              placeholder={character.hp}
              />
            </div>
            <div className="text-center">
              <input
              type="number"
              className="form-control"
              placeholder={character.strength}
              />
            </div>
            <div className="text-center">
              <input
              type="number"
              className="form-control"
              placeholder={character.dexterity}
              />
            </div>
            <div className="text-center">
              <input
              type="number"
              className="form-control"
              placeholder={character.constitution}
              />
            </div>
            <div className="text-center">
              <input
              type="number"
              className="form-control"
              placeholder={character.intelligence}
              />
            </div>
            <div className="text-center">
              <input
              type="number"
              className="form-control"
              placeholder={character.wisdom}
              />
            </div>
            <div className="text-center">
              <input
              type="number"
              className="form-control"
              placeholder={character.charisma}
              />
            </div>
            <div className="text-center">
              <input
              type="text"
              className="form-control"
              placeholder={character.inventory}
              />
            </div>
            <div className="text-center">
              <input
              type="text"
              className="form-control"
              placeholder={character.background}
              />
            </div>
            <div className="text-center">
              <input
              type="text"
              className="form-control"
              placeholder={character.appearance}
              />
            </div>
          </div>
        </div>
      </div>
    </div>



    </>
     ) 
}

export default Details
