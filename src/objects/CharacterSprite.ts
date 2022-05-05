
export default class CharacterSprite extends Phaser.Physics.Arcade.Sprite {
  size = 20
  bodyGroup: Phaser.Physics.Arcade.Group
  frameTime: number = 0

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'character')

    this.scene = scene

    // Has to be right after `super()`
    scene.add.existing(this)
    scene.physics.add.existing(this)

    // Crop body size
    this.body.setSize(this.size, this.size)

    // Collides with world
    this.setCollideWorldBounds(true)

    // Start animation
    this.createAnims()
    this.anims.play('character-idle', true)

    // Body
    this.bodyGroup = this.scene.physics.add.group()
  }

  public moveUp() {
    this.setVelocity(0, -160)
    this.anims.play('character-idle', true)
  }
  public moveDown() {
    this.setVelocity(0, 160)
    this.anims.play('character-down', true)
  }

  public moveRight() {
    this.setVelocity(160, 0)
    this.anims.play('character-right', true)
  }

  public moveLeft() {
    this.setVelocity(-160, 0)
    this.anims.play('character-left', true)
  }

  private createAnims() {
    this.anims.create({
      key: 'character-idle',
      frames: this.anims.generateFrameNames('character', {
        prefix: 'me_',
        start: 1,
        end: 4,
      }),
      repeat: -1,
      frameRate: 5,
    })

    this.anims.create({
      key: 'character-down',
      frames: this.anims.generateFrameNames('character', {
        prefix: 'me_down_',
        start: 1,
        end: 4,
      }),
      repeat: -1,
      frameRate: 5,
    })

    this.anims.create({
      key: 'character-right',
      frames: this.anims.generateFrameNames('character', {
        prefix: 'me_right_',
        start: 1,
        end: 4,
      }),
      repeat: -1,
      frameRate: 5,
    })

    this.anims.create({
      key: 'character-left',
      frames: this.anims.generateFrameNames('character', {
        prefix: 'me_left_',
        start: 1,
        end: 4,
      }),
      repeat: -1,
      frameRate: 5,
    })
  }

  // Add body part as game updates
  protected preUpdate(delta: number): void {
    this.frameTime += delta

    if (this.frameTime > 35) {
      this.frameTime = 0
      this.bodyGroup.create(this.x+0.5, this.y - 7.6, 'tail').setOrigin(0.5, 0)
    }
  }
}
