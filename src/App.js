import React, { Component } from 'react';
import Triangle from './Triangle';




class App extends Component{
    constructor(){
        super()

        this.state = {
            Vertices:[
                [0,50],
                [25,0],
                [50,50]
            ],
            Color: this.getRandomColors()
        }
    }

    changeColor = ()=>{
        this.setState({
            Color: this.getRandomColors()
        })
    }

    getRandomColors=()=>{
        const clrs = ['red', 'pink', 'yellow'];
        return clrs[Math.floor(Math.random() *clrs.length)]
    } 

    render(){
         return(
            <svg width="100%" height="100%" viewBox="0 0 50 50" style={{ border: "pink solid", borderRadius: "10px"}}>
            <Triangle Vertices={ this.state.Vertices} Color={this.state.Color} delay={0} handleClick={this.changeColor}/>
            </svg>
        )
    }
};

export default App;