import React, { Component } from 'react';
import './App.css';
import Person from './Comp/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Maxy", age: "23" },
      { name: "Maxaine", age: "25" },
      { name: "Ayo", age: "29" }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "23" },
        { name: "Maxainoo", age: "25" },
        { name: "Ayoxy", age: "29" }
      ]
    })
  }

  onChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Maxy", age: "23" },
        { name: event.target.value, age: "25" },
        { name: "Ayoxy", age: "29" }
      ]
    })
  }

  render() {
    const myStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <button style={myStyle} onClick={this.switchNameHandler.bind(this, "maxyyyy!!")}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.onChangedHandler}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;


// const App = props => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "Maxy", age: "23" },
//       { name: "Maxaine", age: "25" },
//       { name: "Ayo", age: "29" }
//     ]
//   });

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: "Maxo", age: "23" },
//         { name: "Maxainoo", age: "25" },
//         { name: "Ayoxy", age: "29" }
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I am a react App</h1>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} />
//       <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//     </div>
//   );
// }

// export default App;