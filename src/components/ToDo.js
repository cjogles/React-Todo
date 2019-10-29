import React from 'react';
import '../components/ToDo.css'

class ToDo extends React.Component {

    render() {
        return (
            <div className={`ToDo-${this.props.completed}`} onClick={() => this.props.toggle(this.props.id)}>
                {this.props.task}
            </div>
        );
    }
}

export default ToDo;