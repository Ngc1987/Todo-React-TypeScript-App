import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import InputField from './Components/InputField/InputField';
import TodoList from './Components/TodoList/TodoList';
import { Todo } from './model';
import {DragDropContext, DropResult} from "react-beautiful-dnd";

// let name = "Thomas";

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
	    setTodos([...todos, {id: Date.now(), name: todo, isDone: false}]);
	    setTodo("");
    } 
  }

  console.log(todo)
  console.log(todos)
  const onDragEnd = (result:DropResult) => {
      console.log(result)
      const {source, destination} = result;

    if(!destination) return;
    
    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add, active = todos, complete = completedTodos;

    if(source.droppableId === "TodosList") {
      // console.log(add, active);
      add = active[source.index];
      active.splice(source.index, 1)
      // console.log(add, active);
    } else {
      console.log(add, active);
      add = complete[source.index];
      complete.splice(source.index, 1)
      console.log(add, active);
    }

    if(destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }

    setCompletedTodos(complete);
    setTodos(active)
  }

  return (

    <DragDropContext onDragEnd={onDragEnd} >
        <div className="App">
        <Header/>
        <InputField todo={todo} setTodo={setTodo} handleAddTask={handleAddTask}/>
        <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        completedTodos={completedTodos} 
        setCompletedTodos={setCompletedTodos} 
        >
        </TodoList>

    </div>
    </DragDropContext>
    
  );
}

export default App;
