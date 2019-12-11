import React, { Component } from 'react'
import DinoCard from './dinoCard.js';
import Nameform from './nameform.js';
import './App.css';

export default class cardList extends Component {
    render() {

        let dinocard;
        if (this.props.dinocards.length > 0) {
            dinocard = this.props.dinocards.map((card) => {
                // console.log(dinocards)
            return <DinoCard 
            key={card.id} 
            deleteDino={this.props.deleteDino}
            dinocard={card}/>
            })
        }

        return (
            <div>
                <Nameform 
                createDinoCard={this.props.createDinoCard}
                colors={this.props.colors}
                dinos={this.props.dinos} 
                handleNameSubmit={this.props.handleNameSubmit}/>
                <div>
                <button onClick={()=>this.props.reverse(dinocard)}>Reverse</button>
                {dinocard}
                </div>
            </div>
        )
    }
}
