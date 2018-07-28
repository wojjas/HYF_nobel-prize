import React, { Component } from 'react';
import medal from './medal.gif';
import Year from './components/Year/Year';
import Button from './components/Button/Button';
import './App.css';
import Category from './components/Category/Category';


class App extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleFromYearChange = this.handleFromYearChange.bind(this);
    this.handleToYearChange = this.handleToYearChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);

    this.state = { fromYear: '', toYear: '', category: 'All' };
  }
  search() {
    console.log('searchCriteria', this.state);
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
            <Year label="From: " placeholder="1901" year={this.state.fromYear} onYearChange={this.handleFromYearChange} />
            <Year label="To: " placeholder={new Date(Date.now()).getFullYear()} year={this.state.toYear} onYearChange={this.handleToYearChange}/>
            <Category label="Category: " selected={this.state.category} onCategorySelected={this.handleCategoryChange}/>
            <Button text="Search" action={this.search} />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
