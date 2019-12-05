import React, { Component } from 'react'
import './App.css';
import DinoButton from './dinoButton.js'
// import Nameform from './nameform.js'
// import DinoCard from './dinoCard.js';
import ColorButton from './colorButton.js'
import CardList from './cardList.js'

export default class App extends Component {
    state = { dinos:[],
             colors:[],
             dinocards:[]
             // id:0
            // dinocards:{ dino_img:"",
            //  color:"",
            //  name:""}
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
  }

  handleDinoClick = (new_dino_img) => {
    console.log("from the dinoClick", new_dino_img);
    this.setState({ 
        dino_img:new_dino_img
    })
  }
  
  handleColorClick = (new_card_color) => {
    this.setState({ 
        color:new_card_color
  })
  }

  // handleSubmit = (newCardName) => {
  //   this.setState({name:newCardName})
  // }
  
    handleSubmitApp = (dinocard) => {
      this.setState({
        dinocards:[dinocard,...this.state.dinocards]
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
          {/* <Nameform 
          handleSubmit={this.handleSubmit}
          /> */}
          </div> 

          <div className="app">
          <div className="card">
          </div>
          <p>Dino Card List</p>
          <CardList 
                dinocards={this.state.dinocards} 
                name={this.state.name} 
                dinoImg={this.state.dino_img} 
                color={this.state.color}
                handleSubmitApp={this.handleSubmitApp}/>
          {/* <DinoCard 
          name={this.state.name} 
          dinoImg={this.state.dino_img} 
          color={this.state.color}/>  */}
          </div>
      </div>
    )
  }
}

