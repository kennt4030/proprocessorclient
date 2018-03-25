import React from 'react'

export default class Plate extends React.Component {
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
      // http://localhost:3001/api/Plate
        // https://proprocessorserver.herokuapp.com
        fetch("http://localhost:3001/api/Additive/api/Plate", {
          method: 'POST',
          body: JSON.stringify({Plate:this.state}),
          headers: new Headers({
              'Content-Type': 'application/json', 
              authorization: this.props.sessionToken
            })
  
      }).then(
          (response) => response.json()
      ).then((data) => {
          // this.props.setToken(data.sessionToken)
        console.log("yeah",data)
      }) 
    
    
  }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="plate">Plate</label>
          <input id="plate" onChange={this.handleChange} name="plate" type="text" />
          <button>Save</button>
        </form>
      );
    }
  }