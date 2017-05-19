var loadState = {
    preload: function(){

    game.load.image('vu', 'img/millieu.png');
    game.load.image('ball', 'img/p1.png');
    game.load.image('balu', 'img/p2.png');
    game.load.image('sky', 'img/fond.png');

    },
    create: function(){
        game.state.start('menu');
        
    }
}