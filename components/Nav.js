import React from "react"
// import {Link} from "fill in this after";

function Nav() {
    return(
        <nav>
            <ul className="navRow">
            <Link to="/create">Create </Link>
            <Link to="/authentication">Sign Up/Login</Link>
            <Link to="/">Home</Link>
            <Link to="/characters">Your Characters</Link>
            </ul>
        </nav>
    )
}

export default Nav; 