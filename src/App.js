import React, { Component } from 'react';
import medal from './medal.gif';
import Year from './components/Year/Year';
import Button from './components/Button/Button';
import './App.css';
import Category from './components/Category/Category';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={medal} className="nobel-medal" alt="logo" />
          <h1 className="title">Nobel Prizes</h1>
        </header>
        <div className="search-criteria">
          <form>
            <Year label="From: " placeholder="1901"/>         
            <Year label="To: " placeholder={new Date(Date.now()).getFullYear()}/>         
            <Category label="Category: "/>
            <Button text="Clear"/>
            <Button text="Search"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
