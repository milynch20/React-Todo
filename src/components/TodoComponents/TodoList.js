// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div>
            { props.list.map((listItem, index) => {
                return <Todo key={index} listItem={listItem} />
            })}
        </div>
    );
}

export default TodoList;