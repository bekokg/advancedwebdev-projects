import React, {Component} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actionCreators';
import { Route } from 'react-router-dom';

class TodoList extends Component {
	constructor() {
		super();
	}

	handleAdd = (val) => {
		this.props.addTodo(val);
	}

	removeTodo = id => {
		this.props.removeTodo(id)
	}
	render() {
		const todos = this.props.todos.map((todo, ind) => <Todo removeTodo={() => this.removeTodo(todo.id)} todo={todo.task} key={ind}/>);
		return (
			<div>
				<Route path='/todos/new' component={props => (<NewTodoForm {...props} handleSubmit={this.handleAdd}/>)} />
				<Route exact path='/todos' component={() => <div>{todos}</div>} />
			</div>
		)
	}
}

function mapStateToProps(reduxState) {
	return {
		todos: reduxState.todos
	}
}

export default connect(mapStateToProps, {addTodo, removeTodo})(TodoList);