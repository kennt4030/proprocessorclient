import React from 'react';




export default class Press extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('http://localhost:3000/api/form-submit-url', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="pressname">Press</label>
          <input id="pressname" name="pressname" type="text" />  
          <button>Send data!</button>
        </form>
      );
    }
  }

