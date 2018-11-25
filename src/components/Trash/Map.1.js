import React, { Component } from 'react';
import Konva from 'konva';

class Map extends Component {
    drawMap() { 
        const location = this.props.location;
        const rooms = location.rooms;

        const loadImages = (sources, callback) => {
            var images = {};
            var loadedImages = 0;
            var numImages = 0;
            for(var i in sources) {
                numImages++;
            }       
            const onload = () => {
                if(++loadedImages >= numImages) {
                    callback(images);
                }
            }
            for(var j in sources) {
                images[j] = new Image();
                images[j].onload = onload();                
                images[j].src = sources[j];
            }
        }

        const initStage = (images) => {
            var stage = new Konva.Stage({
                container: 'container',
                width: 578,
                height: 530
            });
            var background = new Konva.Layer();
            var roomsLayer = new Konva.Layer();

            for(var key in rooms) {
                (function() {                    
                    var room = rooms[key];

                    var roomImage = new Konva.Image({
                        image: images[key],
                        x: room.x,
                        y: room.y
                    });                    
                    
                    roomsLayer.add(roomImage);
                })();                
            }
            console.log(roomsLayer);
            
            stage.add(background);
            stage.add(roomsLayer);
        }

        var sources = [];
        for(var i in rooms) {
            sources[i] = rooms[i].model;
        }

        loadImages(sources, initStage);
    }

    componentDidMount() {
        this.drawMap();      
    }
    
    render() {    
        return (
            <div>
              <div id="container"></div>
              <canvas ref="map" id="myCanvas" width="500" height="268"></canvas>
              {this.props.location.name}         
            </div>
        );
    }
}
    
export default Map;