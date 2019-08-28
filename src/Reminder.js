import React from 'react';
import './Reminder.css';

class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.value.id,
      description: props.value.description,
      placeholder: props.value.placeholder,
      done: props.value.done
    };
  }

  delete = () => {
    this.props.removeTodo(this.state.id);
  }

  render() {
    return (
      <li>
        <input type="text" value={this.state.description} placeholder={this.state.placeholder}></input>
        <button onClick={this.delete}>x</button>
      </li>
    );
  }
}

export default Reminder;
