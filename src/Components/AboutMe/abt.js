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
                    <p className="me"> vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
                    
                    <div className="icons">
                    <i className="fab fa-linkedin-in fa-3x"></i>
                    <i className="fab fa-instagram fa-3x"></i>
                    <i className="fab fa-github fa-3x"></i>
                    </div>
                    </div>
            </div>
        )
      }
    }