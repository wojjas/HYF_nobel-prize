import React, { Component } from 'react';
import medal from './medal.gif';
import Year from './components/Year/Year';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={medal} className="nobel-medal" alt="logo" />
          <h1 className="title">Nobel Prizes</h1>
        </header>
        <p className="search-criteria">
          <form>
            <Year label="From: " placeholder="1901"/>         
            <Year label="To: " placeholder={new Date(Date.now()).getFullYear()}/>         
            <br/>
            <label>Category: </label>
            <select>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="medicine">Medicine</option>
              <option value="peace">Peace</option>
              <option value="literature">Literature</option>
              <option value="economics">Economics</option>
            </select>
          </form>
        </p>
      </div>
    );
  }
}

export default App;
