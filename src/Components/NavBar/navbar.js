import React, { Component } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';



export default class NavBar extends Component {
    render() {
    return (
            <div className="NavContainer">
                <ul className="links">
                <li><a className="resume" href="https://docs.google.com/document/d/13Tf1x8e7SBwfeZzDzETtSclMKsRwmXisBYbF3Mv16lU/edit?usp=sharing">Resume</a></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/abtme">AboutMe</Link></li>
                <li><Link to="/">Home</Link></li>

                </ul>
            </div>
      
    )
}
}


