import React, { useRef } from 'react';
import "./InputField.scss"

interface Props{
	todo:string;
	setTodo:React.Dispatch<React.SetStateAction<string>>;
	handleAddTask: (e: React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({todo, setTodo, handleAddTask}) => {

	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<form className="input"onSubmit={(e) => {
			handleAddTask(e);
			inputRef.current?.blur();
		}}>
			<input 
				ref={inputRef}
				type="input" 
				placeholder="Enter a task" 
				className="input__box"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button type="submit" className="input__submit" >Add</button>
		</form>
	)
}


export default InputField;