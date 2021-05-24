import "./../styles/todo.css";


const todo = (props)=>{
    return(
        <div className="todo">
            <div className="todo-title">{props.todo}</div>
            <div>
            <button className= "todo-btn" onClick={props.todoRemover}>Delete</button>
            <button className= "todo-btn" onClick={props.todoEditor}>Edit</button>
            </div>
        </div>
    );
}

export default todo;