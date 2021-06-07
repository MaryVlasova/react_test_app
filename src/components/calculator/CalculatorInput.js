import React, { Component } from 'react';




class CalculatorInput extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onChange(e.target.value);
    }

    render() {
       
        const temperature = this.props.temperature;
        const scaleName = this.props.scaleName;
        return (
            <fieldset>
                <legend>
                    Введите градусы по шкале {scaleName}:
                </legend>            
                <input
                    className="form-control"
                    type="number"
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }
} 


export default CalculatorInput