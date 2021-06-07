import React, {useState, useMemo} from 'react';
import ToDoItem from './ToDoItem.js';
import List from '../generic/List.js';
import Block from '../generic/Block.js';
import ToDoInput from './ToDoInput.js';
//import PropTypes from 'prop-types';

function ToDo () {
    
    console.log('ToDo');

    const [todo, setTodo] = useState([
        {title: 'Task 1',  completed: false},
        {title: 'Task 2',  completed: false},  
    ]);

    const [inputValue, setInputValue] = useState('')

    function toggleTodo (index) {

        setTodo(todo.map((item, i) => {
            if (i === index) {
                item.completed = !item.completed;
            }
            return item;
        }));

    };

    function deleteTodo (index) {
        setTodo(todo.filter((item, i) => i !== index));
    } 

    function handleTaskInputChange (value) {
        setInputValue(value);
    }

    function addTodo (value) {
        console.log('value', value);
        if(!value.trim()) {
            alert('Пустое поле');
            return;
        }
    
        setTodo(todo.concat([{title: value,  completed: false}]));
    }


    let toDoList = useMemo(() => {
        console.log('useMemo', todo);
        return todo.map((element, index) => {
            return <ToDoItem 
                    title={element.title}                           
                    completed={element.completed} 
                    onChange={toggleTodo}
                    onDelete={deleteTodo}
                    key={index}                      
                    index={index}
                />
            })
    }, [todo]);    

    return (
        <Block title="To do" >
           <ToDoInput 
           onTaskInputChange={handleTaskInputChange} 
           inputValue={inputValue}
           onButtonClick={addTodo}
           />
            <List>
                {toDoList}
            </List>
          
        </Block>

    )
}

export default ToDo;