import React from 'react';

export default function WarningBanner (props) {

    return (
        <div className='alert alert-danger'>
            <div>{props.text}</div>
            {props.children}
        </div>
    )
}