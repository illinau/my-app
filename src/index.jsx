import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NewTaskForm from "./components/newTaskForm/newTaskForm";
import Footer from "./components/footer/footer";
import TaskList from "./components/taskList/taskList";
import TaskFilter from "./components/tasksFilter/taskFilter";

import './index.css';

export default class App extends Component  {

    maxId = 100;

    state = {
        todoData : [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term:'',
        filter: 'all'
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            completed: false,
            id: this.maxId++,
            time: Date.now()
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {

            const idx = todoData.findIndex((el) => el.id === id)
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx+1);
            const newArray = [...before, ...after];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {

            const newArr = [
                ...todoData,
                newItem
            ];
            return{
                todoData: newArr
            };
            });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx+1)
        ];
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {

            return {
                todoData: this.toggleProperty(todoData, id, 'completed')
            };
        });
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    clearCompleted = () => {
        this.setState(({ todoData }) => {

            return {
                todoData: [...todoData.filter(todo => !todo.completed)]
            };
        });
    };

    filter(items,  filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.completed);
            case 'completed':
                return items.filter((item) => item.completed);
            default:
                return items;
        }
    };

    search(items, term) {

        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    };

    render () {

        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(
            this.search(todoData, term), filter);

        const doneCount = todoData
            .filter((el) => el.completed).length;

        const todoCount = todoData.length - doneCount;

        return (
            <section className="todoapp">
                <NewTaskForm onItemAdded={this.addItem}/>
                <section className="main">
                    <TaskList
                        todos={visibleItems}
                        onDeleted={ this.deleteItem }
                        onToggleDone={this.onToggleDone}
                    />
                    <section className="footer">
                    <Footer toDo={todoCount}/>
                    <TaskFilter filter={filter}
                                onFilterChange={this.onFilterChange}/>
                    <button
                        className="clear-completed"
                        onClick={() => this.clearCompleted()}
                    >Clear completed
                    </button>
                    </section>
                </section>
            </section>
        );
    };
};


ReactDOM.render(<App/>,
    document.getElementById('root'));

