import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


import API from "../utils/API"

const Details = () => {

  const [character, setCharacter] = useState([])

  //specifies which character we are viewing with id
  const { id } = useParams()

  console.log(id)



  function loadCharacter(id) {

    console.log(id)
    API.getCharacter(id)
      .then(res =>
        setCharacter(res.data)
      )
      .catch(err => console.log(err));
  }


  useEffect((id) => {
    loadCharacter(id)
  }, [])

  console.log(character._id)


  return (
    <>
      <h1>Single character sheet here</h1>


      <h1>name: {character.name}</h1>
      <h1>level: {character.level}</h1>




    </>
  )
}

export default Details
