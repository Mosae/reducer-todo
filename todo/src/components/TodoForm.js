import React, { useState } from 'react';

const TodoForm = (props) => {
	const [item, setItem] = useState('');
	const { addTodo, clearCompleted } = props;
	const handleChange = (event) => setItem(event.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(item);
		setItem('');
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="inputBox"
					type="text"
					name="item"
					value={item}
					onChange={handleChange}
					placeholder="Add Todo"
				/>
				<button className="addBtn">Add + </button>
				<button className="clearBtn" onClick={clearCompleted}>
					{' '}
					Clear Complete
				</button>
			</form>
		</div>
	);
};

export default TodoForm;
