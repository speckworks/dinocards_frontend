import React, { Component } from 'react'
import './App.css';
import CardList from './cardList.js'
import Carousel from './carousel.js'

export default class App extends Component {
    state = { dinos:[],
             colors:[],
             dinocards:[],
             users:[]
            }

  componentDidMount(){
    fetch("https://hidden-fjord-86683.herokuapp.com/dinos")
    .then(res=>res.json())
    .then(dinoObj =>{
      this.setState({
        dinos:dinoObj
      })
    }) 

    fetch("https://hidden-fjord-86683.herokuapp.com/colors")
    .then(res=>res.json())
    .then(colorObj =>{
      this.setState({
        colors:colorObj
      })
    }) 
    
    fetch("https://hidden-fjord-86683.herokuapp.com/dinos")
    .then(res=>res.json())
    .then(userObj =>{
      this.setState({
        users:userObj
      })
    }) 
  }

  createDinoCard = (dinoCard) =>{
    let prevDinoCards = this.state.dinocards
    prevDinoCards.push(dinoCard)
    this.setState({dinocards:prevDinoCards})
  }

  deleteDino = (cardId) => {
    const url = `https://hidden-fjord-86683.herokuapp.com/user_cards/${cardId}`
        fetch(url, {method: 'DELETE'})
        .then(res=>res.json())
        .catch(error=>console.error("Error:", error))
        .then(response=>{
          let dinocards = this.state.dinocards.filter(dinocard =>  dinocard.id !== cardId )
          this.setState({dinocards:dinocards})
  })
  }

  getDinoCards = () => {
    fetch("https://hidden-fjord-86683.herokuapp.com/user_cards")
    .then(res=>res.json())
    .then(dinoCardsObj =>{
      console.log(dinoCardsObj)
    })  
  }

  reverse = () => {
    let dinocardsR = this.state.dinocards
    let dinocardsR2 = [...dinocardsR]
    let dinocardsRR = dinocardsR2.reverse()
    this.setState({dinocards:dinocardsRR});
  }
  
  
  render() {
    return (
      <div className="app">
          <p className="title">Dinosaur Cards</p>
          <div className="gridDiv">
          <Carousel 
            dinocards={this.state.dinocards}
            deleteDino={this.deleteDino}
            reverse={this.reverse}
          />          
          <CardList 
                colors={this.state.colors}
                dinos={this.state.dinos} 
                dinocards={this.state.dinocards}
                handleNameSubmit={this.handleNameSubmit}
                createDinoCard={this.createDinoCard}
                deleteDino={this.deleteDino}
                reverse={this.reverse}
                />
          </div>

      </div>
    )
  }
}

