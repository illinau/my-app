import React, { Component } from 'react';
import './newTaskForm.css';


export default class NewTaskForm extends Component {

    state = {
        label: '',
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <form className="header"
                  onSubmit={this.onSubmit}>
                <h1>todos</h1>
                <input type="text"
                       className="new-todo"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done?"
                       autoFocus
                       value={this.state.label}/>
            </form>
        );
    };
};

