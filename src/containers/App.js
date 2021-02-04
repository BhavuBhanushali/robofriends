import './App.css';
import React, { Component } from 'react';
import Cardlist from "../components/Cardlist"
import { robots } from '../components/robots'
import SearchBox from '../components/SearchBox'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
  OnSearchChange = (event) =>{
    this.setState({searchfield : event.target.value})
    
  }
  render() {
  const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })
    return (
      <>
        <div className="center">
          <h1 className="h1s">RoboHorse</h1>
          <SearchBox searchChange={this.OnSearchChange} />
        </div>
        <Cardlist robots={ filterRobots } />
      </>
    );
  }
}
export default App;
