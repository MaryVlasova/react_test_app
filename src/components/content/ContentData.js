import React, { Component } from 'react';


export default class ContentData extends Component {

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

    };

    getDataFromAPI (type) {
        
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => {
            return response.json()
        } )
        .then(json => {
            console.log(json, type);

            this.setState({
                type: type,
                loaded : true, 
                error : false, 
                message : '', 
                dataSet: json
            })  

        
        })
        .catch(err => {
            this.setState({
                type: type,
                loaded : false, 
                error : true, 
                message : err, 
                dataSet: []
            })   
        
        })


    } 

    componentDidMount () {  
        this.getDataFromAPI (this.props.type);               
        console.log('componentDidMount ContentData');
    };

    componentDidUpdate(prevProps) {       
        if (this.props.type !== prevProps.type) {        
            this.getDataFromAPI (this.props.type);
        }      
      }


    render () {

        return(          
            this.props.render ({data: this.state}) 
        ) ;
        
    }        
    

}