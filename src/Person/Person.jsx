// import React, { PureComponent } from 'react'
// import './Person.css'

// class Person extends PureComponent {

//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

//   static getDerivedStateFromProps(props, state) { 
//     console.log(`[Person.js] getDerivedStateFromProps`)
//     // Always return the update value of the state & null if no stte is defined
//     return state
//   }

//   // shouldComponentUpdate(newProps, newState) {
//   //   console.log(`[Person.js] shouldComponentUpdate`)
//   //   console.log(`[Person.js] shouldComponentUpdate`, newProps)
//   //   if(this.props.persons !== newProps.persons || this.props.showPersons !== newProps.showPersons) {
//   //     return true
//   //   } else {
//   //     return false
//   //   }
//   // }

//   getSnapshotBeforeUpdate(props, state) {
//     console.log(`[Person.js] getSnapshotBeforeUpdate`)
//     return state
//   }

//   componentDidUpdate() {
//     console.log(`[Person.js] componentDidUpdate`)
//   }

//   render() {
//     const paraStyles = {
//       color: 'blue', 
//       fontSize: '1.5em'
//     }


//     console.log(`[Person.js] render`)
//     return (
//       <div className='parent-div'>
//         <div className="container">
//           <div className="my-div">
//             <p style={ paraStyles } className='lead'>My name is {this.props.name} and I am {this.props.age} years old!</p>
//             <i onClick={this.props.deleted} className="fa-solid fa-x"></i>
//           </div>
//         </div>
//         <div className="container">
//           <input className='form-control' type="text" placeholder='enter the name...' />
//         </div>
//       </div>
//     )
//   }
// }

// Person.defaultProps = {
//     name: 'Default Name',
//     age: '0'
// }

// export default Person


import './Person.css'

import { useState } from 'react'

const Person = (props) => {
  // DONOT CREATE A SINGLETON STATE
  // const [personState, setPersonState] = useState({
  //   personStateOne: 'This is a Person State One',
  //   personStateTwo: 'This is a Person State Two'
  // }) 

  // We can use useState multuiple times
  const [personStateOne, setPersonStateOne] = useState('This is a Person State One')
  const [personStateTwo, setPersonStateTwo] = useState(true)

  const paraStyles = {
    color: 'blue', 
    fontSize: '1.5em'
  }

  const changeComponentStateHandler = () => {
    setPersonStateOne('This is an Updated Person State One')
  }

  return (
    <div className='parent-div'>
        <div className="container">
          <div className="my-div">
            <p style={ paraStyles } className='lead'>My name is {props.name} and I am {props.age} years old!</p>
            <i onClick={props.deleted} className="fa-solid fa-x"></i>
          </div>
        </div>
        <div className="container my-container">
          <input className='form-control' type="text" placeholder='enter the name...' />
          <button onClick={changeComponentStateHandler} className='btn btn-info'>Change Person States</button>
        </div>
      </div>
  )
}

export default Person;