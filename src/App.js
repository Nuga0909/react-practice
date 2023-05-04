import React, { Component } from 'react';
import './App.css';
import Person from './Comp/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Maxy", age: "23" },
      { name: "Maxaine", age: "25" },
      { name: "Ayo", age: "29" }
    ],
    showPersons: false
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    const myStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <button style={myStyle} onClick={this.togglePersonHandler}>Show persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
