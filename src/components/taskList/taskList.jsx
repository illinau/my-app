import React from 'react';
import PropTypes from "prop-types";
import Task from '../task/task'
import './taskList.css';


const TaskList = ({todos, onDeleted, onToggleDone}) => {

    const elements = todos.map((todo) => {
        const { id } = todo;
        return <Task {...todo}
            key={id}
        onDeleted = {() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}/>
    })

    return (
        <ul className='todo-list'>
            { elements }
        </ul>
    );
};

TaskList.defaultProps = {
    onDeleted: () => {},
    onToggleDone: () => {}
};

TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func
};

export default TaskList;