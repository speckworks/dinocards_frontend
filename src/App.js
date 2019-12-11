import React, { Component } from 'react'
import './App.css';
import CardList from './cardList.js'
// import dinoCard from './dinoCard';

export default class App extends Component {
    state = { dinos:[],
             colors:[],
             dinocards:[],
             users:[]
            }

  componentDidMount(){
    fetch("http://localhost:3000/dinos")
    .then(res=>res.json())
    .then(dinoObj =>{
      this.setState({
        dinos:dinoObj
      })
    }) 

    fetch("http://localhost:3000/colors")
    .then(res=>res.json())
    .then(colorObj =>{
      this.setState({
        colors:colorObj
      })
    }) 
    
    fetch("http://localhost:3000/users")
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
    const url = `http://localhost:3000/user_cards/${cardId}`
        fetch(url, {method: 'DELETE'})
        .then(res=>res.json())
        .catch(error=>console.error("Error:", error))
        .then(response=>{
          let dinocards = this.state.dinocards.filter(dinocard =>  dinocard.id !== cardId )
          this.setState({dinocards:dinocards})
  })
  }

  getDinoCards = () => {
    fetch("http://localhost:3000/user_cards")
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
          <p></p>
          {/* <button onClick={this.getDinoCards}>Fetch All the DinoCards</button> */}
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
    )
  }
}

