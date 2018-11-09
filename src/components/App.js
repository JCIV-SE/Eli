import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ErrorsContainer from './ErrorsContainer';
import SignUp from './SignUp';
import '../assets/app.css';

export default class App extends Component {
  render() {
    // if (!document.cookies) {
    // 	// render dashboard
    // }
    // else {
    // 	// render dashboard with login overlaid
    // }

    return (
      <div className="appContainer">
        <nav className="navContainer">
          <h1 className="navTitle">Eli Dashboard</h1>
          <SearchBar />
        </nav>
        <ErrorsContainer />
      </div>
    );
  }
}
