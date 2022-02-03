import React, { Component } from 'react';
import './taskFilter.css';
import PropTypes from "prop-types";
import TaskList from "../taskList/taskList";

export default class TaskFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'completed', label: 'Completed' }
    ];

    render() {

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'selected' : ''

            return (
                <button type='button'
                        className={`${clazz}`}
                        key={name}
                        onClick={() => onFilterChange(name)}>
                    { label }
                </button>
            );
        });

        return (
            <div className="filters">
                <li>
                {buttons}
                </li>
            </div>
        );
    }
};

TaskFilter.defaultProps = {
    filter: 'all',
    onFilterChange: () => {}
};

TaskFilter.propTypes = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func
};
