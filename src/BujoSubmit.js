import React, { Component } from 'react';

export default class BujoSubmit extends Component{
  state = {
    name: "New Task",
    time: "12:00",
  }
  render(){
    return(
    <form onSubmit={this.onSubmit}>
      <input type="text" className="submit-name" name="name" placeholder={this.state.name} onChange={this.handleFormUpdate} maxLength="35" required/>
      <input type="time" className="submit-time" name="time" step="60" onChange={this.handleFormUpdate} defaultValue="12:00" required/>
      <input type="submit" />
    </form>
    );
  }

  handleFormUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    let item = this.state;
    this.props.addProp(item);
    // e.target.reset();
  }
}
