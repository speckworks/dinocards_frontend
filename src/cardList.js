import React, { Component } from 'react'
import DinoCard from './dinoCard.js';
import Nameform from './nameform.js';
import './App.css';

export default class cardList extends Component {
    
    render() {
        const dinocard = this.props.dinocards.map(
            (card) => {
            return <DinoCard 
            key={card.id} 
            name={card.name} 
            dinoImg={card.dino_img} 
            color={card.color}/>
            }
        )
        return (
            <div>
                <ul>3.Enter Your Name.</ul>
                <Nameform handleNameSubmit={this.props.handleNameSubmit}/>
                <div>
                {dinocard}
                </div>
            </div>
        )
    }
}
