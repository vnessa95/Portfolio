import React, { Component } from 'react';
import './abt.css'
import NavBar from '../NavBar/navbar'


export default class About extends Component {
    render() {
        return (
            <div className="AbtContainer">
                <NavBar />

                    <img className="img1" alt="pink-chrysanthemum-flower" src="/img/Vanessa-Baker.jpeg" />
                    
                    
                   <div className="p">
                       <h1 class="header">Hello (World)</h1>
                       <h2>I'm <span className="name">Vanessa Baker.</span></h2>
                    <p className="me"> 
                 
I am a junior developer whose journey started 6 months ago with <span className="r2h">Road To Hire</span>, an intership dedicated to learning code. in that 6 months I not only learned numerous languages i've named below but, i've had to oppurtinuty to build dynamic reactive sites......
<br/><br/><br/>

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