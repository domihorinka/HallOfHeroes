import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


import API from "../utils/API"

const Details = (props) => {

  const [character, setCharacter] = useState([])

  const { id } = useParams()

  useEffect(() => {
    loadCharacter()
  }, [])

  function loadCharacter() {
    API.getCharacter(id)
      .then(res =>
        setCharacter(res.data)
      )
      .catch(err => console.log(err));
  }

  console.log(character)


  return (
    <>
      <h1>Single character sheet here</h1>


      <h1>name: {character.name}</h1>
      <h1>level: {character.level}</h1>




    </>
  )
}

export default Details
