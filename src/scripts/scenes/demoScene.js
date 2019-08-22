import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'

export default class DemoScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'SceneDemo' })
  }

  create() {

    var menu1 = this.add
      .text(10, 20, `[Main Menu]`, {
        color: '#000000',
        fontSize: 24
      })
      .setOrigin(0, 0);
    menu1.setInteractive();
    menu1.on('pointerup', function(pointer) {
       this.scene.scene.start("MainScene");
    });

    /**
     * Delete all the code below to start a fresh scene
     */
    new PhaserLogo(this, this.cameras.main.width / 2, 0)
    this.fpsText = new FpsText(this)

    // async/await example
    const pause = ms => {
      return new Promise(resolve => {
        window.setTimeout(() => {
          resolve()
        }, ms)
      })
    }
    const asyncFunction = async () => {
      console.log('Before Pause')
      await pause(4000) // 4 seconds pause
      console.log('After Pause')
    }
    asyncFunction()

    // Spread operator test
    const numbers = [0, 1, 2, 3]
    const moreNumbers = [...numbers, 4, 5]
    console.log(`All numbers: ` + moreNumbers)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 20, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: 24
      })
      .setOrigin(1, 0)
  }

  update() {
    this.fpsText.update(this)
  }
}
