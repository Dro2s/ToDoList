import React from 'react'
import './AppHeader.css'
import todo from '../foto/todo.svg'
import rocket from '../foto/rocket.svg'
function AppHeader() {
  return (
    <div className="AppHeader d-flex">
      <img src = {rocket} class = 'roc'></img>
     <img src = {todo} class = 'todo'></img>
    </div>
  )
}

export default AppHeader