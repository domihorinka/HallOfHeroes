import React, { useEffect, useState} from 'react'
import Card from 'react-bootstrap/card';
import API from "../utils/API"
import {Link} from "react-router-dom"


const List = () => {
    const [character, setCharacter ] = useState([])

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
    const items = [

    ]

    console.log(character)
		return (
            <div>
                <Link className={`go-to-create`} to="/create">Create New Character!</Link>
            {character.map((char)=> {
                return(
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>{char.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{char.level}</Card.Subtitle>
					<Card.Text>{char.description}</Card.Text>
				</Card.Body>
			</Card>)
            })}
            </div>
        )
    }




 export default List
// export default () => (<div><Example /></div>)