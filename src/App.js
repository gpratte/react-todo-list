import React from 'react';
import './App.css';
import Reminder from './Reminder';

let count = 0;

class App extends React.Component {

  state = {
    todos: []
  };

  addTodo() {
    // Make a copy of the list
    const todos = [...this.state.todos];
    // Add to beginning of list
    todos.unshift({
      "id": ++count,
      "placeholder": "Enter a reminder " + count,
      "description": "",
      "done": false
    })
    // Set the state will cause the list to be rendered
    this.setState({todos: todos});
  }

  removeTodo = (id) => {
    // Remove the entry with the id from the list
    const todos = this.state.todos.filter( todo => todo.id !== id)
    // Set the state will cause the list to be rendered
    this.setState({todos: todos});
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
    this.setState({todos: todos});
  }

  render() {
    return (
      <div>
        <div className={"header"}>
          <h1>Reminders</h1>
          <button className="header-item" onClick={() => this.addTodo()}>New Reminder</button>
          <button className="header-item">Hide Done</button>
        </div>
        <div>
          <ul>
            {this.state.todos.map(item => (
              <Reminder key={item.id} value={item}
                        removeTodo={this.removeTodo}
                        updateText={this.updateText}/>
            ))}
          </ul>
        </div>
      </div>
    );
  }

}

export default App;
