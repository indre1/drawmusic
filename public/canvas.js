$(init);

function init() {
  var canvas = $('#canvasid');
  var offset = canvas.offset();
  var context = canvas.get(0).getContext('2d');
  var lastTouch = null;

  context.strokeStyle = '#000000';
  context.lineWidth = 4;
  context.lineCap = 'square';

  canvas.on('touchstart mousedown', function(e){
    console.log('start');
    lastTouch = {
      x: e.pageX - offset.left,
        y: e.pageY - offset.top
    };
  });

  canvas.on('touchend mouseup', function(e) {
    lastTouch = null;
    // Store the current transformation matrix
    context.save();
    // Use the identity matrix while clearing the canvas
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width(), canvas.height());
    // Restore the transform
    context.restore();
  });

  canvas.on('touchmove mousemove', function(e) {
    if (lastTouch) {
      context.beginPath();
      context.moveTo(lastTouch.x, lastTouch.y);
      context.lineTo(e.pageX - offset.left, e.pageY - offset.top);
      context.stroke();

      lastTouch = {
        x: e.pageX - offset.left,
        y: e.pageY - offset.top
      };
      e.preventDefault();
      return false;
    }
  });
}