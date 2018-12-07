import React, { Component } from 'react';
import Konva from 'konva';

class Map extends Component {
	drawMap() {
		const location = this.props.location;
		const rooms = location.rooms;

		const writeMessage = message => {
			text.setText(message);
			layer.draw();
		};

		var stage = new Konva.Stage({
			container: 'container',
			width: 500,
			height: 268,
		});

		var layer = new Konva.Layer();

		var text = new Konva.Text({
			x: 10,
			y: 10,
			fontFamily: 'Calibri',
			fontSize: 24,
			text: 'hello',
			fill: 'black',
		});
		//Загрузка фона
		console.log(location);
		var imageBackground = new Image();
		imageBackground.onload = function() {
			layer
				.add(
					new Konva.Image({
						x: 0,
						y: 0,
						image: imageBackground,
						width: 500,
						height: 268,
					})
				)
				.on('click', () => {
					console.log('pp');
				});
			stage.add(layer);
		};
		imageBackground.src = location.background;
		writeMessage(imageBackground.src);
		layer.add(text);
		//
		stage.add(layer);
		const loadImages = (sources, callback) => {
			var images = {};

			for (var src in sources) {
				images[src] = new Image();
				images[src].onload = () => {
					callback(images);
				};
				images[src].src = sources[src];
			}
		};

		const buildStage = images => {
			rooms.forEach((room, index) => {
				let nameLayer = index;
				layer.add(
					new Konva.Image({
						image: images[nameLayer],
						x: room.x,
						y: room.y,
					})
						.on('mouseover', () => {
							writeMessage('mouseover ' + room.name);
						})
						.on('mouseout', () => {
							writeMessage('');
						})
						.on('click', () => {
							this.props.changeLocation(room.id);
						})
						.cache()
						.drawHitFromCache()
				);
			});

			layer.add(text);
			stage.add(layer);
		};

		var sources = {};

		// for(var key in rooms) {
		//   sources[key] = rooms[key].model;
		// }

		// loadImages(sources, buildStage);
	}

	drawMapTwo() {
		const location = this.props.location;
		console.log(location);

		const mapCanvas = this.refs.map;
		const mapContext = mapCanvas.getContext('2d');
		const exitButton = {
			location_id: location.location_id,
			x: 1,
			y: 1,
			width: 50,
			height: 20,
		};

		const locationBackground = new Image();
		locationBackground.src = location.background;
		locationBackground.onload = function() {
			mapContext.drawImage(this, 0, 0, 500, 268);

			location.rooms.forEach(room => {
				mapContext.fillRect(room.x, room.y, room.width, room.height);
				mapContext.strokeRect(room.x, room.y, room.width, room.height);
				mapContext.clearRect(room.x, room.y, room.width, room.height);
			});

			if (location.location_id !== null) {
				mapContext.fillRect(
					exitButton.x,
					exitButton.y,
					exitButton.width,
					exitButton.height
				);
				mapContext.strokeRect(
					exitButton.x,
					exitButton.y,
					exitButton.width,
					exitButton.height
				);
				mapContext.clearRect(
					exitButton.x,
					exitButton.y,
					exitButton.width,
					exitButton.height
				);
			}
		};

		const MouseClick = e => {
			const x = e.pageX - e.target.offsetLeft;
			const y = e.pageY - e.target.offsetTop;
			if (location.rooms.length) {
				const rooms = location.rooms;
				const selectRoom = rooms.filter(
					room =>
						x >= room.x &&
						x <= room.x + room.width &&
						y >= room.y &&
						y <= room.y + room.height
				)[0];

				if (selectRoom) this.props.changeLocation(selectRoom.id);
			}

			if (location.location_id !== null) {
				const selectExitButtom =
					x >= exitButton.x &&
					x <= exitButton.x + exitButton.width &&
					y >= exitButton.y &&
					y <= exitButton.y + exitButton.height
						? true
						: false;

				if (selectExitButtom) this.props.changeLocation(exitButton.location_id);
			}
		};

		mapCanvas.addEventListener('click', MouseClick);
	}

	componentDidMount() {
		this.drawMap();
	}

	render() {
		return (
			<div>
				<div id="container" />
				<canvas ref="map" id="myCanvas" width="500" height="268" />
				{this.props.location.name}
			</div>
		);
	}
}

export default Map;
