import React from 'react';
import './Reminder.css';

class Reminder extends React.Component {
  render() {
    return (
      <li>
        <input className="done" type="checkbox" checked></input>
        <input type="text" value="buy milk"></input>
        <button>x</button>
      </li>
    );
  }
}

export default Reminder;
