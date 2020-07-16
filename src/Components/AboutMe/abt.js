import React, { Component } from 'react';
import './abt.css'
import NavBar from '../NavBar/navbar'
import Footer from  '../Footer/footer'


export default class About extends Component {
    render() {
        return (
            <div className="AbtContainer">
                <NavBar />
<div className="whoseme">
                    <img className="img1" alt="vanessa-baker-portrait" src="/img/Vanessa-Baker.jpeg" />
                    
                    
                    
                   <div className="p">
                       <h1 class="header">Hello (World)!</h1>
                       <h2 className="names">I'm <span className="name">Vanessa Baker.</span></h2>
                    <p className="me"> 
                 

I am a junior developer who loves front-end but also, appreciate the back-end.
Naturally, I'm curious & like to figure out how things work. I believe our favorite things are defined aesthetically. 
I enjoy making dynamic, purposeful, & functional web applications that have a polished, clear, and distinct design.

<br/><br/> 
I have a strong grasp of web design and development and I am continuing to learn & implement code constantly.

My journey started with a 6 month coding internship, <br/>
   <span className="r2h">Road To Hire</span>. During that time I've had the oppurtunity to build & deploy applications using languages, libraries and frameworks like; JavaScript, React, and Node.js.

<br/><br/><br/>

                    <span className="langs">Skills:<br/>
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
                      </div>
            
                    </div>
                    <Footer/>
            </div>
        )
      }
    }