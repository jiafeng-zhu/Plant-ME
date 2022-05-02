export default class CharacterSprite extends Phaser.Physics.Arcade.Sprite {
  bodyWidth = 48
  bodyHeight = 48
  size = 20

  // bodyGroup

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

    this.createAnims()

    //Body
    // this.bodyGroup = this.scene.physics.add.group()

    // this.bodyGroup.create(1200, 3840, 'tail').setOrigin(0.5, 0)
    // this.bodyGroup.create(1200, 3840 + this.size, 'tail').setOrigin(0.5, 0)

    // console.log(this.bodyGroup.getChildren())

    // Start animation
    this.anims.play('character-idle')
  }

  public collidesWith(
    object:
      | Phaser.GameObjects.GameObject
      | Phaser.GameObjects.GameObject[]
      | Phaser.GameObjects.Group
      | Phaser.GameObjects.Group[],
  ) {
    this.scene.physics.add.collider(this, object)
    // this.scene.physics.add.collider(this.bodyGroup, object)
    // this.scene.physics.add.collider(this.bodyGroup, this.bodyGroup)
  }

  public moveLeft() {
    this.setVelocity(-160, 0)
    // this.bodyGroup.setVelocity(-160, 0)
    this.anims.play('character-left', true)
  }
  public moveRight() {
    this.setVelocity(160, 0)
    // this.bodyGroup.setVelocity(160, 0)
    this.anims.play('character-right', true)
  }
  public moveUp() {
    this.setVelocity(0, -160)
    // this.bodyGroup.setVelocity(0, -160)
    this.anims.play('character-up', true)
  }
  public moveDown() {
    this.setVelocity(0, 160)
    // this.bodyGroup.setVelocity(0, 160)
    this.anims.play('character-down', true)
  }

  private createAnims() {
    this.anims.create({
      key: 'character-idle',
      frames: this.anims.generateFrameNumbers('character', {
        start: 0,
        end: 3,
      }),
      frameRate: 5,
      repeat: -1,
    })

    this.anims.create({
      key: 'character-left',
      frames: this.anims.generateFrameNumbers('character', {
        start: 13,
        end: 16,
      }),
      frameRate: 5,
      repeat: -1, //repeat forever
    })

    this.anims.create({
      key: 'character-right',
      frames: this.anims.generateFrameNumbers('character', {
        start: 4,
        end: 7,
      }),
      frameRate: 5,
      repeat: -1,
    })

    this.anims.create({
      key: 'character-down',
      frames: this.anims.generateFrameNumbers('character', {
        start: 8,
        end: 11,
      }),
      frameRate: 5,
      repeat: -1,
    })

    this.anims.create({
      key: 'character-up',
      frames: this.anims.generateFrameNumbers('character', {
        start: 0,
        end: 3,
      }),
      frameRate: 5,
      repeat: -1,
    })
  }

}
