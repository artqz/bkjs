import React, { Component } from 'react';
import { Stage, Layer, Group, Image } from 'react-konva';
//import Konva from 'konva';

class Map extends Component {
	state = {
		background: null,
		exitButton: [],
		images: [],
		width: 500,
		height: 268,
	};
	componentDidMount() {
		const location = this.props.location;
		const rooms = location.rooms;
		const pathCities = '/assets/cities';

		//load background
		const background = new window.Image();
		background.src = pathCities + location.background;
		background.onload = () => {
			this.setState({ background });
			this.imageNode.cache();
		};

		//load rooms
		const images = rooms.map((room, index) => {
			let image = new window.Image();

			image.onload = () => {
				this.setState({ images });
				this.group.children[index].cache().drawHitFromCache();
			};
			image.src = pathCities + room.model;
			return { image: image, x: room.x, y: room.y, id: room.id };
		});

		//load exit
		if (location.location_id) {
			const exitImage = new window.Image();
			exitImage.src = '/assets/exit.png';
			exitImage.onload = () =>
				this.setState({
					exitButton: {
						image: exitImage,
						location_id: location.location_id,
					},
				});
		}
	}

	handleClick(id) {
		this.props.changeLocation(id);
	}

	render() {
		const images = this.state.images.map((image, index) => (
			<Image
				key={image.id}
				image={image.image}
				x={image.x}
				y={image.y}
				cahe
				drawHitFromCache
				onClick={() => this.handleClick(image.id)}
			/>
		));

		return (
			<Stage width={this.state.width} height={this.state.height}>
				<Layer>
					<Image
						image={this.state.background}
						ref={node => (this.imageNode = node)}
					/>
					<Image
						image={this.state.exitButton.image}
						onClick={() => this.handleClick(this.state.exitButton.location_id)}
					/>
					<Group ref={node => (this.group = node)}>{images}</Group>
				</Layer>
			</Stage>
		);
	}
}

export default Map;
