export default class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: "StartScene" });

        this.nameForm;
    }

    preload() {
        this.keyboardInput = this.input.keyboard.addKeys({
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
            debugDeath: Phaser.Input.Keyboard.KeyCodes.P
        })
        this.load.image('Title', 'assets/menus/Title.png');
        this.load.image('MapouLogo', 'assets/menus/mapouLogo.png');
    }

    create() {
        this.add.image(this.scale.gameSize.width / 2, this.scale.gameSize.height / 4, 'Title').setOrigin(0.5, 0.5).scale = 0.25;
        this.add.image(this.scale.gameSize.width - 5, this.scale.gameSize.height - 5, 'MapouLogo').setOrigin(1, 1).scale = 0.2;
        this.replay = this.add.text(this.scale.gameSize.width / 2, this.scale.gameSize.height / 1.5)
            .setOrigin(0.5, 0.5)
            .setScrollFactor(0)
            .setFontSize(46)
            .setColor('#ffffff')
            .setText('PRESS SPACE TO PLAY');
    }

    update() {
        if (this.keyboardInput.space.isDown) {
            this.scene.start('GameScene');
        }
        if (this.keyboardInput.debugDeath.isDown) {
            console.log('DEATH');
            this.scene.start('DeathScene');
        }
    }
}