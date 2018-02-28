import React from 'react'

export default class Plate extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('http://localhost:3001/api/Plate', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="plate">Plate</label>
          <input id="plate" name="plate" type="text" />
          <button>Save</button>
        </form>
      );
    }
  }