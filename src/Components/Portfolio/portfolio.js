import React, { Component } from 'react';
import './portfolio.css'
import NavBar from '../NavBar/navbar'


export default class Portfolio extends Component {
    render() {
        return (
            <div className="PortContainer">
                <NavBar />

                <h1 class="title">My work</h1>

               <section className="work">


<div className="item">
    <a href="https://my-1st-responsive-navbar.netlify.app/">
<img className="image"  src='img/navbar.png' alt="navbarsite"></img>
</a>
<p className="txt"></p>
<a href="https://github.com/vnessa95/jsnavbar" className="goto"><i id="i" className="fab fa-github-square fa-2x"></i></a>
<i id="i" className="fab fa-node-js fa-2x"></i>
</div>

<div className="item">
    <a href="https://wikipedia-redesign.netlify.app/">
<img className="image"  src='img/wiki.png' alt="wikipedia-redesign"></img>
</a>
<p className="txt"></p>
<i id="i" className="fab fa-react fa-2x"></i>
<a href="https://github.com/FatimaGarci/Redesign-Project" className="goto"><i id="i" className="fab fa-github-square fa-2x"></i></a>
<i id="i" className="fab fa-node-js fa-2x"></i>
</div>



<div className="item">
    <a href="https://we-rise.netlify.app/">
<img className="image"  src='img/werise.png' alt="werise"></img>
</a>
<p className="txt"></p>
<a href="https://github.com/vnessa95/werise" className="goto"><i id="i" className="fab fa-github-square fa-2x"></i></a>
<i id="i" className="fab fa-node-js fa-2x"></i>
</div>


<div className="item">
    <a href="https://hotelvee.netlify.app/">
<img className="image"  src='/img/hotelsite.png' alt="hotelsite"></img>
</a>
<p className="txt"></p>
<i id="i" className="fab fa-react fa-2x"></i>
<a href="https://github.com/vnessa95/veeshotel" className="goto"><i id="i"  className="fab fa-github-square fa-2x"></i></a>
<i id="i" className="fab fa-node-js fa-2x"></i>
</div>

<div className="item">
    <a href="https://voice-rec-numbergame.netlify.app/">
<img className="image"  src='/img/numgame.png' alt="numgamesite"></img>
</a>
<p className="txt"></p>
<a href="https://github.com/vnessa95/numberGame" className="goto"><i id="i" className="fab fa-github-square fa-2x"></i></a>
<i id="i" className="fab fa-node-js fa-2x"></i>
</div>

<div className="item">
    <a href="https://veescounter.netlify.app/">
<img className="image"  src='img/counter.png' alt="countersite"></img>
</a>
<p className="txt"></p>
<i id="i" className="fab fa-react fa-2x"></i>
<a href="https://github.com/vnessa95/counter" className="goto"><i id="i" className="fab fa-github-square fa-2x"></i></a>
<i id="i" className="fab fa-node-js fa-2x"></i>
</div>

<div className="item">
    <a href="https://vees-yoga.netlify.app/">
<img className="image" src='/img/yogasite.png' alt="yogasite"></img>
</a>
<p className="txt"></p>
<i id="i" className="fab fa-react fa-2x"></i>
<a href="https://github.com/vnessa95/project4" className="goto"><i id="i"  className="fab fa-github-square fa-2x"></i></a>
<i id="i" className="fab fa-node-js fa-2x"></i>
</div>

<div className="item">
    <a href="https://veestictactoe.netlify.app/">
<img className="image"  src='/img/tictak.png' alt="tiktaktoebaord"></img>
</a>
<p className="txt"></p>
<i id="i" className="fab fa-react fa-2x"></i>
<a href="https://github.com/vnessa95/tic-tac_toe" className="goto"><i id="i" className="fab fa-github-square fa-2x"></i></a>
<i id="i" className="fab fa-node-js fa-2x"></i>
</div>


<div className="item">
    <a href="https://vees-todo.netlify.app/">
<img className="image"  src='/img/to-do.png' alt="todolist"></img>
</a>
<p className="txt"></p>
<i id="i" className="fab fa-react fa-2x"></i>
<a href="https://github.com/vnessa95/todo" className="goto"><i id="i" className="fab fa-github-square fa-2x"></i></a>
<i id="i" className="fab fa-node-js fa-2x"></i>
</div>

{/* <div className="item">
    <a href="#">
<img className="image"  src='' alt="#"></img>
</a>
<p className="txt"></p>
<i id="i" className="fab fa-react fa-2x"></i>
<a href="#" className="goto"><i id="i" className="fab fa-github-square fa-2x"></i></a>
<i id="i" className="fab fa-node-js fa-2x"></i>
</div> */}
               </section>
            </div>
        )
    }
}