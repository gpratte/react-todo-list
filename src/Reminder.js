import React from 'react';
import './Reminder.css';

class Reminder extends React.Component {
  constructor(props) {
    super(props);
    console.log("in reminder constructor " + JSON.stringify(props))
    this.state = {
      key: props.value.key,
      description: props.value.description,
      done: props.value.done
    };
  }
  render() {
    return (
      <li key={this.state.key}>
        <input className="done" type="checkbox" defaultChecked></input>
        <input type="text" value={this.state.description}></input>
        <button>x</button>
      </li>
    );
  }
}

export default Reminder;
