import React from 'react';
import ToDo from './ToDo';
import './ToDoList.css'

class ToDoList extends React.Component {

    render () {
        return (
            <div className="ToDoList">
                {this.props.data.map(task => (
                    <ToDo 
                        id={task.id}
                        task={task.title} 
                        toggle={this.props.toggle}
                        completed={task.completed}
                        key={task.id}
                    />
                ))}
            </div>
        );
    }
}

export default ToDoList;