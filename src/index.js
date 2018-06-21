import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BujoObj from './BujoObj';
import BujoSubmit from './BujoSubmit';

//extra: add different backgrounds/css
//extra: open extra days/read the date/make a calendar
class BuJo extends Component{
  state = {
    taskID: 1,
    tasks: [
    {
      name: "Make a React Web App",
      time: "09:00",
      id: 0,
      completed: false
    },
    {
      name: "Do Laundry",
      time: "11:00",
      id: 1,
      completed: false
    }],
    title: "Today's Tasks!"
  }

  componentWillMount(){
    if(localStorage.getItem("state") !== null){
      this.setState(JSON.parse(localStorage.state));
    }
  }

  componentDidUpdate(){
    localStorage.state = JSON.stringify(this.state);
  }

  render(){
    return(
      <div className="tasks">
        <h1>{this.state.title}</h1>
        <div><BujoObj tasks={this.state.tasks} deleteProp={this.onDelete} clickProp={this.onClick}/></div>
        <div><BujoSubmit tasks={this.state.tasks} addProp={this.onAdd} idProp={this.state.taskID}/></div>
      </div>
    );
  }

  onDelete = (item) => {
    var updatedTasks = this.state.tasks.filter(function(val, index){
        return item.id !== val.id;
    });
    this.setState({
      tasks: updatedTasks
    });
  }

  onAdd = (item) => {
    let id = this.state.taskID;
    let newItem = {
      ...item,
      id: ++id,
      completed: false
    };

    let updatedTasks = this.state.tasks;
    updatedTasks.push(newItem);
    updatedTasks.sort(function(a, b) {
      return parseFloat(a.time) - parseFloat(b.time);
    });
    this.setState({
            tasks: updatedTasks,
            taskID: id
    });
  }

  onClick = (item) => {
    let updatedTasks = this.state.tasks;
    //if item is completed mark it false, if not mark it completed
    updatedTasks.find(task => task.id === item.id).completed = item.completed ? false : true;
    this.setState({
      tasks: updatedTasks
    });
  }
}

ReactDOM.render(<BuJo />, document.getElementById('root'));
