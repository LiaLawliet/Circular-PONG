var menuState = function (){

    sprite = null;
    sprite2 = null;
    cursors = null;
    vitesseraquette = null;
    vu1 = null;
    s1am2 = null;
    s1ap2 = null;
    s1amX = null;
    s1apX = null;
    s2am2 = null;
    s2ap2 = null;
    s2amX = null;
    s2apX = null;
    s1180 = null;
    s2180 = null;

}

menuState.prototype ={

    create: function () {

        sprite = game.add.sprite(400, 300, 'ball');
        sprite.anchor.setTo(0.5);
        sprite.pivot.x =200;
        sprite.angle = 90;

        sprite2 = game.add.sprite(400, 300, 'balu');
        sprite2.anchor.setTo(0.5);
        sprite2.pivot.x =200;
        sprite2.angle = 270;

        vu1 = game.add.sprite(390, 290, 'vu');
        cursorD = game.input.keyboard.addKey(Phaser.Keyboard.D);
        cursorQ = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        cursorC = game.input.keyboard.addKey(Phaser.Keyboard.C);
        cursors = game.input.keyboard.createCursorKeys();
        vitesseraquette = 2;
    },

    update:function () {
        s1am2 = sprite.angle-vitesseraquette+180;
        s1ap2 = sprite.angle+vitesseraquette+180;
        s1amX = sprite.angle-13+180;
        s1apX = sprite.angle+13+180;
        s2am2 = sprite2.angle-vitesseraquette+180;
        s2ap2 = sprite2.angle+vitesseraquette+180;
        s2amX = sprite2.angle-13+180;
        s2apX = sprite2.angle+13+180;
        s1180 = sprite.angle+180;
        s2180 = sprite2.angle+180;

        console.log(s1180+'_'+s2180);

        if (cursors.right.isDown)
        {
            if (s1ap2>s2amX&&s1ap2<s2apX||(s1180+vitesseraquette)-s2180>345) {
            }
            else{sprite.angle += vitesseraquette;}
        }
        else if (cursors.left.isDown)
        {
            if ((s1am2 > s2amX && s1am2 < s2apX)||(360-s2180+s1180<16 && s2180 > 345)) {
            }else{sprite.angle -= vitesseraquette;}
        }
        if (cursorD.isDown) {
            if ((s2ap2 > s1amX && s2ap2 < s1apX)||(s2180+vitesseraquette)-s1180>345) {
            }else{sprite2.angle += vitesseraquette;}
        }
        else if (cursorQ.isDown) {
            if ((s2am2 > s1amX && s2am2 < s1apX)||(360-s1180+s2180<16 && s1180 > 345)) {
            }else{sprite2.angle -= vitesseraquette;}
        }
        if (cursorC.isDown) {
            game.state.start('play');
        }
    }

}