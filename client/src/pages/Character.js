import React, { useEffect, useState } from 'react'
import littlebirddude from '../images/littlebirddude.png'

import API from "../utils/API"

const Character = () => {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    loadCharacters()
  }, [])

  function loadCharacters() {
    API.getCharacters()
      .then(res =>
        setCharacter(res.data)
      )
      .catch(err => console.log(err));
  };
  const items = []

  character.map((char) => {
    items.push({
      id: char._id,
      header: char.name,
      description: char.level,
      image: littlebirddude
    })
  })
  return (
    <>
      <h1>Single Character sheet here</h1>
    </>
  )
}

export default Character
