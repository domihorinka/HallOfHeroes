import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/card';
import Button from '../components/Button/Button'
import API from "../utils/API"
import { Link } from "react-router-dom"
import {useAuth0} from"@auth0/auth0-react";

const List = () => {
    const {isAuthenticated} = useAuth0();
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        loadCharacters()
    }, [])

    //loading all characters and setting with setCharacters
    function loadCharacters() {
        API.getCharacters()
            .then(res =>
                setCharacters(res.data)
            )
            .catch(err => console.log(err));

    };

    //deletes character(s) with given id
    function deleteCharacter(id) {
        API.deleteCharacter(id)
            .then(res => loadCharacters())
            .catch(err => console.log(err))
    }


    return (
        isAuthenticated && (

        <div>
            <Link className={`go-to-create`} to="/create">Create New Character!</Link>
            {characters.map(character => (
                <Card style={{ width: '18rem' }} key={character._id}>
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Class:{character.class}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Level:{character.level}</Card.Subtitle>
                        <Card.Text>{character.background}</Card.Text>
                        <Button onClick={() => deleteCharacter(character._id)}>Delete</Button>
                        <Link to={"/characters/" + character._id}> View Character Sheet</Link>
                    </Card.Body>
                </Card>
            ))}
            {/* {characters.map((char) => {
                return (
                    <Card style={{ width: '18rem' }} key={char._id}>
                        <Card.Body>
                            <Card.Title>{char.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{char.level}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">{char.description}</Card.Subtitle>
                            <Card.Text>{char.description}</Card.Text>
                            <Button onClick={() => deleteCharacter(char._id)}>Delete</Button>
                            <Link to={"/characters/" + char._id}> View Character Sheet</Link>
                        </Card.Body>
                    </Card>
                )
            })} */}
        </div>
        )
    )
}

export default List
// export default () => (<div><Example /></div>)