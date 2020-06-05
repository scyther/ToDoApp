import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./components/Todo-form";
import { Row, Col, Container } from "reactstrap";
import TodosList from "./components/Todos-list";
import {Provider} from 'react-redux';
import store from './store'

const App =() => {
	return (
		<Provider store={store}>
		<Container className="themed-container">
			<Row>
				<Col md={{ offset: "4", size: "6" }} sm='10'>
					<h4>To Do App (React and Redux)</h4>
				</Col>
			</Row>
			<Row>
			<Col md={{ offset: "3", size: "6" }} sm='10'>
				<TodosList />
			</Col>
			</Row>
			<Row>
				<Col md={{ offset: "3", size: "6" }} sm='10'>
					<TodoForm />
				</Col>
			</Row>
		</Container>
		</Provider>
	);
}

export default App;
