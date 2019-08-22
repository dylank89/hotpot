import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    var title = this.add
      .text(this.cameras.main.width/2 + 10, 50, `Main Menu`, {
        color: '#000000',
        fontSize: 24
      })
      .setOrigin(1, 0);
    var menu1 = this.add
      .text(this.cameras.main.width/2, 200, `[Demo]`, {
        color: '#000000',
        fontSize: 24
      })
      .setOrigin(1, 0);
    menu1.setInteractive();
    menu1.on('pointerup', function(pointer) {
       this.scene.scene.start("DemoScene");
    });
  }

  update() {
  }
}
