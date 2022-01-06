export interface Todo {
	id: number;
	name: string;
	isDone: boolean;
}

// import {useReducer} from 'react';

// type Actions = 
// 	| {type: "add"; payload: string}
// 	| {type: "remove"; payload: string}
// 	| {type: "remove"; payload: string};


// const todoReducer = (state:Todo[], action:Actions) => {
// 	switch(action.type) {
// 		case "add":
// 			return [
// 				...state, {id: Date.now(), todo: action.payload, isDone: false}
// 			];
// 		case "remove":
// 			return state.filter((todo) => todo.id !== action.payload)
// 		case "done":
// 			return state.map((todo) => todo.id !== action.payload ? {...todo, isDone: !todo.isDone} : todo)
// 		default: return state
// 	}
// }

// const ReducerExemple = () => {

// 	const [state, dispatch] = useReducer(todoReducer, [])
// 	return (
// 		<div>
			
// 		</div>
// 	)
// }
// export default model;

