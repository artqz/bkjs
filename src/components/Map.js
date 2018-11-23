import React, { Component } from 'react';
import {Stage, Layer, Group, Image } from 'react-konva';
//import Konva from 'konva';

class Map extends Component {
    state = {
        background: null,
        exitButton: [],
        images: [],
        width: 500,
        height: 268
    }
    componentDidMount() {
        const location = this.props.location;
        const rooms = location.rooms

        //load background
        const background = new window.Image();
        background.src = location.background;
        background.onload = () => this.setState({ background });

        //load rooms
        const images = rooms.map((room, index) => {
            let image = new window.Image();
            
            image.onload = () => {
                this.setState({ images }); 
                this.group.children[index].cache().drawHitFromCache();     
            }               
            image.src = room.model;
            return {image: image, x: room.x, y: room.y, id: room.id}
        })
        
        //load exit
        const exitImage = new window.Image();
        exitImage.src = '/assets/exit.png'
        exitImage.onload = () => this.setState({ exitButton: { image: exitImage, location_id: location.location_id }}); 
    }

    handleClick (id) {
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
        ));       console.log(this.state);
        
         
        return (
            <Stage width={this.state.width} height={this.state.height}>
                <Layer>
                    <Image image={this.state.background} />
                    <Image image={this.state.exitButton.image} onClick={() => this.handleClick(this.state.exitButton.location_id)} />
                    <Group ref={node => this.group = node}>{images}</Group>{/* <Image drawHitFromCache image={this.state.image} onClick={this.handleClick} ref={shape => this.imageShape = shape} /> */}
                </Layer>
            </Stage>
        );
    }
}
    
export default Map;