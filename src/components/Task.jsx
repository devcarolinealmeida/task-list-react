import React from 'react';

import './Task.css'

const Task = ({ task, handleTaskClick }) => {
    return (
        <div 
            className='task-container' onClick={() => handleTaskClick(task.id)}
            style={task.completed ? {borderLeft: '6px solid chartreuse'} : {} }>

            <div className='task-title'>
                {task.title}
            </div>

            <div className='buttons-container'>
                <button className='remove-task-button'>X</button>
            </div>
        </div>
    )
}
 
export default Task;