import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class dinoCard extends Component {
    render() {
        let card = this.props.dinocard
        // {console.log("dinocard", this.props.dinocard)}
        return (
            <Card  style={{
                background:card.color}}>
            <Image src={card.img}/>
            <Card.Content className="cardContent">
              <Card.Header>User Name: {card.name}</Card.Header>
              <Card.Description style={{
                    background:card.color}}>
              </Card.Description>
              <button onClick={()=>this.props.deleteDino(card.id)} 
                    className="deleteButton">Delete</button>
            </Card.Content>
          </Card>
        )
    }
}
