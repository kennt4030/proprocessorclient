import React from 'react'

export default class Tool extends React.Component {
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
      const data = new FormData(event.target);
      
      fetch("http://localhost:3001/api/Tool", {
        method: 'POST',
        body: JSON.stringify({Tool:this.state}),
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
          <label htmlFor="toolname">Tool</label>
          <input id="toolname" onChange={this.handleChange} name="toolname" type="text" />
          <button>Save</button>
        </form>
      );
    }
  }