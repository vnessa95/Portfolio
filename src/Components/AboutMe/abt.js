import React, { Component } from 'react';
import './abt.css'
import NavBar from '../NavBar/navbar'


export default class About extends Component {
    render() {
        return (
            <div className="AbtContainer">
                <NavBar />

                    <img className="img1" alt="pink-chrysanthemum-flower" src="/img/flower1.png" />
                    
                    
                   <div className="p">
                       <h1 class="header">Hello (World)</h1>
                       <h2>I'm <span className="name">Vanessa Baker.</span></h2>
                    <p className="me"> I am a junior front end developer.<br/>
                    my journey started about 6 months ago with <a href="https://roadtohire.org/"><span className="r2h">Road to Hire,</span></a> a 6 month internship dedicated to learning code and programming languages, and using it to enhance how to user interacts with the U/I. 
                    i have always been driven by design and the creative side and i tend to express that in my work. I enjoy making responsive & dynamic websites/apps.<br/><br/><br/>
                    <span className="langs">languages & frameworks:<br/>
                        <ul className="skills">
                            <li className="skill">&bull;CSS</li>
                            <li className="skill">&bull;BOOTSTRAP</li>
                            <li className="skill">&bull;Express</li>
                            <li className="skill">&bull;TDD</li>
                            <li className="skill">&bull;SASS/BEM/FLEXBOX</li>
                            <li className="skill">&bull;node</li>
                            <li className="skill">&bull;SQL</li>
                            <li className="skill">&bull;JAVASCRIPT</li>
                            <li className="skill">&bull;REACT.JS</li>
                        </ul>
                    </span>
                      </p>
                    
                    <div className="icons">
                    <a href="https://www.linkedin.com/in/vanessa-baker-b80237181/" ><i id="fab" className="fab fa-linkedin-in fa-3x"></i></a>
                    <a href="https://www.instagram.com/thafloralyogi/"><i id="fab"  className="fab fa-instagram fa-3x"></i></a>
                    <a href="https://github.com/vnessa95"><i id="fab"  className="fab fa-github fa-3x"></i></a>
                    </div>
                    </div>
            </div>
        )
      }
    }