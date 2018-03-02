import React from 'react'
import PressList from './PressList'
import { Table, Button } from 'reactstrap';

export default class Press extends React.Component {
    constructor() {
      super();
      this.state={
        pressListItems:[]
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      // this.fetchPressInfo = this.fetchPressInfo.bind(this);
      this.deletePressInfo = this.deletePressInfo.bind(this);

    }

    componentWillMount() {
      this.fetchPressInfo()
  
    }

    handleChange(event) {
      console.log(event.target.value)
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state)
      // http://localhost:3001/api/Press
      // https://proprocessorserver.herokuapp.com
      fetch("https://proprocessorserver.herokuapp.com/api/press", {
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


    fetchPressInfo() {


    fetch("https://proprocessorserver.herokuapp.com/api/press", {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          authorization: this.props.sessionToken
        })

  }).then(
      (response) => response.json()
  ).then((data) => {
      // this.props.setToken(data.sessionToken)
    console.log("hellyeah",data)
      this.setState({
        pressListItems:data.Press
      })
  }) 

  }

  deletePressInfo(event) {
    console.log(event.target.id)
    fetch("https://proprocessorserver.herokuapp.com", {
      method: 'DELETE',
      body: JSON.stringify({Press:{id:event.target.id}}),
      headers: new Headers({
          'Content-Type': 'application/json',

        })
  })
}



  
    render() {
      const Presses = this.state.pressListItems.length >= 1 ? <PressList pressess={this.state.listPresses} token={this.props.token} /> : <h2>Log a workout to see table</h2>
      
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="press">Press</label>
          <input id="press" onChange={this.handleChange} name="press" type="text" />
          <button type="submit" >Save</button>

                   
        </form>
        {/* <button onClick={this.fetchPressInfo} >Get</button> */}

        
        <div>
        <PressList listPresses={this.state.pressListItems} delete={this.deletePressInfo}  fetchPresses={this.fetchPressInfo}/>
        {/* <button onClick="this.props.deletePressInfo" value={Press}><i className="fa fa-times"></i>
        </button> */}
          {/* <input id="press" onClick="this.props.deletePressInfo" onClick={this.delete} name="press" type="text" />
          <button type="delete">Delete</button> */}
        </div>
      </div>
      );
    }
  }