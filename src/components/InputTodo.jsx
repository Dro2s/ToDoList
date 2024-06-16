import  './InputTodo.css'
function InputTodo(props){
 return(
    <>
    <input type="text"
    placeholder='Добавить новую задачу...'
    className="task" value={props.todo}
    onChange={(e) => props.setTodo(e.target.value)}>
    </input>
    <button className='addTask' onClick={()=> props.addTask()}>Добавть +</button>
    </>
 )
}
export default InputTodo