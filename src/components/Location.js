import React, { Component } from 'react';
import axios from 'axios';

class Location extends Component {
    handleClick () {
        this.props.changeLocation();
    }

    render() {
        console.log(1);
        
        return (
            <div onClick={this.handleClick.bind(this)}>{this.props.locationId}</div>
        );
    }
}

export default Location;