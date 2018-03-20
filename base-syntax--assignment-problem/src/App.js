import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state={
    UserNames:[
      {name:"Ashish Sarkar",attitude:"Cool"},
      {name:"Anu",attitude:"Hard Working"},
      {name:"Manu",attitude:"Smart"}
    ]
  }
  userOutputHandler=(name,att)=>{
    this.setState({
      UserNames:[
        {name:name,attitude:att},
        {name:name,attitude:att},
        {name:name,attitude:att}
      ]
    });
  }
  changeValuesHandler=(event)=>{
    this.setState({
      UserNames:[
        {name:event.target.value,attitude:"Cool"},
        {name:event.target.value,attitude:"Hard Working"},
        {name:event.target.value,attitude:"Smart"}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        {/* code starts here */}
      {/* <UserInput name={this.state.UserNames[0].name} change={this.changeValuesHandler}/> */}
      {/* <button  onClick={()=> this.userOutputHandler('Ashish','Clever')}>Switch Name</button> */}
      <UserOutput username={this.state.UserNames[0].name} attitude={this.state.UserNames[0].attitude}  change={this.changeValuesHandler} />
      {/* <UserInput name={this.state.UserNames[1].name} change={this.changeValuesHandler}/> */}
      <UserOutput username={this.state.UserNames[1].name} attitude={this.state.UserNames[1].attitude}  change={this.changeValuesHandler}/>
      {/* <UserInput name={this.state.UserNames[2].name} change={this.changeValuesHandler}/> */}
      <UserOutput username={this.state.UserNames[2].name} attitude={this.state.UserNames[2].attitude}  change={this.changeValuesHandler}/>
      </div>
    );
  }
}

export default App;
