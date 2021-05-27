import "./../styles/todo.css";


const todo = (props)=>{

    const getText = (todo)=>{
        if(todo.isCompleted){
            return "Mark as Incomplete";
        }else{
            return "Mark as Complete";
        }
    }

    return(
        <div className="todo">
            <div 
            onClick={props.todoSelector}
            className="over-div"
            >{getText(props.todo)}
            </div>
            <div 
                className="todo-title" 
                style={props.todo.isCompleted ? {"textDecoration": "line-through"}:{"textDecoration": "none"}}
                >
                {props.todo.todo}
            </div>
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