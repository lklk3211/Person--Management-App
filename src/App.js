// import { Component } from 'react'
// import Person from './Person/Person';

// class App extends Component {
//   constructor(props) {
//     console.log(`[App.js] contructor`)
//     super(props)
//     // CREATE YOUR OWN STATE
//     this.state = {
//       persons: [
//         {id: '100', name: 'Person 1', age: '25'},
//         {id: '200', name: 'Person 2', age: '24'},
//         {id: '300', name: 'Person 3', age: '30'},
//         {id: '400', name: 'Person 4', age: '27'},
//         {id: '500', name: 'Person 5', age: '28'}
//       ],
//       showPersons: false
//     }
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log(`[App.js] getDerivedStateFromProps`)
//     console.log(props)
//     console.log(state)
//     // Always return the update value of the state & null if no stte is defined
//     return state
//   }

//   componentDidMount() {
//     console.log(`[App.js] componentDidMount`)
//   }

//   onNameChangeHanler = () => {
//     // DONOT MUTATE THE STATE DIRECTLYY
//     // this.state.persons[0].name = 'My Person'

//     this.setState( {
//       persons: [
//         {name: 'Person One', age: '25'},
//         {name: 'Person Two', age: '24'},
//         {name: 'Person Three', age: '30'},
//         {name: 'Person Four', age: '27'},
//         {name: 'Person Five', age: '28'}
//       ]
//     } );
//   }

//   togglePersons = () => {
//     let stateValue = this.state.showPersons
//     this.setState({ showPersons: !stateValue })
//   }

//   deletePersonHandler = (index) => {
//     const personCopy = [...this.state.persons]
//     personCopy.splice(index, 1)
//     this.setState( {persons: personCopy} )
//   }

//   render() {
//     console.log(`[App.js] render`)

//     let persons = ( <h3>Click on the Toggle Persons button!</h3> )

//     if(this.state.showPersons) {
//       persons = (
//         <div className='container'>
//           {
//             this.state.persons.map( (person, index) => 
//               <Person 
//                 key={person.id}
//                 persons={this.state.persons}
//                 showPersons={this.state.showPersons}
//                 name={person.name} 
//                 age={person.age}
//                 deleted={() => this.deletePersonHandler(index)} /> )
//           }
//           <hr />
//           <button onClick={this.onNameChangeHanler} className='btn btn-danger'>Change Name</button>
//         </div>
//       )
//     }

//     return (
//       <>
//         <div className="container-fluid">
//           <h1> {this.props.appTitle} </h1> <hr />
//         </div>
//         <div className="container">
//           <button onClick={this.togglePersons} className='btn btn-success'>Toggle Persons</button>
//           <hr />
//           { persons }
//         </div>
//       </>
//     )
//   }
// } 
// export default App;

// // import './App.css';
// // import Button from './Button/Button';

// // const App = () => {
// //   // JavaScript
// //   const onClickHanlder = (event) => {
// //     console.log(event)
// //     console.log('Button - 1 was clicked!')
// //   }

// //   const numbers = [1, 2, 3, 4, 5, 6]

// //   return (
//     <div className="container">
//         <h1>Welcome to React!</h1> <hr />
//         <Button clicked={ (e) => onClickHanlder(e) } color="primary" text="Button - 1"></Button>
//         {/* <Button clicked={() => console.log('Works!')} color="primary" text="Button - 1"></Button> */}
//         <Button numbers={numbers} color="success"></Button>
//         <Button color="danger" text="Button - 3"></Button>
//         <Button color="warning" text="Button - 4"></Button>
//         <Button color="info"></Button>
//     </div>
// //   );
// // }

// // export default App;

import React from 'react';
import Person from './Person/Person'
import { useState } from 'react';
import { useEffect } from 'react';

const App = (props) => {

  const [personState, setPersonState] = useState([
    {id: '100', name: 'Person One', age: '25'},
    {id: '200', name: 'Person Two', age: '24'},
    {id: '300', name: 'Person Three', age: '30'},
    {id: '400', name: 'Person Four', age: '27'},
    {id: '500', name: 'Person Five', age: '28'}
  ])

  const [showPersons, setShowPersons] = useState(false)

  useEffect( () => alert('useEffect'), [] )

  const togglePersons = () => {
    let stateValue = showPersons
    let updatedStateValue = !stateValue
    setShowPersons( updatedStateValue )
  }

  const deletePersonHandler = (index) => {
    const personCopy = [...personState]
    personCopy.splice(index, 1)
    setPersonState( personCopy )
  }

  const onNameChangeHanler = () => {
    // DONOT MUTATE THE STATE DIRECTLYY
    // this.state.persons[0].name = 'My Person'

    setPersonState([
        {name: 'Person One', age: '25'},
        {name: 'Person Two', age: '24'},
        {name: 'Person Three', age: '30'},
        {name: 'Person Four', age: '27'},
        {name: 'Person Five', age: '28'}
      ]
    );
  }

  let persons = ( <h3>Click on the Toggle Persons button!</h3> )

    if(showPersons) {
      persons = (
        <div className='container'>
          {
            personState.map( (person, index) => 
              <Person 
                key={person.id}
                persons={personState}
                showPersons={showPersons}
                name={person.name} 
                age={person.age}
                deleted={() => deletePersonHandler(index)} /> )
          }
          <hr />
          <button onClick={onNameChangeHanler} className='btn btn-danger'>Change Name</button>
        </div>
      )
    }

  return (
    <>
        <div className="container-fluid">
          <h1> {props.appTitle} </h1> <hr />
        </div>
        <div className="container">
          <button onClick={togglePersons} className='btn btn-success'>Toggle Persons</button>
          <hr />
          { persons }
        </div>
    </>
  )
}
export default App;