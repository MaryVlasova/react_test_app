import React, {useState} from 'react';

export default function UserItem (props) {

   const [show, setShow] = useState('') ;
  let user = props.user;

   function handleClick (event) {
      let button = event.currentTarget;
      button.classList.toggle('collapsed');
      if(button.classList.contains('collapsed')) {
        setShow('');
      } else {
        setShow('show');
        
      }
      
      
    
   }

    return (
    
        <div className="accordion-item">
          <h2 className="accordion-header" id={'heading' + user.id}>
          <button 
            onClick={handleClick}
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target={"#collapse" + user.id}
            aria-expanded="false" 
            aria-controls={"collapseTwo" + user.id}
          >

            {user.name}
            </button>
          </h2>
          <div 
          id={"collapse" + user.id }
          className={"accordion-collapse collapse " + show }
          aria-labelledby={'heading' + user.id}
          data-bs-parent="#accordionExample">
             <div className="accordion-body">  
               <div><strong>ID:</strong> {user.id} </div> 
               <div><strong>Имя:</strong> {user.name} </div>            
               <div><strong>Пользователь:</strong> {user.username} </div>            
               <div><strong>Сайт:</strong> {user.website} </div>            
               <div><strong>Компания:</strong> {user.company.name} </div>    
             </div>
           </div>
        </div> 
     
        
    )

}