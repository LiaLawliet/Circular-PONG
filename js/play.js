var playState = function (){

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
    cercle = null;
    balle = null;
    coballe = {
        x : 400,
        y : 300,
        xdir : Math.random()*6-3,
        ydir : Math.random()*6-3
    }

}

playState.prototype ={

    create: function () {

        game.add.image(0, 0, 'sky');

        graphics = game.add.graphics(0, 0);
        graphics.lineStyle(1, 0x555555, 0.5);
        graphics.drawCircle(400, 300, 405);

        balle = game.add.graphics(0, 0);
        balle.beginFill(0x555555, 1);
        balle.drawCircle(coballe.x, coballe.y, 15);

        sprite = game.add.sprite(400, 300, 'ball');
        sprite.anchor.setTo(0.5);
        sprite.pivot.x =200;
        sprite.angle = 90;

        sprite2 = game.add.sprite(400, 300, 'balu');
        sprite2.anchor.setTo(0.5);
        sprite2.pivot.x =200;
        sprite2.angle = 270;

        cursorD = game.input.keyboard.addKey(Phaser.Keyboard.D);
        cursorQ = game.input.keyboard.addKey(Phaser.Keyboard.Q);
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
        coballe.x += coballe.xdir;
        coballe.y += coballe.ydir;

         if (checkOverlap(balle, sprite))
           {
                console.log('Bulu');
           }

        if (Math.sqrt(Math.pow((coballe.x-400),2)+Math.pow((coballe.y - 300),2)) < 250) {
        balle.clear();
        balle.beginFill(0x555555, 1);
        balle.drawCircle(coballe.x, coballe.y, 15);
        }

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
    }
    

};function checkOverlap(spriteA, spriteB) {
    
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
    
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    
    }