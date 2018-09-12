import React, { Component } from 'react';


const Overview= props => (
  <div><div className='pane-title'> { props.passedInfo } </div><br></br></div>
);
const Notes = props => (
  <div><div className='pane-notes'> { props.passedInfo } </div><br></br><br></br></div>
);
const Resources = props => (
  <div><div className='pane-resources'> Resources:  { props.passedInfo } </div><br></br></div>
);
const Technologies = props => (
  <div><div className='pane-tech'> Technologies: { props.passedInfo } </div><br></br></div>
);
const ID = props => (
  <div><div className='pane-id'> SSID: { props.passedInfo } </div><br></br></div>
);
const ErrorCode = props => (
  <div><div className='pane-error-code'> Error Code: { props.passedInfo } </div><br></br></div>
);
const FileLocation = props => (
  <div><div className='pane-file'> File Location: { props.passedInfo } </div>
  <br></br><br></br></div>
);


class ErrorPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    let feedItems = [];
    console.log('Error Info: ', this.props.data);

    // for (let i = 0; i < this.state.errorInfo.length; i += 1) {
    //   feedItems.push(
    //     // <pane className='pane'>
    //     //   <Overview passedInfo={this.state.errorInfo.overview}/>
    //     //   <Notes passedInfo={this.state.errorInfo.notes}/>
    //     //   <Resources passedInfo={this.state.errorInfo.resources}/>
    //     //   <Technologies passedInfo={this.state.errorInfo.technologies}/>
    //     //   <ID passedInfo={this.state.errorInfo.errorID}/>
    //     //   <ErrorCode passedInfo={this.state.errorInfo.errorcode}/>
    //     //   <FileLocation passedInfo={this.state.errorInfo.filelocation}/>
    //     // </pane>

    //     <div className='pane'>
    //       <Overview passedInfo={"text"}/>
    //       <Notes passedInfo={"text"}/>
    //       <Resources passedInfo={"text"}/>
    //       <Technologies passedInfo={"text"}/>
    //       <ID passedInfo={"text"}/>
    //       <ErrorCode passedInfo={"text"}/>
    //       <FileLocation passedInfo={"text"}/>
    //     </div>
    //   )
    // }

    return (
      <div className='pane-container'>
        { feedItems }
      </div>
    )
  } 
}

export default ErrorPane;

{/* <overview className='pane-title'>
Did not update connected files after changing File Type from JS to JSX
</overview><br></br>
<notes className='pane-notes'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</notes><br></br><br></br>
<resources className='pane-resources'>
Resources: <a href='https://stackoverflow.com/questions/52294985/react-native-typeerror-cannot-read-property-createclient-of-undefined'>
Link 1
</a>
</resources><br></br>
<technologies className='pane-tech'>
Technologies: Express Node React Redux
</technologies><br></br>
<id className='pane-id'>
SSID: N/A
</id><br></br>
<errorcode className='pane-error-code'>
Error Code: N/A
</errorcode><br></br>
<filelocation className='pane-file'>
File Location: ./src/components/ErrorPane.js
</filelocation><br></br><br></br> */}
