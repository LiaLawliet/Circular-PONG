var loadState = {
    preload: function(){

    game.load.image('j1', 'img/j1.png');
    game.load.image('j2', 'img/j2.png');
    game.load.image('titlepong', 'img/titlepong.png');
    game.load.image('titlecircular', 'img/titlecircular.png');
    game.load.image('pressspace', 'img/pressspace.png');

    },
    create: function(){
        game.state.start('menu');
        
    }
}