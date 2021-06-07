import React from 'react';
import UserItem from './UserItem.js';


export default function Users (props) {


    return (
       
        <div className="accordion" id="accordionExample">
        {    props.users.map((user) => {
        
                return <UserItem  user={user} />
            }) 
        }
        </div> 
        
    )

}