import React, { Component } from 'react';
import axios from 'axios';
import Map from '../components/Map';
import Chat from '../components/Chat';

class Game extends Component {
  state = {
    playerInfo: [],
    location: [],
    settings: [],
    isLoading: true
  }
  getSettings() {
    this.setState({ isLoading: false });
  }

  getLocation() {
    const locationId = this.state.playerInfo.location_id;
    axios.get(`http://127.0.0.1:8000/api/locations/${locationId}`).then(res => {
        this.setState({ location: res.data });
        this.getSettings();
    })
  }

  getPlayerInfo() {
    axios.get(`http://127.0.0.1:8000/api/users/1`).then(res => {
        this.setState({ playerInfo: res.data });
        this.getLocation(); 
    })
  }

  componentDidMount() {
    this.getPlayerInfo();
  }

  changeLocation(locationId) {
    this.setState({ isLoading: true });
    console.log(locationId);
    
    axios.put(`http://127.0.0.1:8000/api/users/1?update=location`, { location_id: locationId }).then(res => {
      console.log(res.data);
      this.setState({ playerInfo: res.data });
      this.getLocation(); 
    })   
  }

  render() {     
    const { isLoading }  = this.state;   
    
    return isLoading ? 'Загрузка...' : (
      <div>
      <Map location={this.state.location} changeLocation={this.changeLocation.bind(this)} />
      <Chat />
      </div>
    );
  }
}

export default Game;
