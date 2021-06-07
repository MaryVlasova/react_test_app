import React from 'react';
import Calculator from '../calculator/Calculator.js';
import Clock from '../clock/Clock.js';
import ContentInfo from '../content/СontentInfo.js';
import ToDo from '../todo/ToDo.js';


export default function Main () {
    

    return (
        <div className="container">    
            <Clock/>
            <ToDo/>
            <Calculator /> 
            <ContentInfo /> 
        </div>
    )
}

