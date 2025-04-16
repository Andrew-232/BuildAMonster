class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.eyesR = this.add.sprite(this.bodyX + 35, this.bodyY, "monsterParts", "eye_angry_green.png");
        my.sprite.eyesL = this.add.sprite(this.bodyX - 35, this.bodyY, "monsterParts", "eye_angry_green.png");
        my.sprite.eyesL.scaleX = -1;

        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouth_closed_fangs.png");

        my.sprite.armR = this.add.sprite(this.bodyX + 120, this.bodyY + 50, "monsterParts", "arm_greenD.png");
        my.sprite.armL = this.add.sprite(this.bodyX - 120, this.bodyY + 50, "monsterParts", "arm_greenC.png");
        my.sprite.armL.scaleX = -1;

        my.sprite.legR = this.add.sprite(this.bodyX + 50, this.bodyY + 150, "monsterParts", "leg_greenA.png");
        my.sprite.legL = this.add.sprite(this.bodyX - 50, this.bodyY + 150, "monsterParts", "leg_greenB.png");
        my.sprite.legL.scaleX = -1;

        my.sprite.hornTop = this.add.sprite(this.bodyX + 35, this.bodyY - 70, "monsterParts", "detail_yellow_horn_large.png");
        my.sprite.hornBottom = this.add.sprite(this.bodyX - 60, this.bodyY + 45, "monsterParts", "detail_yellow_horn_large.png");
        my.sprite.hornBottom.scaleX = -1;
        
        my.sprite.whiteEye = this.add.sprite(this.bodyX - 35, this.bodyY - 100, "monsterParts", "detail_white_eye.png");
        my.sprite.whiteEye.scaleX = -1;
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('S'), 0)) {
            my.sprite.mouth.setTexture("monsterParts", "mouthB.png");
        }

        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('F'), 0)) {
            my.sprite.mouth.setTexture("monsterParts", "mouth_closed_fangs.png");
        }

        // Moves the monster left and right
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('A'), 0)) {
            my.sprite.mouth.x -= 1;
            my.sprite.body.x -= 1;
            my.sprite.armR.x -= 1;
            my.sprite.armL.x -= 1;
            my.sprite.legR.x -= 1;
            my.sprite.legL.x -= 1;
            my.sprite.hornTop.x -= 1;
            my.sprite.hornBottom.x -= 1;
            my.sprite.whiteEye.x -= 1;
            my.sprite.eyesR.x -= 1;
            my.sprite.eyesL.x -= 1;
        }
        
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('D'), 0)) {
            my.sprite.mouth.x += 1;
            my.sprite.body.x += 1;
            my.sprite.armR.x += 1;
            my.sprite.armL.x += 1;
            my.sprite.legR.x += 1;
            my.sprite.legL.x += 1;
            my.sprite.hornTop.x += 1;
            my.sprite.hornBottom.x += 1;
            my.sprite.whiteEye.x += 1;
            my.sprite.eyesR.x += 1;
            my.sprite.eyesL.x += 1;
        }

    }

}