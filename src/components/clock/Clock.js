import React, {useState, useEffect} from 'react';
import Block from '../generic/Block.js';

function Clock () {

    const [date, setDate] = useState(new Date());

    function tick() {
        setDate(new Date())
    };


    useEffect (() => {
        console.log('useEffect');
        let timerId = setInterval( () => {
            tick()
        } , 1000)
        console.log(timerId);
        
        return function cleanup () {
            console.log('useEffect cleanup');
            clearInterval(timerId);
        }
    }, [])


    return (
        <Block title="Time" >
            <div className="text-center">
                It is {date.toLocaleTimeString()}.
            </div>     
        </Block>
       
    )

}

export default Clock;