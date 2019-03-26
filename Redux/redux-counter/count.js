let initialState = {
	count: 0
}

function rootReducer(state=initialState, action) {
	let newState = {...state};
	switch (action.type) {
		case 'INCREMENT':
	 newState.count++
		return newState;
		case 'DECREMENT':
	 newState.count--;
		return newState;
		default:
		return newState;
	}
}

let store = Redux.createStore(rootReducer);

let currentState = store.getState();
$('#count').text(currentState.count);

$(document).ready(function() {
	$('#increment').on('click', function() {
		store.dispatch({
			type: 'INCREMENT'
		})
		let currentState = store.getState();
		$('#count').text(currentState.count);
	})
	$('#decrement').on('click', function() {
		store.dispatch({
			type: 'DECREMENT'
		})
		let currentState = store.getState();
		$('#count').text(currentState.count);
	})
})
