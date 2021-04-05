import React from 'react'
// import Nav from '../components/Nav'
import Question from "./Question"
import AuthNav from "../components/AuthNav/AuthNav"
import {Auth0Provider, useAuth0} from"@auth0/auth0-react";

function Home() {
    const {isAuthenticated} = useAuth0();
    return (
        <div>
                <h1>Hello and Welcome! to Hall of Heroes</h1>
        </div>
        
    )
}

export default Home
