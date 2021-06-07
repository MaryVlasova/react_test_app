import React, {useEffect} from 'react';

function List (props) {
    
    useEffect(() => {
        console.log('useEffect List');
    });


    return (
        <ul className="list-group">
            { props.children }
        </ul>
    )
}

export default List;