import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './InstructorApp.css';


/*class Instructors extends Component {
  render() {
    return (
      <Fragment>
        <li>
         <h3>{this.props.name}</h3>
         <h4>
          Hobbies: {this.props.hobbies.join(', ')}
         </h4>
        </li>
      </Fragment>
    )
  }
} */

// Instructor Component refactored using Stateless Functional Component
const Instructors = props => {
  return (
    <Fragment>
      <li>
        <h3>{props.name}</h3>
        <h4>
          Hobbies: {props.hobbies.join(', ')}
        </h4>
      </li>
      </Fragment>
    )
}

class InstructorApp extends Component {
  constructor() {
    super();
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        },
        {
          name: 'Matt',
          hobbies: ['math', 'd3']
        },
        {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        },
        {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {
      const ranIns = Math.floor(Math.random() * this.state.instructors.length);
      const ranHob = Math.floor(Math.random() * this.state.instructors[ranIns].hobbies);

      // Approach using Object.assign()

      // const instructors = this.state.instructors.slice();
      // instructors[ranIns] = Object.assign({}, instructors[ranIns]);
      // instructors[ranIns].hobbies = instructors[ranIns].hobbies.slice();
      // instructors[ranIns].hobbies.splice(ranHob, 1);

      //Approach using map()

      const instructors = this.state.instructors.map((inst, ind) => {
        if(ranIns === ind) {
          const hobbies = [...inst.hobbies];
          hobbies.splice(ranHob, 1);
          return {
            ...inst,
            hobbies
          }
        }
        return inst;
      })
      this.setState({instructors})
    }, 5000)
  }

  render() {
    const instructors = this.state.instructors.map((instructor, ind) => (
      <Instructors 
        key={ind}
        name={instructor.name}
        hobbies={instructor.hobbies}
        />
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default InstructorApp;
