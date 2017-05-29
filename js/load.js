var loadState = {
    preload: function(){
    game.load.image('j1', 'img/j1.png');
    game.load.image('j2', 'img/j2.png');
    game.load.image('titlepong', 'img/titlepong.png');
    game.load.image('titlecircular', 'img/titlecircular.png');
    game.load.image('pressspace', 'img/pressspace.png');
    game.load.image('regle', 'img/regles.png');
    game.load.image('bluewinner', 'img/bluewinner.png');
    game.load.image('redwinner', 'img/redwinner.png');
    game.load.image('blueloser', 'img/blueloser.png');
    game.load.image('redloser', 'img/redloser.png');
    game.load.image('spacetoreplay', 'img/spacetoreplay.png');
    game.load.image('image1', 'img/image1.png');
    game.load.image('image2', 'img/image2.png');
    game.load.image('image3', 'img/image3.png');
    game.load.script('Automania', 'font/automania.TTF');
    game.load.audio('Touch', 'sound/touch.wav')
    },
    create: function(){
        game.state.start('menu');
        
    }
}