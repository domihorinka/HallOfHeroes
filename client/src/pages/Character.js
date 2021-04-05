import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container/Container'


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
      <h1>class: {character.class}</h1>
      <h1>level: {character.level}</h1>
      <h1>hp: {character.hp}</h1>
      <h1>strength: {character.strength}</h1>
      <h1>dexterity: {character.dexterity}</h1>
      <h1>constitution: {character.constitution}</h1>
      <h1>intelligence: {character.intelligence}</h1>
      <h1>wisdom: {character.wisdom}</h1>
      <h1>charisma: {character.charisma}</h1>
      <h1>inventory: {character.inventory}</h1>
      <h1>background: {character.background}</h1>
      <h1>appearance: {character.appearance}</h1>
      




    </>
  )
}

export default Details
