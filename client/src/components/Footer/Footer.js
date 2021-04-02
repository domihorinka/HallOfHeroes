import React from "react"
import './Footer.scss'

function Footer() {
    return (
        <>
            {/* <div className='phantom' /> */}
            <footer className='footer'>
                <p className="footerDes">An application created by University of Denver bootcamp student to create and store characters.</p>
                <div className="group">
                    <h4>Contributors</h4>
                    <ul>
                        <li  ><a target="_blank" rel="noreferrer" href="https://github.com/domihorinka">Dominique Horinka</a></li>
                        <li  ><a target="_blank" rel="noreferrer" href="https://github.com/AlbertTundy">Stephen Pacyga</a></li>
                        <li  ><a target="_blank" rel="noreferrer" href="https://github.com/mrivera0014">Maribel Rivera</a></li>
                        <li  ><a target="_blank" rel="noreferrer" href="https://github.com/Tevvels">Christopher Watkins</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;