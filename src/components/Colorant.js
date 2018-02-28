import React from 'react'

export default class Colorant extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('http://localhost:3001/api/Colorant', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="colorname">Color</label>
          <input id="colorname" name="colorname" type="text" />
          <button>Save</button>
        </form>
      );
    }
  }