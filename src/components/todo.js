import "./../styles/todo.css";


const todo = (props)=>{
    return(
        <div className="todo">
                <div 
                className="todo-title" 
                style={props.todo.isCompleted ? {"textDecoration": "line-through"}:{"textDecoration": "none"}}
                onDoubleClick={props.todoSelector}
                >
                {props.todo.todo}</div>
                <div>
            <button className= "todo-btn" onClick={props.todoRemover}>Delete</button>
            <button 
            className= "todo-btn" 
            onClick={props.todoEditor}
            disabled={props.todo.isCompleted ? true: false}
            style = {props.todo.isCompleted ? { "opacity": "0.65", "cursor": "not-allowed"}:{}}
            >Edit</button>
            </div>
        </div>
    );
}

export default todo;