import React from 'react'
// import Nav from '../components/Nav'
import Question from "./Question"
import AuthNav from "../components/AuthNav/AuthNav"
import LoginButton from "../components/LoginButton/login-button"
import SignUpbutton from "../components/signup/signup-button"
import LogOutButton from "../components/LogOutButton/logout-button"
import {Auth0Provider} from"@auth0/auth0-react";

function Home() {
    return (
        <div>
            <Auth0Provider
            domain={`dev-xypsrewa.us.auth0.com`
            }
            clientId={`RfFm3fOupR7DPFWKZxVb3TMkruk3EhkY`}
            redirectUri={window.location.origin}
            >
            {/* <Container className={'container-home'}main={
            <>
            <h1>Welcome to the Hall of Heroes</h1>
            <p className={'home-text'}>
                Login or Sign up to begin
            </p>
            <LoginButton />
           </>
            }/> */}
            
  
            <SignUpbutton />
            <Question />
            <AuthNav />
            </Auth0Provider>
        </div>
    )
}

export default Home
