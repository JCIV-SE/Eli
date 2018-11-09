import React, { Component } from 'react';
import FormLabel from './FormLabel';
import fetch from 'isomorphic-fetch';
import '../../public/stylesheet/signup.css';

export default class TestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      savedSearches: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = e => {
    e.preventDefault();

    let formData = {
      formSender: this.state.name,
      formSecret: this.state.password
    };

    if (formData.formSender.length < 1 || formData.formSecret.length < 1) {
      return false;
    }
    console.log('THIS IS FORM DATA THAT SHOULD SEND', { formData });
    const url = '/api/add';
    const { username, password, savedSearches } = this.state;
    const client = { username };
    const secret = { password };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: JSON.stringify(client),
        password: JSON.stringify(secret)
      }
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log('THIS IS DATA BEING RECEIVED', json);
      })
      .catch(err => console.log({ err }));
  };

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handlePass(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className="fullForm">
        <form onSubmit={this.handleSubmit}>
          <h1 className="heading">Welcome, Sign Up Here...</h1>
          <fieldset className="form-group">
            <FormLabel className="form-label" htmlFor="formName" title="Username: " />
            <input
              id="formName"
              className="form-input"
              name="name"
              type="text"
              required
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="Enter Username Here..."
            />
          </fieldset>

          <fieldset className="form-group">
            <FormLabel className="form-label" htmlFor="formPass" title="Password: " />
            <input
              id="formPass"
              className="form-input"
              name="password"
              type="password"
              required
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="Enter Password Here..."
            />
          </fieldset>

          <div className="form-group">
            <input onClick={this.handleSubmit} id="formButton" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
