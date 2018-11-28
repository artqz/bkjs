import React, { Component } from 'react';
import axios from 'axios';
import Location from '../components/Location';

const userId = 1;
class NewGame extends Component {
    state = {
        playerInfo: []
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/users/${userId}`).then(res => {
            this.setState({ playerInfo: res.data }); 
            console.log('yo!');
            
        })
    }

    changeLocation() {
        axios.put(`http://127.0.0.1:8000/api/users/1?update=location`, { location_id: 2 }).then(res => {
            console.log(res.data);
            this.setState({ playerInfo: res.data });
        });       
    }

    render() {
        return (
            <div>
                <Location changeLocation={this.changeLocation.bind(this)} locationId={this.state.playerInfo.location_id}/>
            </div>
        );
    }
}
export default NewGame;