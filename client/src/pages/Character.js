import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


import API from "../utils/API"

const Character = (props) => {
  const [character, setCharacter] = useState([])

  const { id } = useParams()
  useEffect(() => {
    getsCharacter(id)
  }, [])

  function getsCharacter(id) {
    API.getCharacter(id)
      .then(res =>
        setCharacter(res.data)
      )
      .catch(err => console.log(err));
  };

  console.log(character)

  return (
    <>
        <h1>Single Character sheet here</h1>


    </>
  )
}

export default Character
