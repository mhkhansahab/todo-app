import "./../styles/update-modal.css";


const updateModal =(props)=>{
    return(
        <div className="modal" onClick={props.closeModal}>
            <div className="card">
                <input value={props.todo} onChange={(e)=>props.todoUpdater(e)} onClick={(e)=>e.stopPropagation()}></input>
                <button onClick={(e)=>props.setUpdate(e)}>Update</button>
            </div>
        </div>
    );
}

export default updateModal;