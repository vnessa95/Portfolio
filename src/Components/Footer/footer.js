import React, { Component } from 'react';
import './footer.css'
import { Link } from 'react-router-dom';



export default class Footer extends Component {
    render() {
        return (
            <div className="FootContainer">
                

<p className="copy">Vanessa R. Baker &copy; 2020</p>




<div className="icons">
<span className="connect">Connect with me!</span>
                    <a className="social" href="https://www.linkedin.com/in/vanessa-baker-b80237181/" ><i id="fab" className="fab fa-linkedin-in"></i></a>
                    <a className="social" href="https://www.instagram.com/thafloralyogi/"><i id="fab"  className="fab fa-instagram "></i></a>
                    <a className="social" href="https://github.com/vnessa95"><i id="fab"  className="fab fa-github"></i></a>

</div>


                    


            </div>

        )
    }
}




