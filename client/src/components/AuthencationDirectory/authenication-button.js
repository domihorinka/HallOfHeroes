import React from "react";
import LogoutButton from "../LogOutButton/logout-button"
import loginButton from "../LoginButton/login-button"
import {useAuth0} from '@auth0/auth0-react'

const AuthenticatieBUtton = () => {
    const { isAuthenticated} = useAuth();
    return isAuthenticated ? <logoutButton /> : <loginButton />
}