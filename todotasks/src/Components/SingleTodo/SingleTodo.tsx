import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../../model';
import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import {MdOutlineDone} from "react-icons/md";
import "../TodoList/TodoList.scss";
import {DragDropContext, Draggable} from "react-beautiful-dnd";

type Props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	index: number;
}




const SingleTodo = ({todo, todos, setTodos, index}: Props) => {

	const [edit, setEdit] = useState<boolean>(false)
	const [editTodo, setEditTodo] = useState<string>(todo.name)

	// const handleEdit = (id:number) => {
	// 	setTodos(todos.map((todo) => todo.id === id ? {...todo, name: } : todo))
	// }
	const handleDelete = (id:number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	}


	const handleDone = (id:number) => {
		setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
	}
	const handleEdit = (e: React.FormEvent, id:number) => {
		e.preventDefault();

		// setTodos(todos.map((todo) => {
		// 	todo.id === id ? {...todo, todo.name: editTodo} : todo
		// }))
		setTodos(todos.map((todo) => todo.id === id ? {...todo, name : editTodo} : todo))

		setEdit(false);
	}

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
		
	}, [edit])

	return (
		<Draggable draggableId={todo.id.toString()} index={index} >
			{(provided, snapshot) => (
				<form className={`todos__single ${snapshot.isDragging ? "drag" : ""}`} 
					onSubmit={(e) =>handleEdit(e, todo.id)}
					{...provided.draggableProps} 
					{...provided.dragHandleProps} 
					ref={provided.innerRef}
					>

			{edit ?(
				<input 
					value={editTodo} 
					onChange={(e) => setEditTodo(e.target.value)} 
					className="todos__single--text"
					ref={inputRef} />
			)
				:
				todo.isDone ? (
					<s className="todos__single--text">{todo.name}</s>
				) : (
				<span className="todos__single--text">{todo.name}</span>
				)

			}

			<div>
				<span className="icon">
					<AiFillEdit onClick={() => {
						if(!edit && !todo.isDone) {
							setEdit(!edit);

						}
					} } />
				</span>
				<span className="icon">
					<AiFillDelete onClick={() => handleDelete(todo.id)} />
				</span>
				<span className="icon">
					<MdOutlineDone onClick={() => handleDone(todo.id)} />
				</span>
			</div>
		</form>
			)}
		
		</Draggable>
	)
}

export default SingleTodo;
