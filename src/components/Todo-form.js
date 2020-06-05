import React, { useState } from "react";
import { Form, Input, Button, InputGroupAddon, InputGroup } from "reactstrap";
import { v4 } from "uuid";
import { addtodo } from "../actions/action-creators";
import { connect } from "react-redux";

const TodoForm = ({ addtodo }) => {
	const [title, setTitle] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title === "") {
			return alert("Enter Something");
		}
		const todo = {
			title,
			id: v4(),
		};
		addtodo(todo);
		setTitle("");
	};

	return (
		<Form className='form' onSubmit={handleSubmit}>
			<InputGroup>
				<Input
					type='text'
					name='text'
					id='todo input'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<InputGroupAddon addonType='prepend'>
					<Button onClick={handleSubmit}>Add</Button>
				</InputGroupAddon>
			</InputGroup>
		</Form>
	);
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = { addtodo };
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
