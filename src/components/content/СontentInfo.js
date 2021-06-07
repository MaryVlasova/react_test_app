import React, { useState, useEffect } from 'react';
import Block from '../generic/Block.js';
import ContentData from './ContentData.js';
import ContentBlock from './ContentBlock.js';

import Button from '../generic/Button.js'

function ContentInfo() {

    const [contentType, setContentType] = useState('posts');

    function handleButtonClick(type) {
        setContentType(type)
    }


    return (

        <Block title="Content">
            <div className="d-flex justify-content-center mb-5">
                <div className="me-2">
                    <Button
                        style="success"
                        onButtonClick={handleButtonClick}
                        type='posts'
                        title="Посты"
                    />
                </div>
                <div >
                    <Button
                        style="primary"
                        onButtonClick={handleButtonClick}
                        type='users'
                        title="Пользователи"
                    />
                </div>
            </div>


            <ContentData
                type={contentType}
                render={(resource) => {

                    return <ContentBlock
                        resource={resource}
                        contentType={contentType} />
                }}
            />

        </Block>


    )

}

export default ContentInfo;