import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../../../assets/images/logo.svg'
import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light container">
                <a className="navbar-brand mt-3" href="/"><img src={Logo} className="logo" alt="anhbien"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                    </li>   */}
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/anhbien/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                    </li>
                    </ul>       
                </div>
            </nav>
        )
    }
}
