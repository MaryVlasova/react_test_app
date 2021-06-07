import React, { Component } from 'react';
import CalculatorInput from './CalculatorInput.js';
import Block from '../generic/Block.js';



 class Calculator extends Component  {

    constructor (props) {
        super(props);
        this.hendleCelsiusChange = this.hendleCelsiusChange.bind(this);
        this.hendleFahrenheitChange = this.hendleFahrenheitChange.bind(this);
        this.state = {
            scale: 'c',
            temperature: ''
        };
    };

    hendleCelsiusChange(temperature){
        this.setState({temperature: temperature, scale: 'c'})
    }

    hendleFahrenheitChange(temperature){
        this.setState({temperature: temperature, scale: 'f'})
    }


    convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    };
      
    convertToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    };

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    render () {  

        const scaleNames = {
            c: 'Цельсия',
            f: 'Фаренгейта'
          };          
        
        const scale = this.state.scale;
        const temperature =  this.state.temperature;

        const celsiusT = scale === 'c' ? temperature : this.tryConvert(temperature, this.convertToCelsius);
        const fahrenheitT = scale === 'f' ? temperature : this.tryConvert(temperature, this.convertToFahrenheit);

        
         return (
            <Block title="Calculator" > 
                <div className="Calculator">
                    <CalculatorInput
                    temperature={celsiusT}
                    scaleName={scaleNames['c']}
                    scale="c"
                    onChange={this.hendleCelsiusChange} 
                    />
                    <CalculatorInput
                    temperature={fahrenheitT}
                    scaleName={scaleNames['f']}
                    scale="f"
                    onChange={this.hendleFahrenheitChange} 
                    />
                </div>
            </Block>

        )
    }

}

export default Calculator