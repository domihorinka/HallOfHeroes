import React , {useEffect, useState} from 'react'
// import Card from '../components/Cards/Card'
import API from "../utils/API"



// function List() {
//   const [character, setCharacter] = useState([])

//     useEffect(()=> {
//         loadCharacters()
//     }, [])
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
        <div>
            {character.length ? (
                <div>
            {character.map( char => {
                  return (
                    <div key={char.name}>
                          {char.name} by {char.class}
                    </div>
                  );
                })}
                </div>
               ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
    )
}
//     function loadCharacters() {
//         API.getCharacters()
//             .then(res =>
//                 setCharacter(res.data)
            
//             )
//             .catch(err => console.log(err));
//     };
//   return (
//       <>
//       <h1>hello from list</h1>
//       {character.map((character) =>{
//         return( <h1>character.name</h1>)
//       })}
     
//       </>
//   )
// }
export default List