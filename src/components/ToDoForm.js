import React from 'react';
import './ToDoForm.css'

class ToDoForm extends React.Component {

state = {newTask: ''}

onChange = (e) => {
    this.setState({
        newTask: e.target.value
    });
}

onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({ newTask: '' });
}

    render() {
        return (
            <div className="ToDoForm">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="task"></label>
                    <input 
                        type="text"
                        placeholder="Add Task Here" 
                        onChange={this.onChange}
                        value={this.state.newTask} 
                    />
                    <button>
                        Add Task
                    </button>
                </form>
            </div>
        );
    }
}

export default ToDoForm;