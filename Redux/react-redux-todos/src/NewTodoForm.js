import React, { Component } from 'react';

class NewTodoForm extends Component {
		constructor() {
			super();
			this.state = {
				task: ''
			}
		}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleSubmit(this.state.task);
		e.target.reset();
		this.props.history.push('/todos')
	}
  //This is handling the change
	handleChange = e => {
		this.setState({
			[e.target.name]: [e.target.value]
		})
	}

	render () {
		return (
				<form onSubmit={this.handleSubmit}>
					<input type='text' name='task' id='task' onChange={this.handleChange}/>
					<button>Add a Todo!</button>
				</form>
		)
	}
}

export default NewTodoForm;