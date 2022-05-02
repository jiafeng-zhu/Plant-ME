export default class NutrientSprite extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'nutrient')

    this.setScale(0.8)

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.createAnims()

    // Start animation
    this.anims.play('nutrient')
  }

  private createAnims() {
    this.anims.create({
      key: 'nutrient',
      frames: this.anims.generateFrameNames('nutrient', {
        prefix: 'nutrient_',
        start: 1,
        end: 4,
      }),
      repeat: -1,
      frameRate: 3,
    })
  }
}
