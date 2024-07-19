import logo from './logo.svg';
import Avatar from 'react-avatar';
import './App.css';

import { Levko } from "./Levko";

function App() {
  return (
    <div className="App">

      <Avatar name="Foo Bar" />
      <Avatar facebookId="ihor.hanchuk" size="150" />
      <h1> Levko </h1>
      <h2>Kokos</h2>


      <Levko />

      <Levko />

      <Levko />
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
    </div>
  );
}

export default App;
