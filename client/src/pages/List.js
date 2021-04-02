import React , {useEffect, useState} from 'react'
import Card from '../components/Cards/Card'
import API from "../utils/API"



function List() {
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
      <>
      {character.map( char =>{

        return (
          <Card 
          name={char.name}
          class={char.class}
          level={char.level}
          image={char.image}
          />
        );

        })}
      
      </>
  )
}
export default List