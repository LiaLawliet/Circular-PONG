var loadState = {
    preload: function(){

    game.load.image('vu', 'img/millieu.png');
    game.load.image('ball', 'img/p1.png');
    game.load.image('balu', 'img/p2.png');
    game.load.image('sky', 'img/fond.png');
    game.load.image('titlepong', 'img/titlepong.png');
    game.load.image('titlecircular', 'img/titlecircular.png');
    game.load.image('pressspace', 'img/pressspace.png');

    },
    create: function(){
        game.state.start('menu');
        
    }
}