// I know these global fuctions are wrong. I know!


function setupLayers(points, endImage) {
    // NOT MY CODE TO WRITE, remove as you want (Indrek)
    layerComplete();
}

function layerComplete() {
    console.debug('Level %s complete.', currentLayer);
    if (currentLayer < level.layers.length - 1) {
        currentLayer++;
        setupLayers(null, null); // järg
    }
}

function layerProgress() {

}


function startGame() {
    alert('Careful, we are now starting!');
    console.debug('Total levels: %s', level.layers.length);
    currentLayer = 0;
    setupLayers(level.layers[currentLayer], null);
    
}

function endGame() {
    alert('Well done. Would you like to buy our "Bird is the Word" version?');
}

var currentLayer = -1;

var level = {
  name: 'twinkle',
  layers: [
    { tiles: [
      {x: 100, y: 120, src: ''},
      {x: 100, y: 150, src: 'tile001.png'},
	  {x: 130, y: 140, src: 'tile003.png'}
      ],
      src: 'img.png',
      audio: 'audio.mp3'
    },
	
	{ tiles: [
      {x: 200, y: 150, src: ''},
      {x: 200, y: 200, src: 'tile001.png'},
	  {x: 300, y: 300, src: 'tile003.png'}
      ],
      src: 'img.png',
      audio: 'audio.mp3'
    }
  ],
  duration: 12.3
}

