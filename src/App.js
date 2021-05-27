import './App.css';
import AddTodo from "./components/add-todo";
import RenderTodos from "./components/render-todo";
import UpdateModal from "./components/update-modal";
import { useState, useEffect } from "react";

function App() {

  const [todosData, settodosData] = useState({
    todos : null,
    todo : ""
  })
  const [editTodo , setEditTodo] = useState({
    isEdit : false,
    selectedTodo:"",
    selectedIndex : null
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
      const todo = {todo : tempTodos.todo, isCompleted: false};
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
    if(allTodos !== null){
      const parsedTodos = JSON.parse(allTodos);
      setEditTodo({
        isEdit: true,
        selectedTodo: parsedTodos[index].todo,
        selectedIndex : index
      })
    }
  }
  const todoSelector = (index)=>{
    const allTodos = window.localStorage.getItem("todos");
    
    if(allTodos !== null){
      const parsedTodos = JSON.parse(allTodos);
      parsedTodos[index].isCompleted = !parsedTodos[index].isCompleted;
      window.localStorage.setItem("todos",JSON.stringify(parsedTodos));
      settodosData({
        ...todosData,
        todos: parsedTodos
      });
    }
  } 
  const modalCloser=()=>{
    setEditTodo({
      ...editTodo,
      isEdit:false,
    })
  }
  const todoUpdater=(e)=>{
    setEditTodo({
      ...editTodo,
      selectedTodo : e.target.value
    })
  }


  const setUpdate=(e)=>{
    e.stopPropagation();
    const allTodos = window.localStorage.getItem("todos");
    const tempEditTodo = {...editTodo};

    if(allTodos !== null){
      const parsedTodos = JSON.parse(allTodos);
      parsedTodos[tempEditTodo.selectedIndex] = {...parsedTodos[tempEditTodo.selectedIndex], todo : tempEditTodo.selectedTodo};
      window.localStorage.setItem("todos", JSON.stringify(parsedTodos));
      
      setEditTodo({
        isEdit: false,
        selectedTodo: "",
        selectedIndex : null
      })
      settodosData({
        ...todosData,
        todos : parsedTodos
      });
    }
  }

  return (
    <div className="App">
      <AddTodo changeHandler = {(e)=>changeHandler(e)} todoAdder={todoAdder} inputValue={todosData.todo}></AddTodo>
      <div className="todos-title">Todos</div>
      <div className="message">Tap Todo to Mark Complete/Incomplete</div>
      {
        todosData.todos !== null 
        ?
        <RenderTodos 
          todos = {todosData.todos} 
          todoRemover={todoRemover} 
          todoEditor={todoEditor}
          todoSelector={todoSelector}
          ></RenderTodos>
        :
        null
      }
      {
      editTodo.isEdit ?
        <UpdateModal 
        todo = {editTodo.selectedTodo} 
        closeModal={modalCloser}
        todoUpdater={(e)=>todoUpdater(e)}
        setUpdate={(e)=>setUpdate(e)}
        ></UpdateModal>
      :null
      }
    </div>
  );
}

export default App;
