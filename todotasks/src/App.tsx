import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import InputField from './Components/InputField/InputField';
import TodoList from './Components/TodoList/TodoList';
import { Todo } from './model';

// let name = "Thomas";

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
	    setTodos([...todos, {id: Date.now(), name: todo, isDone: false}]);
	    setTodo("");
    } 
  }

  console.log(todo)
  console.log(todos)

  return (
    <div className="App">
        <Header/>
        <InputField todo={todo} setTodo={setTodo} handleAddTask={handleAddTask}/>
        <TodoList todos={todos} setTodos={setTodos} >
            

        </TodoList>

    </div>
  );
}

export default App;
