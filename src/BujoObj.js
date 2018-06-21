import React, { Component } from 'react';

export default class BujoObj extends Component{

  state = {
    tasks: this.props.tasks
  }
  render(){
    const tasks = this.props.tasks;
    return(
      <ul>
        {
          tasks.map((task) => {
            return (
            <li key={task.id}>
            <input
              type="checkbox"
              id={task.id}
              onChange={() => this.props.clickProp(task)}
              checked={task.completed}
            />
            <label htmlFor={task.id} className="task-name">{task.name}</label>
            <span className="task-delete" onClick={() => {this.props.deleteProp(task)}}>x</span>
            <span className="task-time">{task.time}</span>
            </li>);
          })
        }
      </ul>
    );
  }
}

// export default BujoObj;
