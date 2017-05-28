var bluewinState = function (){

    cursors = null;
    press = null;
    winnersprite = null;
    losersprite = null;

}

bluewinState.prototype ={

    create: function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        winnersprite = game.add.sprite(game.world.centerX, 230, "bluewinner");
        winnersprite.anchor.set(0.5);

        losersprite = game.add.sprite(game.world.centerX, 415, "redloser");
        losersprite.anchor.set(0.5);

        press = game.add.sprite(game.world.centerX, 530, "spacetoreplay");
        press.anchor.set(0.5);
        game.physics.enable(press, Phaser.Physics.ARCADE);

        game.add.tween(press.scale).to( { x: 1.05, y: 1.05 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);

        
        cursorSPACE = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        cursors = game.input.keyboard.createCursorKeys();

    },

    update:function () {


        if (cursorSPACE.isDown) {
            game.state.start('play');
        }
    }

}