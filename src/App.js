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
  
  return (
    <div>
        <div className='container'>
          <AddTask />
          <Tasks tasks={tasks}/>
        </div>
        
    </div>
  )
} 

export default App;