
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('vu', 'img/millieu.png');
    game.load.image('ball', 'img/p1.png');
    game.load.image('balu', 'img/p2.png');
	game.load.image('sky', 'img/fond.png');

}

var sprite;
var sprite2;
var cursors;

function create() {

    game.add.image(0, 0, 'sky');

	game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);
    game.physics.p2.restitution = 0.8;

    var J1CollisionGroup = game.physics.p2.createCollisionGroup();
    var J2CollisionGroup = game.physics.p2.createCollisionGroup();
    game.physics.p2.updateBoundsCollisionGroup();
    game.physics.p2.enable(sprite, false);
    game.physics.p2.enable(sprite2, false);






    sprite = game.add.sprite(400, 300, 'ball');
    sprite.anchor.setTo(0.5);
    sprite.pivot.x = 200;
    sprite.angle = 90;
    sprite.body.setCollisionGroup(J1CollisionGroup);
    sprite.body.collides([J1CollisionGroup, J2CollisionGroup]);

    sprite2 = game.add.sprite(400, 300, 'balu');
    sprite2.anchor.setTo(0.5);
    sprite2.pivot.x = 200;
    sprite2.angle = 270;
    sprite2.body.setCollisionGroup(J2CollisionGroup);
    sprite2.body.collides([J1CollisionGroup, J2CollisionGroup]);

    var vu1 = game.add.sprite(390, 290, 'vu');

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {
    // if (cursors.left.isDown)
    // {
    //     sprite.angle -= 2;
    // }
    // else if (cursors.right.isDown)
    // {
    //     sprite.angle += 2;
    // }
    // if (cursors.up.isDown) {
    //     sprite2.angle -= 2;
    // }else if (cursors.down.isDown) {
    //     sprite2.angle += 2;
    // }


}
