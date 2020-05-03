import React, { Component } from 'react'
import DinoCard from './dinoCard.js';
import Nameform from './nameform.js';
import './App.css';
import "./flickity.css";


export default class CardList extends Component {
    
    render() {
        let dinocard;
        if (this.props.dinocards.length > 0) {
            dinocard = this.props.dinocards.map((card) => {
            return <DinoCard 
            className="card carousel-cell"
            key={card.id} 
            deleteDino={this.props.deleteDino}
            dinocard={card}/>
            })
        }

        return (
            <div className="dinoContainer">
                <Nameform 
                createDinoCard={this.props.createDinoCard}
                colors={this.props.colors}
                dinos={this.props.dinos} 
                handleNameSubmit={this.props.handleNameSubmit}/>
                <button 
                onClick={
                    ()=>this.props.reverse(dinocard)
                    }
                id="reverse"
                    >Reverse
                </button>
                 </div>

        )
    }
}

