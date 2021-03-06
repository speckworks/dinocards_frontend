import React, { Component } from 'react'
import DinoButton from './dinoButton.js'
import ColorButton from './colorButton.js'
import './App.css';


export default class Nameform extends Component {
    state={
        user_card:{},
        dinoFormImg:"",
        dinoFormColor:"",
        name:""
    }
    handleChange = (event) => {
        event.preventDefault()
        this.setState({name:event.target.value})
    }
    handleDinoClick = (new_dino_img) => {
            this.setState({dinoFormImg:new_dino_img})
        }
    handleColorClick = (new_card_color) => {
            this.setState({dinoFormColor:new_card_color})
        }

    onSubmit = (event) => {
        event.preventDefault()
        let img = this.state.dinoFormImg
        let color = this.state.dinoFormColor
        let name = this.state.name
        if (!img || !color || !name){
            return  //this line returns out of onSubmit when data isn't valid
        } 
        let colorId = this.props.colors.filter(colorObj => colorObj.color === color)[0].id
        let dinoId = this.props.dinos.filter(dino => dino.img === img)[0].id
        let dinoCardBE = {user_id:1, color_id:colorId, dino_id:dinoId}
        
        const url = "https://hidden-fjord-86683.herokuapp.com/user_cards"
        fetch(url, {method: 'POST',
        body:JSON.stringify(dinoCardBE),
        headers: {'content-type':'application/json'}
    })
    .then(res=>res.json())
    .catch(error=>console.error("Error:",error))
    .then(response=>{
        let dinoCard = {img:img, color:color, name:name, id:response.id}
        this.props.createDinoCard(dinoCard)
                    console.log('Success:',response)
                    this.setState({
                        dinoFormImg:"",
                        dinoFormColor:"",
                        name:""})
                });
                }
    
    render() {
        return (
            <div>
                <div className="dinoContainer">
                    <ul>1. Choose a Dino.</ul>
                    <DinoButton handleDinoClick={this.handleDinoClick} 
                      className="dinobutton" 
                      dinos={this.props.dinos}/>
                    </div>
                    <ul>2. Choose a Color.</ul>
                    <ul>
                    <ColorButton  handleColorClick={this.handleColorClick} 
                          colors={this.props.colors}/>
                    </ul>
                <form onSubmit={this.onSubmit}>
                            <br></br>
                          3. Please Enter Your Name:
                    <input  onChange={this.handleChange} 
                            type="text"
                            name="value" 
                            value={this.state.name}
                            autoComplete="off"
                            />
                            <br></br>
                            {/* Dino Chosen: */}
                    {/* <input  defaultValue={this.state.dinoFormImg}
                            autoComplete="off"></input>
                            Color Chosen:
                    <input  defaultValue={this.state.dinoFormColor}
                            autoComplete="off"></input> */}
                            <br></br>
                            <br></br>
                    <button type="submit" 
                            value="Submit"
                            id="submitButton" 
                            style={{className:"formSubmit",
                            height:"100px",
                            borderRadius:25}} >Submit</button>
                </form>
            </div>
        )
    }
}
