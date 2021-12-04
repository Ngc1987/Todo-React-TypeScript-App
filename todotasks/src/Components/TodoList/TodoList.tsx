import React from 'react'
import { Todo } from '../../model';
import "./TodoList.scss"

interface Props {
	todos:Todo[];
	setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos, setTodos}) => {
	return (
		<div className="todos" >
			{todos.map((todo) => {
                return (
                    <li>{todo.name}</li>
                )
            })}
		</div>
	)
}

export default TodoList;
