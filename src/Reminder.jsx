import React from 'react';
import './Reminder.css';

class Reminder extends React.Component {

  delete = () => {
    this.props.removeTodo(this.props.value.id);
  }

  textChange = (event) => {
    this.props.updateText(this.props.value.id, event.target.value);
  }

  toggleDone = (event) => {
    this.props.toggleDone(this.props.value.id);
  }

  render() {
    const {done, description, placeholder} = this.props.value;
    return (
      <li>
        <input
          name="done"
          type="checkbox"
          checked={done}
          onChange={this.toggleDone} />
        <input
          type="text"
          value={description}
          placeholder={placeholder}
          onChange={this.textChange}>
        </input>
        <button onClick={this.delete}>x</button>
      </li>
    );
  }
}

export default Reminder;
