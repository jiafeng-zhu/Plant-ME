
export default class CharacterSprite extends Phaser.Physics.Arcade.Sprite {
  bodyWidth = 48
  bodyHeight = 48
  size = 20
  bodyGroup: Phaser.Physics.Arcade.Group
  frameTime: number = 0

  UP = 0
  DOWN = 1
  LEFT = 2
  RIGHT = 3

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

  // Add body part as game updates
  protected preUpdate(delta: number): void {
    this.frameTime += delta

    if (this.frameTime > 35) {
      this.frameTime = 0
      // Grow UP
      this.bodyGroup.create(this.x - 10, this.y, 'tail').setOrigin(0, 0)

    }

    console.log(this.frameTime, this.bodyGroup.getLength())
  }

  public moveLeft() {
    this.setVelocity(-160, 0)
    this.anims.play('character-left', true)
  }
  public moveRight() {
    this.setVelocity(160, 0)
    this.anims.play('character-right', true)
  }
  public moveUp() {
    this.setVelocity(0, -160)
    this.anims.play('character-up', true)
  }
  public moveDown() {
    this.setVelocity(0, 160)
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
      repeat: -1,
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

  // faceLeft()
  //       {
  //           if (this.direction === UP || this.direction === DOWN)
  //           {
  //               this.heading = LEFT;
  //           }
  //       },

  // faceRight()
  //       {
  //           if (this.direction === UP || this.direction === DOWN)
  //           {
  //               this.heading = RIGHT;
  //           }
  //       },

  // faceUp()
  //       {
  //           if (this.direction === LEFT || this.direction === RIGHT)
  //           {
  //               this.heading = UP;
  //           }
  //       },

  // faceDown()
  //       {
  //           if (this.direction === LEFT || this.direction === RIGHT)
  //           {
  //               this.heading = DOWN;
  //           }
  //       },
}
