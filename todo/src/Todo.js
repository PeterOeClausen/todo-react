import React from 'react';
import './todo.scss';

function Todo() {
    
    var data = [
        { name: "Opdatér Sursen" },
        { name: "Opdatér LinkedIn" },
    ];

    return (
        data.map(todo => <p key={todo.name}>{todo.name}</p>)
    )
}

export default Todo;