import React from 'react'
import image from "../images";

function Sidebar() {
    return (
        <React.Fragment>
            <div className="sidebar">
                <div className="logo">
                    <img alt="logo" src={image.logo} />
                </div>
                <div className="menu">
                    <ul>
                    <li>
                        <a className="link active" href="/">
                        Home
                        </a>
                    </li>
                    <li>
                        <a className="link" href="/">
                        About
                        </a>
                    </li>
                    <li>
                        <a className="link" href="/">
                        Services
                        </a>
                    </li>
                    <li>
                        <a className="link" href="/">
                        DMCA
                        </a>
                    </li>
                    <li>
                        <a className="link" href="/">
                        Post Book
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar
