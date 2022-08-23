import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import Header from './components/Header'
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

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10")
      setTasks(data)
    }
    fetchTasks()
  }, [])
 
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      return task
    })
    setTasks(newTasks)
  }
  
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ]
    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <div>
        <div className='container'>
          <Header />
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks 
            tasks={tasks} 
            handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion}
          />
        </div>
    </div>
  )
} 

export default App;