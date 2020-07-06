import React, { Component } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';



export default class NavBar extends Component {
    render() {
    return (
            <div className="NavContainer">
                <ul className="links">
                    <li><Link to="/">Main Page</Link></li>
                    <li><Link to="/abtme">AboutMe</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>

                </ul>
            </div>
      
    )
}
}


