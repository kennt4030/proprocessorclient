import React from 'react'

export default class Natural extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('http://localhost:3001/api/Natural', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="natural">Resin</label>
          <input id="natural" name="natural" type="text" />
          <button>Save</button>
        </form>
      );
    }
  }