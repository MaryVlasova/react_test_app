import React, {useState, useEffect} from 'react';
import Spinner from '../generic/Spinner.js';
import WarningBanner from '../generic/WarningBanner.js';
import Users from '../user/Users.js';
import Posts from '../post/Posts.js';

export default function ContentBlock (props) {

    let result = '';
    console.log('ContentBlock', props);
    let resource = props.resource;
    if (!resource.data) {
        console.log('resource', resource);
        result = <Spinner />;
    } else if (resource.data.error) {        
        result = <WarningBanner text={`Ошибка! ${resource.data.message}`}/>;
    } else if   ( !resource.data.loaded) {
        console.log('resource.data.loaded', resource.data.loaded);
        result = <Spinner />;
    } else if (resource.data.dataSet.length === 0 || 
        (['posts', 'users']).indexOf(resource.data.type) === -1) {        
        result = <WarningBanner text="Нет данных"/>;
    } else {

        switch (resource.data.type) {
            case 'users':
                result = <Users users={resource.data.dataSet} />;
            break;
            case 'posts':
                result = <Posts posts={resource.data.dataSet} />;
            break;           
        }
     
    }

    return (

            <>
              {result}
            </>
 
    )

}