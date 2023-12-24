import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === "Light" ? "light" : "dark"} bg-${props.mode === "Light" ? "light" : "dark"}`}>
            <Link className="navbar-brand mx-2" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">{props.aboutText}</Link>
                    </li>
                </ul>
                <button type="button" onClick={props.toggleMode} className={`btn btn-${props.mode === "Light" ? "dark" : "light"} mx-2`}>{props.mode === "Light" ? "Enable Dark Mode" : "Enable Light Mode"}</button>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    title: PropTypes.string,
    // title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set Title Here",
    aboutText: "About"
}
