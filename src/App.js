import React, { Component } from 'react';
import medal from './medal.gif';
import Year from './components/Year/Year';
import Button from './components/Button/Button';
import Server from './components/Server';
import './App.css';
import Category from './components/Category/Category';


class App extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleFromYearChange = this.handleFromYearChange.bind(this);
    this.handleToYearChange = this.handleToYearChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);

    this.maxYear = new Date(Date.now()).getFullYear();
    this.minYear = '1901';
    this.state = { fromYear: this.minYear, toYear: this.maxYear, category: ''};
  }
  search() {
    const categoryString = this.state.category.length >= 0 ? `&category=${this.state.category}` : '';
    const url = `http://api.nobelprize.org/v1/prize.json?year=${this.state.fromYear}&yearTo=${this.state.toYear}${categoryString}`;
    
    Server.asyncRequest(url, response => {
      console.log('server response', response);
    });
  }

  handleFromYearChange(year) {
    this.setState({fromYear: year});
  }
  handleToYearChange(year) {
    this.setState({toYear: year});
  }
  handleCategoryChange(category) {
    this.setState({category: category});
  }


  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={medal} className="nobel-medal" alt="logo" />
          <h1 className="title">Nobel Prizes</h1>
        </header>
        <div className="search-criteria">
          <form>
            <Year label="From: " placeholder={this.minYear} min={this.minYear} max={this.maxYear} year={this.state.fromYear} onYearChange={this.handleFromYearChange} />
            <Year label="To: " placeholder={this.maxYear} year={this.state.toYear} min={this.minYear} max={this.maxYear} year={this.state.toYear} onYearChange={this.handleToYearChange}/>
            <Category label="Category: " selected={this.state.category} onCategorySelected={this.handleCategoryChange}/>
            <Button text="Search" action={this.search} />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
