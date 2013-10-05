var gameOptions = {
  height: 450,
  width: 700,
  nEnemies: 30,
  padding: 20
};

var gameStats = {
  score: 0,
  bestScore: 0
};

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

var axes = {
  x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
  y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
};

var gameBoard = d3.select('.container').append('svg:svg')
                .attr('width', gameOptions.width)
                .attr('height', gameOptions.height);

// var updateScore = function(){
// 	return d3.select('#current-score')
//       .text(gameStats.score.toString());
// };

// var updateBestScore = function () {
//   gameStats.bestScore = _.max([gameStats.bestScore, gameStats.score]);
//   return d3.select('#best-score').text(gameStats.bestScore.toString());
// };

// Player = (function() {

//   Player.prototype.path = 'm244,254c-1,0 -2,0 -4,0c-1,0 -1,-1 -2,-1c-1,0 -1.69255,-0.186 -3,-2c-0.8269,-1.14726 -1.61731,-1.07613 -2,-2c-0.5412,-1.30656 -1,-2 -2,-2c0,0 -1.29289,-0.29289 -2,-1c-0.70711,-0.70711 -1.4588,-0.69344 -2,-2c-0.38269,-0.92387 -1,-2 -2,-3c0,0 -1,-1 -2,-2c0,0 -1,-2 -2,-3c-2,-2 -3,-4 -3,-6c0,0 -0.29289,-0.29289 -1,-1c-0.70711,-0.70711 -0.82375,-1.48625 -3,-2c-0.97325,-0.22975 -1.29289,-0.29289 -2,-1c-0.70711,-0.70711 -1.29289,-0.29289 -2,-1c-1.41422,-1.41422 -2.29289,-0.29289 -3,-1c-0.70711,-0.70711 -1.07613,-0.61731 -2,-1c-1.30656,-0.5412 -2.4588,-0.69344 -3,-2c-0.38269,-0.92387 -0.29289,-1.29289 -1,-2c-0.70711,-0.70711 -1,0 0,0c1,0 1,-1 3,-1c1,0 1,-2 1,-2c0,0 2.4588,0.30656 3,-1c0.38269,-0.92387 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.4588,-0.69344 2,-2c0.38269,-0.92387 2,-1 2,-2c0,0 0.69344,-1.4588 2,-2c1.84776,-0.76537 3,-1 3,-1c2,0 2,-2 4,-2c1,0 2.29869,1.05147 4,0c1.90211,-1.17557 2.82375,-2.48625 5,-3c0.97325,-0.22975 4.29869,1.05147 6,0c1.90211,-1.17557 3,-2 5,-2c3,0 6,0 7,0c3,0 5,0 6,0c2,0 3.29871,-1.05147 5,0c1.9021,1.17557 2.41528,3.18875 3,4c1.84903,2.56537 2.85272,2.1731 4,3c1.814,1.30745 3.0535,1.5405 5,2c2.17624,0.51375 1.69345,2.4588 3,3c0.92389,0.38269 0.58578,1.58578 2,3c1.41422,1.41422 1.29291,1.29289 2,2c1.41422,1.41422 2,1 3,2c0,0 0.29291,1.29289 1,2c0.70709,0.70711 0.29291,2.29289 1,3c0.70709,0.70711 1.4588,1.69344 2,3c0.76538,1.84776 -0.9021,3.82443 1,5c0.85065,0.52573 0.61731,2.07613 1,3c1.0824,2.61313 2.48627,2.82375 3,5c0.22977,0.97325 -0.22977,3.02675 0,4c0.51373,2.17625 1.48627,2.82375 2,5c0.22977,0.97325 1,3 1,5c0,3 0,4 0,7c0,0 0,2 0,3c0,1 0,2 0,2c0,1 0,2 0,3c0,1 -1.4588,0.69345 -2,2c-0.38269,0.92389 0.41422,1.58578 -1,3c-0.70709,0.70709 -1,1 -1,1c0,2 -2,2 -3,3c0,0 -1.82443,0.0979 -3,2c-0.52573,0.85065 -0.29871,0.94855 -2,2c-1.9021,1.17557 -0.94855,2.29871 -2,4c-1.17557,1.9021 -1.29291,1.29291 -2,2c-1.41422,1.41422 -3.69345,2.4588 -5,3c-1.84775,0.76538 -3.186,0.69254 -5,2c-2.29453,1.65381 -5,3 -8,4c-3,1 -5.08025,1.31073 -8,2c-2.17625,0.51373 -3,1 -5,1c-1,0 -2,0 -4,0c-1,0 -1,0 -2,0c-1,0 -2,0 -4,0c-1,0 -2,0 -4,0c0,0 -1.85274,-0.1731 -3,-1c-1.814,-1.30746 -3.0535,-0.5405 -5,-1c-2.17625,-0.51373 -3.69344,-2.4588 -5,-3c-0.92387,-0.38269 -2,0 -3,0c-1,0 -1.29289,-0.29291 -2,-1c-0.70711,-0.70709 -2,-1 -2,-1c-1,0 -2.58578,0.41422 -4,-1c-0.70711,-0.70709 -0.61731,-1.07611 -1,-2c-0.5412,-1.30655 -3,-3 -3,-4c0,-1 -1.09789,-3.82443 -3,-5c-0.85065,-0.52573 -1,-1 -1,-2c0,-1 0,-2 0,-2c0,-2 1,-2 2,-2c0,0 0.29289,-0.29291 1,-1c1.41422,-1.41422 3.29289,0.70709 4,0c0.70711,-0.70709 1,-1 2,-1c1,0 1.07613,0.38269 2,0c1.30656,-0.5412 2.48625,-0.82376 3,-3c0.22975,-0.97324 1.4588,-0.69345 2,-2c0.38269,-0.92389 1,-1 1,-2c0,-1 1.07613,-1.61731 2,-2c1.30656,-0.5412 1.29289,-3.29291 2,-4c1.41422,-1.41422 0.94853,-0.29871 2,-2c1.17557,-1.90211 4,-2 5,-2c1,0 1,-2 3,-2c0,0 1.07613,0.38269 2,0c1.30656,-0.5412 2,-1 3,-1l0,-1l1,0l1,0';

