import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  //hi mandy
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Counter buttonText='hi'/>
      </div>
    )
  }
}

export default App;
