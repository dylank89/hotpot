export default class FpsText extends Phaser.GameObjects.Text {
  constructor(scene) {
    super(scene, 300, 10, '', { color: 'black', fontSize: '28px' })
    scene.add.existing(this)
    this.setOrigin(0)
  }

  update(scene) {
    this.setText(`fps: ${Math.floor(scene.game.loop.actualFps)}`)
  }
}
