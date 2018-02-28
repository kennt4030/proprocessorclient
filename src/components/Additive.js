import React from 'react'

export default class Additive extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state)

      fetch("http://localhost:3001/api/Additive", {
        method: 'POST',
        body: JSON.stringify({Additive:this.state}),
        headers: new Headers({
            'Content-Type': 'application/json'
          })

    }).then(
        (response) => response.json()
    ).then((data) => {
        this.props.setToken(data.sessionToken)

    }) 
    
    
  }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="additive">Additive</label>
          <input id="additive" onChange={this.handleChange} name="additive" type="text" />
          <button>Save</button>
        </form>
      );
    }
  }