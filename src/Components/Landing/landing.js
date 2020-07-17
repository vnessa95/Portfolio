import React, { Component } from 'react';
import './landing.css'
import NavBar from '../NavBar/navbar'
import { Link } from 'react-router-dom';
import Footer from  '../Footer/footer'





export default class Landing extends Component {
    render() {
        return (<div>
            <NavBar />
            <div className="HomeContainer">
                
                <section className="imgCon">
                    <img class="img" alt="snapdragonFlower" src="/img/flower.jpg" />
                </section>
                <section className="intro">
                    <h1><br />Vanessa Baker</h1>
                    <div className="typing">
                        <p className="type1">  Learner.</p>
                        <p className="type2">  Creator.</p>
                        <p className="type3">  Developer.</p>
                    </div>
                    <div className="btns">
                        <button type="button"><Link to="portfolio">Portfolio</Link></button>
                        <button type="button"><Link to="abtme">Who am I?</Link></button>
                    </div>
                </section>
              
            </div>
            <Footer/>
            </div>
        )
    }
}


