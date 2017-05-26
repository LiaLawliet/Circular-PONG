var game = new Phaser.Game(800, 600, Phaser.AUTO);
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('regles', reglesState);
game.state.add('play', playState);
game.state.add('redwin', redwinState);
game.state.add('bluewin', bluewinState);
game.state.start('boot');