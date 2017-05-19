var menuState = function (){

}

menuState.prototype ={

    create: function () {
        cursorC = game.input.keyboard.addKey(Phaser.Keyboard.C);
    },

    update:function () {
        
        if (cursorC.isDown) {
            game.state.start('play');
        }
    }

}