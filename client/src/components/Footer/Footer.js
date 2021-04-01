import React from "react"
import './Footer.scss'

function Footer() {
    return (
        <>
            {/* <div className='phantom' /> */}
            <footer className='footer'>
                <p className="footerDes">An application created by University of Denver bootcamp student to create and store characters.</p>

                <ul>
                    <li className="group" ><a target="_blank" rel="noreferrer" href="https://github.com/mrivera0014">Maribel Rivera</a></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;