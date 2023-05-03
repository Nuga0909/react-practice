import React, { useState } from 'react';
import './App.css';
import Person from './Comp/Person';



// class App extends Component {
//   state = {
//     persons: [
//       { name: "Maxy", age: "23" },
//       { name: "Maxaine", age: "25" },
//       { name: "Ayo", age: "29" }
//     ]
//   }

//   switchNameHandler = () => {
//     this.setState({
//       persons: [
//         { name: "Maxo", age: "23" },
//         { name: "Maxainoo", age: "25" },
//         { name: "Ayoxy", age: "29" }
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I am a react App</h1>
//         <button onClick={this.switchNameHandler}>Switch name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//         <Person name={personState.persons[1].name} age={personState.persons[1].age} />
//         <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//       </div>
//     );
//   }
// }

// export default App;


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