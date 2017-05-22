var menuState = function (){

    title = null;
    title2 = null;
    press = null;
    cursors = null;
}

menuState.prototype ={

    create: function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        title = game.add.sprite(260, 100, "titlecircular");
        title.anchor.set(0.5);
        title.animations.add('flotter');
        title.animations.play('flotter', 30, true);

        title2 = game.add.sprite(550, 210, "titlepong");
        title2.anchor.set(0.5);
        title2.animations.add('flotter');
        title2.animations.play('flotter', 30, true);


        game.physics.enable(title, Phaser.Physics.ARCADE);
        title.body.immovable = true;

        press = game.add.sprite(game.world.centerX, 500, "pressspace");
        press.anchor.set(0.5);
        game.physics.enable(press, Phaser.Physics.ARCADE);
    
        game.add.tween(press.scale).to( { x: 1.05, y: 1.05 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        game.add.tween(title).to({ x: 280 }, 800, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        game.add.tween(title2).to({ x: 530 }, 800, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        
        cursorSPACE = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        cursors = game.input.keyboard.createCursorKeys();

    },

    update:function () {


        if (cursorSPACE.isDown) {
            game.state.start('play');
        }
    }

}