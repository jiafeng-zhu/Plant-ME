export default class SleepSprite extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'sleep')

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.createAnims()

    // Start animation
    this.anims.play('sleep')
  }

  private createAnims() {
    this.anims.create({
      key: 'sleep',
      frames: this.anims.generateFrameNames('sleep', {
        prefix: 'sleep_',
        start: 1,
        end: 2,
      }),
      repeat: -1,
      frameRate: 1.5,
    })
  }
}
