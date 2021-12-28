import React from 'react';
import Task from '../task/task'
import './taskList.css';



const TaskList = ({ todos }) => {

    return (
        <ul className='todo-list'>
            {
                todos.map((todo) => {
                    return <Task label={todo.label}/>
                })
            }
        </ul>
    );
};

export default TaskList;