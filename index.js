import React from 'react';
import ReactDOM from 'react-dom';

import NewTaskForm from "./components/newTaskForm/newTaskForm";
import Footer from "./components/footer/footer";
import TaskList from "./components/taskList/taskList";


import './index.css';

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];

    return (
      <section className="todoapp">
          <NewTaskForm/>
          <section className="main">
          <TaskList
            todos={todoData}
          />
          <Footer/>
          </section>
      </section>
    );
};


ReactDOM.render(<App/>,
    document.getElementById('root'));

