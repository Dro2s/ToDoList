import './TaskTodo.css'
function TaskTodo(props){
    return(
        <div className = 'qest' key={props.id}>
            <label className='check'><input type="checkbox" className = 'chek__input'
             onClick={()=> props.toggleTask(props.id)} defaultChecked={props.status}></input>
                <span className='check__box'></span>
            </label>
            <p className = 'boxText'
             style={props.status ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{props.value}</p>
            <button className = 'delete'
             onClick={()=> props.deleteTask(props.id)}><img src='./src/foto/Vectordel.svg'></img></button>
        </div>
    )
}
export default TaskTodo