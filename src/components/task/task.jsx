import React, { Component } from 'react';
import { formatDistanceToNow } from "date-fns";
import './task.css';
import PropTypes from "prop-types";
import TaskList from "../taskList/taskList";

export default class Task extends Component {
    state = {
        date: formatDistanceToNow(this.props.time, {includeSeconds: true})
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({date: formatDistanceToNow(this.props.time, {includeSeconds: true})})
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

       const { label, onDeleted, onToggleDone, completed } =  this.props;

       let classNames = 'view';
       if(completed) {
           classNames += ' completed';
       };

        return (
            <li className={ classNames }>
                <input className="toggle" type="checkbox"/>
                <label>
                    <span
                        className="description"
                        onClick={ onToggleDone }
                    >
                        {label}
                    </span>
                    <span className="created">{this.state.date}</span>
                </label>
                <button className="icon icon-edit"/>
                <button className="icon icon-destroy"
                        onClick={ onDeleted }/>
            </li>
        );
    }
}

Task.defaultProps = {
    completed: false,
    onDeleted: () => {},
    onToggleDone: () => {}
};

Task.propTypes = {
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func
};