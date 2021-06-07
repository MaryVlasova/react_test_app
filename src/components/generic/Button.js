import React from 'react';

export default function Block(props) {

    function handlelButtonClick() {
        props.onButtonClick(props.type);
    }

    return (
        <button
            className={'btn btn-' + props.style}
            onClick={handlelButtonClick}
        >
            {props.title}
        </button>
    )
}