import React, { Component } from 'react';


export default class ContentData1 extends Component {

    constructor (props) {
        super(props);
        this.setState({
            type: this.props.type,
            loaded : false, 
            error : false, 
            message : '',
            dataSet: []
        })
        console.log('constructor ContentData'); 
        this.getDataFromAPI = this.getDataFromAPI.bind(this);
        this.controller = new AbortController();
        this.isMountedComponent = false;
    };

    getDataFromAPI (type) {
        console.log('getDataFromAPI');
        
        fetch(`https://jsonplaceholder.typicode.com/${type}`, {
            signal: this.controller.signal
        })
        .then(response => response.json())
        .then(json => {
            console.log(type, `https://jsonplaceholder.typicode.com/${type}`, 'json', json);   
            if (this.isMountedComponent) {
                this.setState({
                    type: type,
                    loaded : true, 
                    error : false, 
                    message : '', 
                    dataSet: json
                })  
            }
        
        })
        .catch(err => {
            if (err.name == 'AbortError') { 
                console.log("Прервано!");
                }  
            if (this.isMountedComponent) {
                this.setState({
                    type: type,
                    loaded : false, 
                    error : true, 
                    message : err, 
                    dataSet: []
                })   
            }                 
        
        })
        


    } 

    componentDidMount () {
        this.isMountedComponent = true;        
        this.getDataFromAPI (this.props.type);               
        console.log('componentDidMount ContentData');
    };

    componentDidUpdate(prevProps) {
        console.log('this.isMountedComponent', this.isMountedComponent);
        if (this.props.type !== prevProps.type) {
            console.log('!==');
            this.getDataFromAPI (this.props.type);
        }
        console.log('componentDidUpdate ContentData');
      }
    componentWillUnmount () {
        this.isMountedComponent= false;
        console.log('componentDidUpdate componentWillUnmount');
        this.controller.abort();
    }



    render () {

        return(
          
            this.props.render ({data: this.state}) 
        ) ;
        
    }        
    

}