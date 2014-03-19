var Game = require('gameloop-canvas');
var Mouse = require('crtrdg-mouse');

var box = {
  x: 20,
  y: 20,
  w: 20,
  h: 20,
  color: '#ffffff'
};

var game = Game({
  canvas: 'game',
  width: window.innerWidth,
  height: window.innerHeight
});

game.on('update', function(dt){});

game.on('draw', function(context){
  context.clearRect(0, 0, game.width, game.height);
  context.fillStyle = box.color;
  context.fillRect(box.x, box.y, box.w, box.h);
});

game.start();

var mouse = new Mouse(game);
var clicks = 0;

mouse.on('click', function(e){
  boxes[clicks] = new Box(e.x - 10, e.y - 10);
  clicks += 1;
});