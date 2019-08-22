import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    var title = this.add
      .text(this.cameras.main.width/2, 40, `Main Menu`, {
        color: '#000000',
        fontSize: 24
      })
      .setOrigin(0.5, 0.5);
    var menuDemo = this.add
      .text(this.cameras.main.width/2, 200, `[Demo]`, {
        color: '#000000',
        fontSize: 24
      })
      .setOrigin(0.5, 0.5);

    menuDemo.setInteractive();
    menuDemo.on('pointerup', function(pointer) {
       this.scene.scene.start("DemoScene");
    });
  }

  update() {
  }
}
