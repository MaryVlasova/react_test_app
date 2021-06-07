import React from 'react';

function HeaderMenuItem (props) {

    //console.log('props', props);
    let styleClass = props.active ? 'text-secondary' : 'text-white' ;

    function onClick () {
        props.onClick(props.index);
    }

    return (
        
        <li>
            <a 
                href={"/#" + props.link}
                className={"nav-link px-2 " + styleClass} 
                onClick={onClick} 
            >
                {props.title}                
            </a>
        </li>


    );
}

export default HeaderMenuItem;