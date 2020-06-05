import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { removetodo } from "../actions/action-creators";

const TodosList = ({ todos, removetodo }) => {

   const handleDone = (id) => {
	   removetodo(id)
   }


	return todos === [] ? (
		""
	) : (
		<Container>
			<ListGroup>
				{todos.map((todo) => (
					<ListGroupItem key={todo.id}>
						{todo.title}
						<span className='float-right' onClick={() => handleDone(todo.id)}>Done</span>
					</ListGroupItem>
				))}
			</ListGroup>
		</Container>
	);
};

const mapStateToProps = (state) => ({
	todos: state,
});
const mapDispatchToProps = { removetodo };
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
