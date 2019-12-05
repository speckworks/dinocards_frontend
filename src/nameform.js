import React, { Component } from 'react'

export default class Nameform extends Component {
    state={
        value:""
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        let newUser = (this.state.value)
        const url = "http://localhost:3000/users"
        let newUserObject = newUser
        fetch(url, {method: 'POST',
                    body:JSON.stringify(newUserObject),//this needs to be formatted to set the name property of User in Backend
                    headers: {'content-type':'application/json'}
                })
                .then(res=>res.json())
                .catch(error=>console.error("Error:",error))
                .then(response=>console.log('Success:',response));
        this.props.handleNameSubmit(newUser)
        this.setState({value:""})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                            Name:
                        <input onChange={this.handleChange} type="text" name="value" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
