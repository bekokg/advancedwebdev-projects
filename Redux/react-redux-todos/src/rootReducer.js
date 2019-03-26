import {ADD_TODO, REMOVE_TODO} from './actionCreators';

const initialState = {
	todos: [],
	id: 0
};

function rootReducer(state=initialState, action) {
	switch(action.type) {
		case ADD_TODO:
			let newTodos = {...state};
			newTodos.id++;
		return {
			...newTodos,
			todos: [...newTodos.todos, {task: action.task, id: newTodos.id}]
		}
		case REMOVE_TODO:
			let todos = state.todos.filter(val => val.id !== action.id);
			return {...state, todos}
		default: 
			return state;
	}
}

export default rootReducer;