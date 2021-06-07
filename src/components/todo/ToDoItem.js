import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function ToDoItem (props)  {
    console.log('ToDoItem');

    // useEffect(() => {
    //     console.log('useEffect ToDoItem');
    // });

    function handleClick ()  {
       // console.log('props.index', props.index);
        props.onChange(props.index);     
    };

    function handleDelete ()  {
       // console.log('props.index', props.index);
        props.onDelete(props.index);     
    };

    let classes = [];

    //console.log('props', props);

    if(props.completed) {
        classes.push('todoitem_completed');
    } else {           
        classes = classes.filter((c) => {return c !== 'todoitem_completed'});          
    }

    return (
        <li className="d-flex justify-content-between list-group-item" >
            <label className="d-flex align-items-center">
              
                <input 
                    name={'input_' + props.index}
                    className="todoitem__input"                         
                    onClick={handleClick}
                    onChange={() => {}}
                    type="checkbox" 
                    checked={props.completed} />

                
                <span className={'px-3 ' + classes.join(' ')}>
                    {props.index + 1}. {props.title}
                </span>
              

            </label>
            <span onClick={handleDelete}                 
                className='btn btn-outline-primary'>             
                &times;
            </span>                
        </li>
    )       


};


ToDoItem.propTypes = {
    number : PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
}

export default ToDoItem;