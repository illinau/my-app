import React from 'react';
import './footer.css';

import TaskFilter from "../tasksFilter/taskFilter";

const Footer = () => {
    return (
        <div className="footer">
            <span className="todo-count">1 items left</span>
            <TaskFilter/>
            <button className="clear-completed">Clear completed</button>
        </div>
    );
};

export default Footer;