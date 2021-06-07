import React, { useEffect } from 'react';

export default function ToDoInput (props)  {   

    console.log('ToDoInput');

    function handleTaskInputChange(e){
        props.onTaskInputChange(e.target.value);
    };

    function handleSubmit (e) {
        console.log('handleSubmit');       
        e.preventDefault();
        props.onButtonClick(props.inputValue);
    };

    // useEffect(() => {
    //     console.log('useEffect ToDoInput');
    // });    

    return (
        <form onSubmit={handleSubmit}>
            <legend>Добавить задание</legend>  


            <div className="input-group mb-3">
                <input 
                    type="text"
                    placeholder="Task" 
                    className="form-control mb-2"      
                    value={props.inputValue}
                    onChange={handleTaskInputChange}                
                    // aria-label="Recipient's username" 
                    // aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                    <button 
                        type="submit"
                        className="btn btn-success"                      
                                                           
                    >
                        Добавить
                    </button>
                </div>
            </div>

        </form>
    )
   
} 


