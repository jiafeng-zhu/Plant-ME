export default class GodOfPlantsSprite extends Phaser.Physics.Arcade.Sprite {

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'god_of_plants')

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.createAnims()
    this.anims.play('god_of_plants-sad')
  }

  private createAnims() {
    this.anims.create({
      key: 'god_of_plants-idle',
      frames: this.anims.generateFrameNumbers('god_of_plants', {
        start: 0,
        end: 1,
      }),
      frameRate: 3,
      repeat: -1,
    })

    this.anims.create({
      key: 'god_of_plants-happy',
      frames: this.anims.generateFrameNumbers('god_of_plants', {
        start: 2,
        end: 3,
      }),
      frameRate: 3,
      repeat: -1,
    })

    this.anims.create({
      key: 'god_of_plants-confused',
      frames: this.anims.generateFrameNumbers('god_of_plants', {
        start: 4,
        end: 5,
      }),
      frameRate: 3,
      repeat: -1,
    })

    this.anims.create({
      key: 'god_of_plants-sad',
      frames: this.anims.generateFrameNumbers('god_of_plants', {
        start: 6,
        end: 7,
      }),
      frameRate: 3,
      repeat: -1,
    })
  }

}
