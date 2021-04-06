import React from "react";
import LogoutButton from "../LogOutButton/logout-button";
import LoginButton from "../LoginButton/login-button";
import {useAuth0} from '@auth0/auth0-react';

const AuthenticationButton = () => {
    const { isAuthenticated} = useAuth0();
    console.log(isAuthenticated);
    
    return isAuthenticated ? 
<><LogoutButton /> </> : <LoginButton /> 
}


export default AuthenticationButton;