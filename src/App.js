import React from 'react';
import './App.css';
import Reminder from './Reminder';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{"key": new Date().getTime(), "description":"uno", "done":false}],
    };
  }

  addTodo() {
    console.log("adding todo")
    const todos = [...this.state.todos];
    todos.unshift({"key": new Date().getTime(), "description":null, "done":false})
    console.log("setting new state " + JSON.stringify(todos))
    this.setState({todos:todos});
  }

  debugMe() {
    console.log(this.state.todos);
  }

  renderTodo(todo) {
    console.log("render to do " + JSON.stringify(todo))
    return (
      <Reminder value={todo} />
    );
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
          <Reminder value={{"key": 34, "description":"hmm", "done":false}} />
          {this.renderTodo(this.state.todos[0])}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
