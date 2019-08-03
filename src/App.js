import React from 'react';
import './App.css';
import Reminder from './Reminder';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={"header"}>
          <h1>Reminders</h1>
          <button className="header-item">New Reminder</button>
          <button className="header-item">Hide Done</button>
        </div>
        <div>
          <ul>
            <Reminder/>
            <Reminder/>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
