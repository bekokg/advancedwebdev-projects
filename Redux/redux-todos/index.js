let initialState = {
	todos: [],
	id: 0
}

function rootReducer(state=initialState, action) {
	let newTodo = {...state};
	switch(action.type) {
		case 'ADD_TODO':
		newTodo.id++;
		return {
			...newTodo,
			todos: [...newTodo.todos, {task: action.task, id: newTodo.id}]
		}
		case 'REMOVE_TODO':
		let todos = state.todos.filter(todo => todo.id !== +action.id);
		return {...state, todos};
		default: 
		return state;
	}
}

let store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

$(document).ready(function() {

	$('ul').on('click', 'button', function(event) {
		store.dispatch({
			type: 'REMOVE_TODO',
			id: $(event.target).attr('id')
		});
		$(event.target).parent().remove();
	})
	$('form').on('submit', function(event) {
		event.preventDefault();
		let newTask = $('#task').val();
		store.dispatch({
			type: 'ADD_TODO',
			task: newTask
		});
		let currState = store.getState();
		let $newLi = $('<li>', {
			text: newTask
		});
		let $button = $('<button>', {
			text: 'X',
			id: currState.id
		})
		
		$newLi.append($button);
		$('#todos').append($newLi);
		$('form').trigger('reset');
	})
})
