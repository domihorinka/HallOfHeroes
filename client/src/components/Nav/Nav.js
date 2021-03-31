import React, { useState } from "react"
import { Link } from "react-router-dom";

// ------Importing NavItems------ //
import { NavItems } from "../NavItems/NavItems"

// ------Importing Icons from react-icon------ //
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

import './Nav.css'

function Nav() {

    // ------Hidden Navbar------ //
    const [sideNav, setSideNav] = useState(false)

    // ------Display Navbar------ //
    const showSideNav = () => setSideNav(!sideNav)

    return (
        <>
            <div className="sideNav">
                {/* ------Hamburger menu Icon------ */}
                <Link className="menu-bars">
                    <FaIcons.FaBars onClick={showSideNav} />
                </Link>
            </div>
            <nav className={sideNav ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-item'>
                    <li className='navbar-toggle'>
                        {/* ------Close Menu Icon ------ */}
                        <Link className="menu-bars" to="#">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {/* ------Mapping over NavItems------ */}
                    {NavItems.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Nav;