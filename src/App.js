import React from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import './App.css'

class App extends React.Component {

  state = {data: [
    {
      title: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      title: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ]}

  addTask = taskName => {
    const newTask = {
      title: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      data: [...this.state.data, newTask]
    })
  }

  clearAll = () => {
    let newArr = [...this.state.data];
    let result = newArr.filter(task => task.completed === false );
    this.setState({data: result})
  }

  toggle = (id) => {
    //add toggle functionality
    let newArr = [...this.state.data];
    newArr = newArr.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    })
    this.setState({data: newArr})
  }

  render() {
    return (
      <div className="App">
        <h2>React To-Do List</h2>
        <ToDoList 
          data={this.state.data} 
          toggle={this.toggle}
        />
        <ToDoForm 
          addTask={this.addTask}
        />
        <button className="clear-btn" 
        onClick={this.clearAll}>
          Clear Completed Tasks
        </button>
      </div>
    );
  }
}

export default App;
