import React from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import './App.css'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {data: [
      {
        title: "example task",
        id: 123456789,
        completed: false
      }
    ]}
  }
  
  componentDidMount(){
    if(this.state === null || this.state === undefined) {
      this.state = {data: [
        {
          title: "example task",
          id: 123456789,
          completed: false
        }
      ]}
    } else {
      this.setState(JSON.parse(window.localStorage.getItem('tasks')))
    }
  }

  componentDidUpdate(){
    window.localStorage.setItem('tasks', JSON.stringify(this.state.data))
  }

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
    // window.localStorage.setItem("tasks", JSON.stringify(this.state.data));
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
