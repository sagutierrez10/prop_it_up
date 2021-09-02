import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            currentAge: this.props.currentAge
        };
    }
    render(){
        const newAge = () => {
            console.log(`you clicked on button`)
            this.setState({currentAge: this.state.currentAge+1})
        }
    
        return( <>
            <div className="personcard">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.currentAge}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <p><button onClick={newAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button></p>
            </div>
            </>
            )
    }
}
    
export default PersonCard;