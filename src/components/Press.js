import React from 'react';


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

      
      fetch("http://localhost:3001/api/Press", {
        method: 'POST',
        body: JSON.stringify({Press:this.state}),
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
          <label htmlFor="pressname">Press</label>
          <input id="pressname" onChange={this.handleChange} name="pressname" type="text" />  
          <button>Save</button>
        </form>
      );
    }
  }

