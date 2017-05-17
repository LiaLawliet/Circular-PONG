var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {preload: preload, create: create, update: update, render: render });

var j1;
var j2;
var j3;
var cursors;

function preload() {

    game.load.image('ball', 'img/p1.png');
    game.load.image('balu', 'img/p2.png');

}

function create() {

    j1 = game.add.sprite(200, 300, 'ball');
    j3 = game.add.sprite(600, 300, 'balu');

    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);
    game.physics.p2.restitution = 0.8;



    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    //  We'll rotate point 1 (the yellow point)
    //  around point 2 (the red point) by 1 degree
    //  every update.

    // rotate: function (x, y, angle, asDegrees, distance) {
    // j1.rotate(j2.x, j2.y, 1, true, 200);

    if (cursors.left.isDown){
        j1.rotate(400, 300, 4, true);  
    }
    else if(cursors.right.isDown){
        j1.rotate(400, 300, -4, true);
    }

}

function render() {


}