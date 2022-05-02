export default class BeautySprite extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'beauty')

    this.setScale(0.8)

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.createAnims()

    // Start animation
    this.anims.play('beauty')
  }

  private createAnims() {
    this.anims.create({
      key: 'beauty',
      frames: this.anims.generateFrameNames('beauty', {
        prefix: 'beauty_',
        start: 1,
        end: 2,
      }),
      repeat: -1,
      frameRate: 2,
    })
  }
}
