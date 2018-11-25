const buildStageTwo = (images) => {
    console.log(images);
    
    for (var i in images) {
      layer.add(
        new Konva.Image({
          image: images[i],
          x: images[i].data.x,
          y: images[i].data.y
        })
        .on('mouseover', function() {
          writeMessage(images[i].src);
        })    
        .on('mouseout', function() {
          writeMessage('');
        })
        .cache()
        .drawHitFromCache()
      ) 
    } 
    layer.add(text)
    stage.add(layer);    
  }

  const loadImagestwo = (rooms, callback) => {
    var images = [];

    for (var i in rooms) {
      images[i] = new Image();
      images[i].onload = () => callback(images);
      images[i].data = rooms[i];
      images[i].src = rooms[i].model;
    }
  }
  //loadImagestwo(rooms, buildStageTwo);