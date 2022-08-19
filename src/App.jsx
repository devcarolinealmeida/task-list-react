import React, { useState } from 'react'
import Tasks from './components/Tasks'
import './App.css'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Study',
      completed: false,
    },
    {
      id: '2',
      title: 'Read',
      completed: true,
    }
  ]) 
  
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ]
    setTasks(newTasks)
  }
  return (
    <div>
        <div className='container'>
          <AddTask handleTaskAddition={handleTaskAddition}/>
          <Tasks tasks={tasks}/>
        </div>
        
    </div>
  )
} 

export default App;