var reglesState = function (){

    cursors = null;
    press = null;
    regle = null;

}

reglesState.prototype ={

    create: function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        regle = game.add.sprite(game.world.centerX, 230, "regle");
        regle.anchor.set(0.5);

        press = game.add.sprite(game.world.centerX, 500, "pressspace");
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