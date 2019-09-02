import React from 'react';
import './App.css';
import Reminder from './Reminder';

let count = 0;

class App extends React.Component {

  state = {
    todos: [],
    concatinated: "",
    hideDone: false
  };

  addTodo() {
    // Make a copy of the list
    const todos = [...this.state.todos];
    // Add to beginning of list
    todos.unshift({
      "id": ++count,
      "placeholder": "Enter a reminder",
      "description": "",
      "done": false
    })
    // Set the state will cause the list to be rendered
    this.setState({todos: todos,
      concatinated: this.concatinate(todos),
      hideDone: this.state.hideDone});
  }

  removeTodo = (id) => {
    // Remove the entry with the id from the list
    const todos = this.state.todos.filter( todo => todo.id !== id)
    // Set the state will cause the list to be rendered
    this.setState({todos: todos,
      concatinated: this.concatinate(todos),
      hideDone: this.state.hideDone});
  }

  updateText = (id, text) => {
    // Copy the list
    const todos = this.state.todos.map( todo => {
      if (todo.id === id) {
        // Update the text
        todo.description = text;
      }
      return todo;
    })
    // Set the state will cause the list to be rendered
    this.setState({todos: todos,
      concatinated: this.concatinate(todos),
      hideDone: this.state.hideDone});
  }

  toggleDone = (id) => {
    // Copy the list
    const todos = this.state.todos.map( todo => {
      if (todo.id === id) {
        // Update the text
        todo.done = !todo.done;
      }
      return todo;
    })
    // Set the state will cause the list to be rendered
    this.setState({todos: todos,
      concatinated: this.concatinate(todos),
      hideDone: this.state.hideDone});
  }

  toggleHideDone = () => {
    this.setState({todos: this.state.todos,
      concatinated: this.concatinate(this.state.todos, !this.state.hideDone),
      hideDone: !this.state.hideDone});
  }

  renderReminder = (todo) => {
    if (this.state.hideDone && todo.done) {
      return null;
    }
    return <Reminder key={todo.id}
              value={todo}
              removeTodo={this.removeTodo}
              updateText={this.updateText}
              toggleDone={this.toggleDone}/>
  }

  render() {
    return (
      <div>
        <div className={"header"}>
          <h1>Reminders</h1>
          <button className="header-item" onClick={() => this.addTodo()}>New Reminder</button>
          <button className="header-item" onClick={() => this.toggleHideDone()}>
            {this.state.hideDone ? "Show Done" : "Hide Done"}</button>
        </div>
        <div>
          <ul>
            {this.state.todos.map(todo => this.renderReminder(todo))}
          </ul>
        </div>
        <div>
          All reminders: {this.state.concatinated}
        </div>
      </div>
    );
  }

  concatinate = (todos, hideDone) => {
    // If hideDone is passed as a parameter use it otherwise
    // use the value from state.
    if (hideDone === undefined) {
      hideDone = this.state.hideDone;
    }

    let allText = "";
    todos.forEach( (todo) => {
      if (todo.description.length > 0) {
        if (todo.done) {
          if (!hideDone) {
            allText += '"' + todo.description + '"';
          }
        } else {
          allText += '"' + todo.description + '"';
        }
      }
    })
    return allText;
  }

}

export default App;
