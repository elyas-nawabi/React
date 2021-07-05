import React, { Component } from 'react';
import Radium from "radium";
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
      { id:'i1', name: 'Max', age: 28 },
      { id:'i2', name: 'Manu', age: 29 },
      { id:'i3',  name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    username:'khan',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });
      const person = {
         ...this.state.persons[personIndex]
      }; 
   // alternative way:
   // const person = Object.assign({}, this.state.persons[personIndex])
   person.name = event.target.value;
   const persons = [...this.state.persons];
   persons[personIndex] = person;
   this.setState({persons: persons});
   
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
  deletePersonHandler = (personIndex) =>{
    //  const persons = this.state.persons;
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

     persons.splice(personIndex, 1);
     this.setState({persons: persons})
  }
  togglePersonHandler = () =>
  {
     const doesShow = this.state.showPersons;
     console.log(doesShow)
     this.setState({showPersons: !doesShow});
  }
  render () {
    const style ={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border: '1px solid blue',
      padding:'8px', 
      cursor: 'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
        persons = (
            <div>
                {
                    this.state.persons.map((person, index) => {
                        return <Person  
                        click={this.deletePersonHandler.bind(this,index)}
                        name={person.name}
                        age = {person.age}
                        key = {person.id}
                        changed = {(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })
                }
            </div>
        );
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'gold',
          color: 'black',
        }
    }
    let headers = '';
    if (this.state.username) {
      headers = <h2>Hello {this.state.username} how are you?</h2>
      
    } else {
      headers = '';
    }
    const classes =[];
    if (this.state.persons.length <= 2) {
       classes.push('red');
    }
    if (this.state.persons.length <= 1) {
       classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler.bind(this,false)}>Switch Name</button>
       {persons}
        {/* {  
        this.state.showPersons === true ? 
            <div>
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
            </div> : "nothing"
        
        } */}
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
export default Radium(App);
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