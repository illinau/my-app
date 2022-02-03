import React from 'react';
import './footer.css';

const Footer = ({toDo}) =>
    (
        <span className="todo-count"> {toDo} items left</span>
    );

export default Footer;