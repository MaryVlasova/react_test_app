import React from 'react';

export default function PostCard(props) {


    return (
        <div className="card catd__item mb-4">
            <svg
                className="bd-placeholder-img card-img-top"
                height="180"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Изображение"
                preserveAspectRatio="xMidYMid slice"
                role="img" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">IMG</text>
            </svg>
            <div className="card-body">
                <h5 className="card-title">
                    {props.post.title}
                </h5>
                <p className="card-text">
                    {props.post.body}
                </p>
            </div>
        </div>

    )

}