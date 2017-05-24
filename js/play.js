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
    ballepos = null;
    balleang = null;
    ballecouleur = 0x555555;
    dernieretouche = '';
    tailleraquette = 54;
    j1couleur = 0xD80101;
    j2couleur = 0x01e4d0;
    orcouleur = 0xD0A000;
    rebond = 0;
    or = false;
    score = {
        j1 : 0,
        j2 : 0
    }
    coballe = {
        x : 400,
        y : 300,
        xdir : 1.5,
        ydir : -4
    }

}

playState.prototype ={

    create: function () {
        game.stage.backgroundColor = '#000000';
        
        scorej1 = game.add.text(50, 20, "Score "+score.j1, {font: "30px Automania", fill: "#D80101", align: "left", boundsAlignH: "left", 
        boundsAlignV: "top"});
        scorej2 = game.add.text(600, 20, "Score "+score.j2, {font: "30px Automania", fill: "#01e4d0", align: "right", boundsAlignH: "right", 
        boundsAlignV: "top"});

        graphics = game.add.graphics(0, 0);
        graphics.lineStyle(1, 0x555555, 0.5);
        graphics.drawCircle(400, 300, 405);

        balle = game.add.graphics(0, 0);
        balle.beginFill(ballecouleur, 1);
        balle.drawCircle(coballe.x, coballe.y, 15);

        sprite = game.add.sprite(400, 300, 'j1');
        sprite.anchor.setTo(0.5);
        sprite.pivot.x =200;
        sprite.angle = 90;

        sprite2 = game.add.sprite(400, 300, 'j2');
        sprite2.anchor.setTo(0.5);
        sprite2.pivot.x =200;
        sprite2.angle = 270;

        cursorD = game.input.keyboard.addKey(Phaser.Keyboard.D);
        cursorQ = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        cursors = game.input.keyboard.createCursorKeys();
        vitesseraquette = 2;
    },

    update:function () {
        // Changement des variables
        s1am2 = sprite.angle-vitesseraquette+180;
        s1ap2 = sprite.angle+vitesseraquette+180;
        s1amX = sprite.angle-tailleraquette+180;
        s1apX = sprite.angle+tailleraquette+180;
        s2am2 = sprite2.angle-vitesseraquette+180;
        s2ap2 = sprite2.angle+vitesseraquette+180;
        s2amX = sprite2.angle-tailleraquette+180;
        s2apX = sprite2.angle+tailleraquette+180;
        s1180 = sprite.angle+180;
        s2180 = sprite2.angle+180;
        ballepos = Math.sqrt(Math.pow((coballe.x-400),2)+Math.pow((coballe.y - 300),2));
        balleang = (Math.atan2(coballe.x-400,coballe.y-300)*180)/Math.PI*-1+90;
        if (balleang<0) {balleang+=360;}
 

        // Touche de raquette
        if ((ballepos<202&&ballepos>198)&&(balleang > s1amX+25 && balleang < s1apX-25)) {
            dernieretouche = 'j1';
            BalleOr(j1couleur);
            console.log(balleang)
            if (balleang<sprite.angle+180) {
                Redirection('droite');
            }else if (balleang>sprite.angle+180) {
                Redirection('gauche');
            }
        }

        if ((ballepos<202&&ballepos>198)&&(balleang > s2amX+25 && balleang < s2apX-25)) {
            dernieretouche = 'j2';
            BalleOr(j2couleur);
            if (balleang<sprite2.angle+180) {
                Redirection('droite');
            }else if (balleang>sprite2.angle+180) {
                Redirection('gauche');
            }
        }


        // Mouvement de la balle
        if (ballepos < 250) {
            coballe.x += coballe.xdir;
            coballe.y += coballe.ydir;
            balle.clear();
            balle.beginFill(ballecouleur, 1);
            balle.drawCircle(coballe.x, coballe.y, 15);
        }else{
            if (dernieretouche == 'j1') {
                if (ballecouleur == orcouleur) score.j1 +=5;
                else score.j1 ++;
            }else if (dernieretouche == 'j2') {
                if (ballecouleur == orcouleur) score.j2 +=5;
                else score.j2 ++;
            }
            scorej1.text = "Score "+score.j1;
            scorej2.text = "Score "+score.j2;
            dernieretouche = '';
            rebond = 0;
            or = false;
            coballe.x = 400;
            coballe.y = 300;
            coballe.xdir = Math.random()*6-3;
            coballe.ydir = Math.random()*6-3;
            ballecouleur = 0x555555;
        }

        // Mouvement des raquettes
            // J1
        if (cursors.right.isDown)
        {
            if (s1ap2>s2amX&&s1ap2<s2apX||(s1180+vitesseraquette)-s2180>310) {
            }
            else{sprite.angle += vitesseraquette;}

        }
        else if (cursors.left.isDown)
        {
            if ((s1am2 > s2amX && s1am2 < s2apX)||(360-s2180+s1180<55 && s2180 > 310)) {
            }else{sprite.angle -= vitesseraquette;}
        }
            // J2
        if (cursorD.isDown) {
            if ((s2ap2 > s1amX && s2ap2 < s1apX)||(s2180+vitesseraquette)-s1180>310) {
            }else{sprite2.angle += vitesseraquette;}
        }
        else if (cursorQ.isDown) {
            if ((s2am2 > s1amX && s2am2 < s1apX)||(360-s1180+s2180<55 && s1180 > 310)) {
            }else{sprite2.angle -= vitesseraquette;}
        }
    }
    

};

