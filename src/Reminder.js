import React from 'react';
import './Reminder.css';

class Reminder extends React.Component {

  delete = () => {
    this.props.removeTodo(this.props.value.id);
  }

  textChange = (event) => {
    this.props.updateText(this.props.value.id, event.target.value);
  }

  render() {
    return (
      <li>
        <input
          type="text"
          value={this.props.value.description}
          placeholder={this.props.value.placeholder}
          onChange={this.textChange}>
        </input>
        <button onClick={this.delete}>x</button>
      </li>
    );
  }
}

export default Reminder;
