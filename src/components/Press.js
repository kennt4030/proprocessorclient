import React from 'react'

export default class Press extends React.Component {
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
      // http://localhost:3001/api/Press
      // https://proprocessorserver.herokuapp.com
      fetch("https://proprocessorserver.herokuapp.com", {
        method: 'POST',
        body: JSON.stringify({Press:this.state}),
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
          <label htmlFor="press">Press</label>
          <input id="press" onChange={this.handleChange} name="press" type="text" />
          <button>Save</button>
        </form>
      );
    }
  }