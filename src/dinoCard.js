import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class dinoCard extends Component {
    render() {
        let card = this.props.dinocard
        // {console.log("dinocard", this.props.dinocard)}
        return (
            <Card>
            <Image src={card.img}/>
            <Card.Content>
              <Card.Header>{card.name}</Card.Header>
              <Card.Description style={{
                    background:card.color}}>
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <button onClick={()=>this.props.deleteDino(card.id)} 
                    className="deleteButton">Delete</button>
            </Card.Content>
          </Card>
        )
    }
}


// <div    className="app" 
//                     style={{
//                     background:card.color}}>
//             {card.name}
//             <button onClick={()=>this.props.deleteDino(card.id)} 
//                     className="deleteButton">Delete</button>
//             <img    src={`${card.img}`}
//                     alt="dinosaur" 
//                     className="card"></img> 
            
//             </div>