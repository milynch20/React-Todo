import React from 'react';
import './Todo.css';

function Todo(props) {
    return(
        <p>{props.listItem.item}</p>
    );
}

export default Todo;