import React, { Component } from 'react'

export default class dinoCard extends Component {
    render() {
        let card = this.props.dinocard
        return (
            <div    className="app" 
                    style={{
                    background:card.color}}>
            {card.name}
            <button onClick={()=>this.props.deleteDino(card.id)} className="app">Delete</button>
            <img    src={`${card.img}`}
                    alt="dinosaur" 
                    className="card"></img> 
            
            </div>
        )
    }
}
