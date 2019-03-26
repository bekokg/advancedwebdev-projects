import React from 'react';

const Todo = ({todo, removeTodo}) => (
	<li>
		{todo}
		<button onClick={removeTodo}> X </button>
	</li>
);

export default Todo;