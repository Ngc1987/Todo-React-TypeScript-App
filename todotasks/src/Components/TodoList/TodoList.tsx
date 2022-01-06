import React from 'react'
import { Todo } from '../../model';
import SingleTodo from '../SingleTodo/SingleTodo';
import "./TodoList.scss"
import {Droppable} from "react-beautiful-dnd";

interface Props {
	todos:Todo[];
	setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
	completedTodos:Todo[];
	setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
// ugyfgg
const TodoList:React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
	return (
		<div className="container">
			<Droppable droppableId="TodosList" >
				{(provided, snapshot) => (
					<div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
						ref={provided.innerRef}
						{...provided.droppableProps} >

						<span className="todos__header">
							Active Tasks
						</span>
						{todos.map((todo, index) => (
							<SingleTodo 
								todo={todo} 
								key={todo.id} 
								todos={todos} 
								setTodos={setTodos}
								index={index} />
						))}
						{provided.placeholder}
					</div>
				)}
			
			</Droppable>
			<Droppable droppableId="TodosRemove" >
				{(provided, snapshot) => (
					<div className={`todos remove ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
						ref={provided.innerRef}
						{...provided.droppableProps} >

						<span className="todos__header">
							Completed Tasks
						</span> 
						{completedTodos.map((todo, index) => (
							<SingleTodo 
								todo={todo} 
								key={todo.id} 
								todos={completedTodos} 
								setTodos={setCompletedTodos}
								index={index} />
						))}
						{provided.placeholder}
					</div>
				)}
			
			</Droppable>
		</div>
	)
}

export default TodoList;
