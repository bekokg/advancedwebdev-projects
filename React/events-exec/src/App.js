import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todos: []
    };

  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.newTodo !== '') {
      const todos = [...this.state.todos, this.state.newTodo];
      this.setState({todos, newTodo: ''})
    }

  }

  removeTodo = item => {
    const todos = this.state.todos.filter(todo => {
      return todo !== item;
    })
    this.setState({todos})
  }

  render() {
    const todos = this.state.todos.map((item, ind) => (
      <li key={ind}>{item}<button className='delBtn' onClick={()=> this.removeTodo(item)}>delete</button></li>
    ));
    return (
      <div className='container'>
        <h1>Simple Add Todo</h1>
        <hr/>
        <form onSubmit={this.onSubmit}>
          <input
          className='todo-input'
          type='text'
          autoComplete='off'
          name='newTodo'
          value={this.state.newTodo}
          placeholder='What needs to be done?'
          onChange = {e => this.setState({[e.target.name]: e.target.value})}
          />
          <button className='saveBtn' type='submit'>Save</button>
        </form>
        <div className='content'>
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
