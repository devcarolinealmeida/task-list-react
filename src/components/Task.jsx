import React from 'react';

import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    return (
        <div 
            className='task-container'
            style={task.completed ? {borderLeft: '6px solid chartreuse'} : {} }>

            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className='buttons-container' onClick={() => handleTaskDeletion(task.id)} >
                <button className='remove-task-button'>X</button>
            </div>
        </div>
    )
}
 
export default Task;