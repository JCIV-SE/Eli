import React, { Component } from 'react';
import ErrorPane from './ErrorPane';

class ErrorsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [0,1,2,3,4,5]
    }
  }

  // componentDidMount() {
  //   this.getErrors();
  // }

  // getErrors() {
  //   fetch('/notes/all')
  //     .then(results => results.json())
  //     .then(results => this.setState({errors: results}));
  // }

  render() {
    return (
      <div className='errorsContainer'>
        <div className='flexRow'>
          <ErrorPane data={ this.state.errors }/>
      </div>
    </div>
    )
  }
}

export default ErrorsContainer;