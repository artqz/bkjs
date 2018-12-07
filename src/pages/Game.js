import React, { Component } from 'react';
import axios from 'axios';
import Map from '../components/Map';
import Chat from '../components/Chat';
import Character from '../components/Сharacter';
import Shop from '../components/Shop';
import Inventory from '../components/Inventory';

const userId = 1;
class Game extends Component {
	state = {
		playerInfo: [],
		location: [],
		settings: [],
		isLoading: true,
	};
	getSettings() {
		this.setState({ isLoading: false });
	}

	getLocation() {
		const locationId = this.state.playerInfo.location_id;
		axios.get(`http://127.0.0.1:8000/api/locations/${locationId}`).then(res => {
			this.setState({ location: res.data });
			this.getSettings();
		});
	}

	getPlayerInfo() {
		axios.get(`http://127.0.0.1:8000/api/users/${userId}`).then(res => {
			this.setState({ playerInfo: res.data });
			this.getLocation();
			console.log('yo!');
		});
	}

	componentDidMount() {
		this.getPlayerInfo();
	}

	changeLocation(locationId) {
		this.setState({ isLoading: true });
		console.log(locationId);

		axios
			.put(`http://127.0.0.1:8000/api/users/1?update=location`, {
				location_id: locationId,
			})
			.then(res => {
				console.log(res.data);
				this.setState({ playerInfo: res.data });
				this.getLocation();
			});
	}

	buyItem() {
		console.log('game event');
		//this.setState({ isLoading: true });
		this.getPlayerInfo();
	}

	changeItem() {
		this.getPlayerInfo();
	}

	render() {
		const { isLoading, location, playerInfo } = this.state;
		let window;

		if (location.type === 'shop')
			window = (
				<div>
					<Shop
						location={location.id}
						playerInfo={playerInfo}
						buyItem={this.buyItem.bind(this)}
					/>
					<Inventory
						playerInfo={playerInfo}
						changeItem={this.changeItem.bind(this)}
					/>
				</div>
			);

		return isLoading ? (
			'Загрузка...'
		) : (
			<div>
				<div>{window}</div>
				<Character character={playerInfo} />
				<Map
					location={location}
					changeLocation={this.changeLocation.bind(this)}
				/>
				<Chat />
			</div>
		);
	}
}

export default Game;
