import React, { Component } from 'react';
import FormLabel from './FormLabel';
import fetch from 'isomorphic-fetch';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.changeState = this.changeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeState() {
    console.log('hi');
    if (this.state.value === true) {
      this.setState({ value: true });
    } else {
      this.setState({ value: false });
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const url = '/api/login';

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log('THIS IS DATA BEING RECEIVED', json);
      })
      .catch(err => console.log({ err }));
  };

  render() {
    return (
      <div className="fullForm">
        <form onSubmit={this.handleSubmit}>
          <h1 className="heading">Welcome, Sign Up Here...</h1>
          <div className="form-group">
            <button
              onClick={this.handleSubmit}
              onChange={this.changeState}
              id="formButton"
              type="submit"
            >
              Sign Up Using Github
            </button>
          </div>
        </form>
      </div>
    );
  }
}
