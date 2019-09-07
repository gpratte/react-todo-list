import React from 'react';
import './App.css';
import Reminder from './Reminder';
import { map, forEach, filter } from 'lodash';


class App extends React.Component {

  count = 0;

  state = {
    todos: [],
    concatinated: "",
    hideDone: false
  };

  addTodo = () => {
    // Make a copy of the list
    const todos = [...this.state.todos];
    // Add to beginning of list
    todos.unshift({
      id: ++this.count,
      placeholder: "Enter a reminder",
      description: "",
      done: false
    });
    // Set the state will cause the list to be rendered
    this.setState({todos: todos,
      concatinated: this.concatinate(todos)});
  }

  removeTodo = (id) => {
    // Remove the entry with the id from the list
    const todos = filter( this.state.todos, (todo) => todo.id !== id)
    // Set the state will cause the list to be rendered
    this.setState({todos: todos,
      concatinated: this.concatinate(todos)});
  }

  updateText = (id, text) => {
    // Copy the list
    const todos = map(this.state.todos, (todo) => {
      if (todo.id === id) {
        // Update the text
        todo.description = text;
      }
      return todo;
    });

    // Set the state will cause the list to be rendered
    this.setState({todos: todos,
      concatinated: this.concatinate(todos)});
  }

  toggleDone = (id) => {
    // Copy the list
    const todos = map(this.state.todos, (todo) => {
      if (todo.id === id) {
        // Update done
        todo.done = !todo.done;
      }
      return todo;
    });
    // Set the state will cause the list to be rendered
    this.setState({todos: todos});
  }

  toggleHideDone = () => {
    const {todos, hideDone} = this.state;
    this.setState({concatinated: this.concatinate(todos, !hideDone),
      hideDone: !hideDone});
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
          <button className="header-item" onClick={this.addTodo}>New Reminder</button>
          <button className="header-item" onClick={() => this.toggleHideDone()}>
            {this.state.hideDone ? "Show Done" : "Hide Done"}</button>
        </div>
        <div>
          <ul>
            {map(this.state.todos, todo => this.renderReminder(todo))}
          </ul>
        </div>
        <div>
          All reminders: {this.state.concatinated}
        </div>
      </div>
    );
  }

  concatinate = (todos, hideDone) => {
    // If hideDone is passed as a parameter use it otherwise use the value from state
    if (hideDone === undefined) {
      hideDone = this.state.hideDone;
    }

    let allText = "";
    forEach(todos, (todo) => {
      if (todo.description.length > 0) {
        if (todo.done) {
          if (!hideDone) {
            allText += '"' + todo.description + '"';
          }
        } else {
          allText += '"' + todo.description + '"';
        }
      }
    });
    return allText;
  }

}

export default App;
