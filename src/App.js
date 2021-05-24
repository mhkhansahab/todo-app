import './App.css';
import AddTodo from "./components/add-todo";
import RenderTodos from "./components/render-todo";
import { useState, useEffect } from "react";

function App() {

  const [todosData, settodosData] = useState({
    todos : null,
    todo : ""
  })
  
  useEffect(() => {
    const allTodos = window.localStorage.getItem("todos");
    const tempTodos = {...todosData};
    
    if(allTodos !== null){
      tempTodos.todos = JSON.parse(allTodos);    
    }
    settodosData(tempTodos);
  }, [])


  const changeHandler = (e)=>{
    const todo = e.target.value;
    const tempTodos = {...todosData};
    tempTodos.todo = todo;

    settodosData(tempTodos);
  }

  const todoAdder = ()=>{
    const tempTodos = {...todosData};
    if(tempTodos.todo !== ""){
      if(tempTodos.todos === null){
        var todos = [];
      }else{
        var todos = tempTodos.todos;
      }
      const todo = {todo : tempTodos.todo};
      todos.push(todo);
      tempTodos.todos = todos;
      tempTodos.todo="";
      window.localStorage.setItem("todos",JSON.stringify(tempTodos.todos));
      
      settodosData(tempTodos);
    
    }else{
      alert("Enter Something")
    }
  }

  const todoRemover=(index)=>{
    const allTodos = window.localStorage.getItem("todos");
    const tempTodos = {...todosData};
    
    if(allTodos !== null){
      const parsedTodos = JSON.parse(allTodos);
      parsedTodos.splice(index,1);
      tempTodos.todos = parsedTodos;
    }
    window.localStorage.setItem("todos",JSON.stringify(tempTodos.todos))
    settodosData(tempTodos);
  }

  const todoEditor =(index)=>{
    const allTodos = window.localStorage.getItem("todos");
    const tempTodos = {...todosData};
    
    if(allTodos !== null){
      const parsedTodos = JSON.parse(allTodos);
    }
    // window.localStorage.setItem("todos",JSON.stringify(tempTodos.todos))
    // settodosData(tempTodos);
  }


  return (
    <div className="App">
      <AddTodo changeHandler = {(e)=>changeHandler(e)} todoAdder={todoAdder} inputValue={todosData.todo}></AddTodo>
      {
        todosData.todos !== null 
        ?
        <RenderTodos todos = {todosData.todos} todoRemover={todoRemover} todoEditor={todoEditor}></RenderTodos>
        :
        null
      }
    </div>
  );
}

export default App;
