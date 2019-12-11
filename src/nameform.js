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
        
        const url = "http://localhost:3000/user_cards"
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

                    <div>
                    <ul>2. Choose a Color.</ul>
                    <ul className="color button">
                    <ColorButton  handleColorClick={this.handleColorClick} 
                          colors={this.props.colors}/>

                    </ul>
                    </div>
                <form onSubmit={this.onSubmit}>
                           Please Enter Your Name:
                    <input  onChange={this.handleChange} 
                            type="text"
                            name="value" 
                            value={this.state.name}
                            autoComplete="off"
                            />
                    <input  defaultValue={this.state.dinoFormImg}
                            autoComplete="off"></input>
                    <input  defaultValue={this.state.dinoFormColor}
                            autoComplete="off"></input>
                    <button type="submit" value="Submit" style={{className:"formSubmit"}} />
                </form>
            </div>
        )
    }
}