//   Player.prototype.fill = '#ffff00';

//   Player.prototype.x = 0;

//   Player.prototype.y = 0;

//   Player.prototype.angle = 0;

//   Player.prototype.r = 5;

//   function Player(gameOptions) {
//     this.setupDragging = __bind(this.setupDragging, this); 
//     this.moveRelative = __bind(this.moveRelative, this);
//     this.moveAbsolute = __bind(this.moveAbsolute, this);
//     this.transform = __bind(this.transform, this);
//     this.setY = __bind(this.setY, this);
//     this.getY = __bind(this.getY, this);
//     this.setX = __bind(this.setX, this);
//     this.getX = __bind(this.getX, this);
//     this.render = __bind(this.render, this);      
//     this.gameOptions = gameOptions;
//   };

//   Player.prototype.render = function(to) {
//     this.el = to.append('svg:path').attr('d', this.path).attr('fill', this.fill);
//     this.transform({
//       x: this.gameOptions.width * 0.5,
//       y: this.gameOptions.height * 0.5
//     });
//     this.setupDragging();
//     return this;
//   };

//   Player.prototype.getX = function() {
//     return this.x;
//   };

//   Player.prototype.setX = function(x) {
//     var maxX, minX;
//     minX = this.gameOptions.padding;
//     maxX = this.gameOptions.width - this.gameOptions.padding;
//     if (x <= minX) x = minX;
//     if (x >= maxX) x = maxX;
//     return this.x = x;
//   };

//   Player.prototype.getY = function() {
//     return this.y;
//   };

//   Player.prototype.setY = function(y) {
//     var maxY, minY;
//     minY = this.gameOptions.padding;
//     maxY = this.gameOptions.height - this.gameOptions.padding;
//     if (y <= minY) y = minY;
//     if (y >= maxY) y = maxY;
//     return this.y = y;
//   };

//   Player.prototype.transform = function(opts) {
//     this.angle = opts.angle || this.angle;
//     this.setX(opts.x || this.x);
//     this.setY(opts.y || this.y);
//     return this.el.attr('transform', ("rotate(" + this.angle + "," + (this.getX()) + "," + (this.getY()) + ") ") + ("translate(" + (this.getX()) + "," + (this.getY()) + ")"));
//   };

//   Player.prototype.moveAbsolute = function(x, y) {
//     return this.transform({
//       x: x,
//       y: y
//     });
//   };

//   Player.prototype.moveRelative = function(dx, dy) {
//     return this.transform({
//       x: this.getX() + dx,
//       y: this.getY() + dy,
//       angle: 360 * (Math.atan2(dy, dx) / (Math.PI * 2))
//     });
//   };

//   Player.prototype.setupDragging = function() {
//     var drag, dragMove,
//       _this = this;
//     dragMove = function() {
//       return _this.moveRelative(d3.event.dx, d3.event.dy);
//     };
//     drag = d3.behavior.drag().on('drag', dragMove);
//     return this.el.call(drag);
//   };

//   return Player;
// })();

// var players = [];
// players.push(new Player(gameOptions).render(gameBoard));
// players.push(new Player(gameOptions).render(gameBoard));

var createEnemies = function() {
  return _.range(0,gameOptions.nEnemies).map(function(i){
    return {
      id: i,
      x: Math.random()*100,
      y: Math.random()*100,
    };
});
};

var render = function(enemy_data){
  var enemies = gameBoard.selectAll('circle.enemy')
            .data(enemy_data, function(d){return d.id;});
  enemies.enter()
    .append('svg:circle')
      .attr('class', 'enemy')
      .attr('cx', function(enemy){ return axes.x(enemy.x);})
      .attr('cy', function(enemy){ return axes.y(enemy.y);})
      .attr('r', 10);
};

play = function() {
  var gameTurn = function() {
    var newEnemyPositions;
    newEnemyPositions = createEnemies();
    return render(newEnemyPositions);
  };
  gameTurn();
  // setInterval(gameTurn, 2000);
  // return setInterval(increaseScore, 50);
};

play();

