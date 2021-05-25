import Todo from "./todo";

const renderTodo  = (props)=>{
    const data = props.todos;
    return(
        <div className="todos-container">
           {
               data.map((value, index)=>{
                   return <Todo todo={value} 
                   key={index} 
                   todoRemover={()=>props.todoRemover(index)}
                   todoEditor={()=>props.todoEditor(index)}
                   todoSelector={()=>props.todoSelector(index)}
                   ></Todo>
               })
           }
        </div>
    );
}


export default renderTodo;