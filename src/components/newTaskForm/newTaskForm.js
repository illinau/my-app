import React from 'react';
import './newTaskForm.css';

const NewTaskForm = () => {
    return (
        <div className="header">
            <h1>todos</h1>
            <input type="text"
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus />
        </div>
    );
};

export default NewTaskForm;