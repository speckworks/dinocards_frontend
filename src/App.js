import React, { Component } from 'react'
import './App.css';
import DinoButton from './dinoButton.js'
import ColorButton from './colorButton.js'
import CardList from './cardList.js'

export default class App extends Component {
    state = { dinos:[],
             colors:[],
             dinocards:[]
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
}
  
  handleDinoClick = (new_dino_img) => {
    
        console.log("from the dinoClick", new_dino_img);
        const newdinocards = [...this.state.dinocards]
        newdinocards.img = new_dino_img
        this.setState({ dinocards:newdinocards
           })
  }

  handleColorClick = (new_card_color) => {
    const newdinocards = [...this.state.dinocards]
    newdinocards.color = new_card_color
      this.setState({ 
        dinocards:newdinocards
      })
  }
  
  handleNameSubmit = (newUser) => {
    const newdinocards = [...this.state.dinocards]
    newdinocards.name = newUser
      this.setState({     
        dinocards:newdinocards
    })
  }
  

  render() {
    return (
      <div className="app">
        <div className="dinoContainer">
        <ul>1. Choose a Dino.</ul>
          <DinoButton handleDinoClick={this.handleDinoClick} 
                      className="dinobutton" 
                      dinos={this.state.dinos}/>
        </div>
        <div>
        <ul>2. Choose a Color.</ul>
            <ul className="color button">
            <ColorButton  handleColorClick={this.handleColorClick} 
                          colors={this.state.colors}/>

            </ul>
          </div>
          <div className="app">
          </div> 

          <div className="app">
          <div className="card">
          </div>
          <p>Dino Card List</p>
          <CardList 
                dinocards={this.state.dinocards} 
                name={this.state.name} 
                dinoImg={this.state.img} 
                color={this.state.color}
                handleNameSubmit={this.handleNameSubmit}/>
          </div>
      </div>
    )
  }
}

