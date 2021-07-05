import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import Car from './Person/Car';
class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     username: ''
  //   }
  // }
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    username:'khan'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [      
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }
  changeMyName = (event) => {
    this.setState({
      username:event.target.value
    })
  }

  render () {
    const style ={
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding:'8px'
    };
    let headers = '';
    if (this.state.username) {
      headers = <h2>Hello {this.state.username} how are you?</h2>
      
    } else {
      headers = '';
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Max!!!!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
          <Car 
           Author="Elyas"
          />
        <NameChange
         names = {this.state.username}
         changed = {this.changeMyName}
         headers = {this.headers}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

class Car extends React.Component {
  render() {
    const style = {
      backgroundColor:'#ffbc00'
    }
    return <h2 style={style}>I am a Car!</h2>;
  }
}

class NameChange extends React.Component {
  render() {
    return (
      <form>
        {this.props.headers}
        Enter Your name here: <br/>
        <input type="text" onChange={this.props.changed}></input>
      </form>
    )
  }
}


