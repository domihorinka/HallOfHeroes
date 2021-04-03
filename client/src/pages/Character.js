import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container/Container'


import API from "../utils/API"

const Character = (props) => {
  const [character, setCharacter] = useState([])

  const { id } = useParams()
  useEffect(() => {
    getCharacter(id)
  }, [])

  function getCharacter(id) {
    API.getCharacter(id)
      .then(res =>
        setCharacter(res.data)
      )
      .catch(err => console.log(err));
  };

  // character.map((char) => {
  //   items.push({
  //     id: char._id,
  //     header: char.name,
  //     description: char.level,
  //     image: littlebirddude
  //   })
  // })
  return (
    <>
      <Container>
        <h1>Single Character sheet here</h1>


      </Container>
    </>
  )
}

export default Character
