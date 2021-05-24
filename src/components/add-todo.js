import "./../styles/add-todo.css";

const addTodo = (props)=>{
    return(
        <div className="add-container">
            <input value={props.inputValue} placeholder="Add your todo...." onChange={(e)=>props.changeHandler(e)}></input>
            <button onClick={props.todoAdder}>Add</button>
        </div>
    );
}

export default addTodo;