function BalleOr(joueur){
    if (or == true && rebond == 9) {
        rebond = 0;
        or = false;
        ballecouleur = joueur;
    }else if (rebond >= 15 || or == true) {
        ballecouleur = orcouleur;
        or = true;
        rebond--;
    }else {
        ballecouleur = joueur;
        rebond++;
    }
}

function Redirection(direction){
    coballe.ydir = coballe.ydir*-1;
    coballe.xdir = coballe.xdir*-1;
    if (balleang <= 45 || balleang > 315) {
        if (direction == 'droite') {
            coballe.ydir += 1;
            coballe.xdir -= 0.6;
            if (coballe.ydir>5) {coballe.ydir = 4}
        }else if (direction == 'gauche') {
            coballe.xdir += 0.6;
            coballe.ydir -= 1;
            if (coballe.ydir<-5) {coballe.ydir = -4}
        }
        if (coballe.xdir>-0.5) {coballe.xdir = -1}
    }else if (balleang <= 315 && balleang > 225) {
        if (direction == 'droite') {
            coballe.xdir += 1;
            coballe.ydir -= 0.6;
            if (coballe.xdir>5) {coballe.xdir = 4}
        }else if (direction == 'gauche') {
            coballe.ydir += 0.6;
            coballe.xdir -= 1;
            if (coballe.xdir<-5) {coballe.xdir = -4}
        }
        if (coballe.ydir<0.5) {coballe.ydir = 1}
    }else if (balleang <= 225 && balleang > 135) {
        if (direction == 'gauche') {
            coballe.ydir += 1;
            coballe.xdir -= 0.6;
            if (coballe.ydir>5) {coballe.ydir = 4}
        }else if (direction == 'droite') {
            coballe.xdir += 0.6;
            coballe.ydir -= 1;
            if (coballe.ydir<-5) {coballe.ydir = -4}
        }
        if (coballe.xdir<0.5) {coballe.xdir = 1}
    }else if (balleang <= 135 && balleang > 45) {
        if (direction == 'gauche') {
            coballe.xdir += 1;
            coballe.ydir -= 0.6;
            if (coballe.xdir>5) {coballe.xdir = 4}
        }else if (direction == 'droite') {
            coballe.ydir += 0.6;
            coballe.xdir -= 1;
            if (coballe.xdir<-5) {coballe.xdir = -4}
        }
        if (coballe.ydir>-0.5) {coballe.ydir = -1}
    }
}