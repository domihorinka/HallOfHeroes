import React, {useEffect, useState} from 'react'
import API from "../utils/API"

// get data and display.
function Create() {
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

export default Create