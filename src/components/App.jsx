import React, { useState } from 'react'
import AppHeader from './AppHeader.jsx'
import InputTodo from './InputTodo.jsx'
import TaskTodo from './TaskTodo.jsx'
import './App.css'

function App() {
  const [todo, setTodo] = useState('')
  const [tasks, setTasks] = useState([])
  const [done, setDone] = useState('')

  let copiTasks = tasks

  const addTask = () =>{
    const TaskTodo = {
      id : Math.random(),
      value : todo,
      status : false,
    }
    let newTask = [TaskTodo, ...tasks]
    setTasks(newTask)
    setTodo('')
  }
  
    const deleteTask = (id) =>{
      let del = tasks.filter(e => e.id !== id)
      setTasks(del)
    }
    const toggleTask = (id) =>{
      let toggle = tasks.map(e => e.id === id ? {...e , status : !e.status } : {...e})
      setTasks(toggle)
    }

    switch (done){
      case 'All':
        copiTasks = tasks
      break;
      case 'Activ':
        copiTasks = tasks.filter(e => e.status === false)
      break;
      case 'completes':
        copiTasks = tasks.filter(e => e.status === true)
      break;
      case 'clear':
        setTasks(tasks.filter(e => e.status === true))
      default:
        break;
    }
  let TaskTodoList = copiTasks.map(e => <TaskTodo 
                                        id={e.id}
                                        value ={e.value} 
                                        status ={e.status}
                                        deleteTask ={deleteTask}
                                        toggleTask = {toggleTask} />)
  return (
    <div className="App">
      <AppHeader />
      <p></p>
      <InputTodo addTask ={addTask} todo ={todo} setTodo = {setTodo}/>
      <p></p>
      <button className='quests quests1' onClick={()=> setDone('All')}>Все задачи</button>
      <button className='quests' onClick={()=> setDone('completes')}>Завершённые</button>
      <button className='quests' onClick={()=> setDone('Activ')}>В процессе</button>
      {TaskTodoList}
    </div>
  )
}

export default App