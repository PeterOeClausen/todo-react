import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import './todo.scss';

const useStyles = makeStyles({
    marginTop1: {
        margin: '1rem 0rem 0rem 0rem'
    },
    list: {
        maxHeight: '50%'
    }
});

function Todo() {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState("");
    const [todoItems, setTodoItems] = useState([]);
    useEffect(() => {
        document.title = `You've added ${todoItems.length} items`;
    });

    const onAddTodo = () => {
        if(inputValue){
            setTodoItems([...todoItems, { text: inputValue, done: false }]);
            setInputValue("");
        }
    }

    const onDeleteTodo = (i) => {
        setTodoItems([...todoItems.slice(0,i), ...todoItems.slice(i+1, todoItems.length)]);
    }

    const onTodoToggle = (i) => {
        setTodoItems(todoItems.map((todo, index) => index === i ? { ...todo, done: !todo.done } : todo))
    }

    const onKeydown = (e) => {
        if(e.keyCode === 13) { //Enter
            onAddTodo();
        }
    }

    return (
        <div className="todo-container">
            <div className="max-width-600">
                <h1>Peter's Todo App in React using Hooks</h1>
                <div className="list-wrapper">
                    <List className={classes.list}>
                        { todoItems.map((todo,i) => 
                            <ListItem key={todo.text + i}>
                                <Checkbox value={todo.done} onChange={() => onTodoToggle(i)}/>
                                <ListItemText primary={todo.text}/>
                                <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTodo(i)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItem>)
                        }
                    </List>
                </div>
                <div className="flex f-col">
                    <TextField label="Enter a todo" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={onKeydown} placeholder="Read up on React Hooks"/>
                    <Button
                        className={classes.marginTop1}
                        color="primary"
                        variant="contained"
                        onClick={onAddTodo}>
                            Add
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Todo;