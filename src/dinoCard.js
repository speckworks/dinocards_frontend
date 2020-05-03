import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class dinoCard extends Component {
    render() {
        let card = this.props.dinocard
        return (
            <Card className="card carousel-cell" style={{
                background:card.color}}>
            <Image src={card.img}
            style={{}}></Image>
            <Card.Content className="cardContent"
                          
            >
              <Card.Header style={{
                                    color:'white',
                                    display:"flex",
                                    flexFlow:"rowReverse",
                                    justifyContent:"flexEnd",
                                    width: "130px", 
                                    height:"235px"
                                    }}>User Name: {card.name}</Card.Header>
              <button onClick={()=>this.props.deleteDino(card.id)} 
                    className="deleteButton">Delete</button>
              <Card.Description style={{
                    background:card.color}}>
              </Card.Description>
            </Card.Content>
          </Card>
        )
    }
}
