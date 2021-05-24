import Todo from "./todo";

const renderTodo  = (props)=>{
    const data = props.todos;
    return(
        <div className="todos-container">
           {
               data.map((value, index)=>{
                   return <Todo todo={value.todo} 
                   key={index} 
                   todoRemover={()=>props.todoRemover(index)}
                   todoEditor={()=>props.todoEditor(index)}
                   ></Todo>
               })
           }
        </div>
    );
}


export default renderTodo;