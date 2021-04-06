import React from "react"
import './Footer.css'

function Footer() {
    return (
        <>
            {/* <div className='phantom' /> */}
            <footer className='footer'>
                <p className="footerDes">An application created by University of Denver bootcamp student to create and store characters.</p>
                <div className="group">
                    <div className="credits">
                    <h4 className="contrib">Contributors</h4>
                    <ul className="listylist">
                        <li className="listy-items" ><a target="_blank" rel="noreferrer" href="https://github.com/domihorinka">Dominique Horinka, </a></li>
                        <li className="listy-items" ><a target="_blank" rel="noreferrer" href="https://github.com/AlbertTundy">Stephen Pacyga, </a></li>
                        <li className="listy-items" ><a target="_blank" rel="noreferrer" href="https://github.com/mrivera0014">Maribel Rivera, </a></li>
                        <li className="listy-items" ><a target="_blank" rel="noreferrer" href="https://github.com/Tevvels">Christopher Watkins</a></li>
                    </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;