import React from 'react';
import { formatDistanceToNow} from "date-fns";
import './task.css';

const locale = require('date-fns/locale/ru')

const Task = ({label}) => {
    return (
        <li className="view">
            <input className="toggle" type="checkbox"/>
                <label>
                    <span className="description">{label}</span>
                    <span className="created">{formatDistanceToNow(new Date(2020, 3, 13))}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
        </li>
    );
};

export default Task;