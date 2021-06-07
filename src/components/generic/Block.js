import React from 'react';

export default function Block(props) {

    return (
        <div className="p-5 border-bottom">
            <h2 className="text-center p-3 fs-4 fw-bold">
                {props.title}
            </h2>
            <div className="">
                {props.children}
            </div>
        </div>
    )
}