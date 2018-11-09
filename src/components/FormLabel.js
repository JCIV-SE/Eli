import React, { Component } from 'react';

export default class FormLabel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <label htmlFor={this.props.htmlFor}>{this.props.title}</label>;
  }
}
