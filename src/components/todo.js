const todo = (props)=>{
    return(
        <div className="todo">
            <h1>{props.todo}</h1>
            <button onClick={props.todoRemover}>Delete</button>
            <button onClick={props.todoEditor}>Edit</button>
        </div>
    );
}

export default todo;