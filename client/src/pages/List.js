import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/card';
import Button from '../components/Button/Button'
import API from "../utils/API"
import { Link } from "react-router-dom"


const List = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        loadCharacters()
    }, [])

    function loadCharacters() {
        API.getCharacters()
            .then(res =>
                setCharacters(res.data)
            )
            .catch(err => console.log(err));

    };

    function deleteCharacter(id) {
        API.deleteCharacter(id)
            .then(res => loadCharacters())
            .catch(err => console.log(err))
    }

    // console.log(characters)
    // console.log(character._id)
    return (
        <div>
            <Link className={`go-to-create`} to="/create">Create New Character!</Link>
            {characters.map((char) => {
                return (
                    <Card style={{ width: '18rem' }} key={char._id}>
                        <Card.Body>
                            <Card.Title>{char.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{char.level}</Card.Subtitle>
                            <Card.Text>{char.description}</Card.Text>
                            <Button onClick={() => deleteCharacter(char._id)}>Delete</Button>
                            <Link to={"/characters/" + char._id}> View Character Sheet</Link>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default List
// export default () => (<div><Example /></div>)