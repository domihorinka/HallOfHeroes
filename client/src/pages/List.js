import React , {useEffect, useState} from 'react'
// import Card from '../components/Cards/Card'
import API from "../utils/API"



function List() {
  const [character, setCharacter] = useState([])

    useEffect(()=> {
        loadCharacters()
    }, [])

    function loadCharacters() {
        API.getCharacters()
            .then(res =>
                // setCharacter(res.data),
                console.log(res)
            )
            .catch(err => console.log(err));
    };
  return (
      <>
     <h1>hello from list</h1>
      
      </>
  )
}
export default List