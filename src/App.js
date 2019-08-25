import React from 'react';
import './App.css';
import Reminder from './Reminder';

let count = 0;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo() {
    // Make a copy of the list
    const todos = [...this.state.todos];
    // Add to beginning of list
    todos.unshift({"id": count++,
      "placeholder":"Enter a reminder " + count,
      "description":"",
      "done":false})
    // Set the state will cause the list to be rendered
    this.setState({todos:todos});
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
              <Reminder key={item.id} value={item} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
