import CharacterSprite from '../objects/CharacterSprite'
import NutrientSprite from '../objects/NutrientSprite'
import BeautySprite from '../objects/BeautySprite'
import UIScene from './UIScene'

export default class LevelOneScene extends Phaser.Scene {
  platforms!: Phaser.Physics.Arcade.StaticGroup
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  background!: Phaser.GameObjects.Image
  player!: CharacterSprite
  nutrience!: Phaser.Physics.Arcade.Group
  beauty!: Phaser.Physics.Arcade.Group
  gameBgm!: Phaser.Sound.BaseSound
  beautyBgm!: Phaser.Sound.BaseSound
  energyBgm!: Phaser.Sound.BaseSound
  hitwall!: Phaser.Sound.BaseSound
  UIScene!: UIScene

  tilesize = 48
  worldTileWidth = 50
  worldTileHeight = 80
  worldWidth: number
  worldHeight: number

  constructor() {
    super({ key: 'LevelOneScene' })

    this.worldWidth = this.worldTileWidth * this.tilesize
    this.worldHeight = this.worldTileHeight * this.tilesize
  }

  preload() {}

  create() {
    // Get scores from UIScene
    this.UIScene = this.scene.get('UIScene') as UIScene

    // Camera
    this.cameras.main.setBounds(0, 0, this.worldWidth, this.worldHeight)
    this.physics.world.setBounds(0, 0, this.worldWidth, this.worldHeight)

    // Bgm
    this.gameBgm = this.sound.add('game_bgm', { volume: 0.2 })
    this.gameBgm.play()
    this.hitwall = this.sound.add('hitwall', { volume: 0.1 })
    this.beautyBgm = this.sound.add('beauty_bgm', { volume: 0.1 })
    this.energyBgm = this.sound.add('energy_bgm', { volume: 0.2 })

    // Background
    this.background = this.add.image(0, 0, 'background').setOrigin(0, 0)

    // Tiles
    const map = this.make.tilemap({ key: 'plant_u_1' })
    const tileset = map.addTilesetImage('plant_u_tileset', 'tiles')
    const platforms = map.createLayer('Platforms', tileset)
    const walls = map.createLayer('Walls', tileset)

    walls.setCollisionByProperty({ collides: true })
    platforms.setCollisionByProperty({ collides: true })

    // Player
    this.player = new CharacterSprite(this, 1200, 3790)

    // Set collision
    // Game over when collision is true
    this.physics.add.collider(this.player, walls, () => this.gameOver())
    this.physics.add.collider(this.player, platforms, () => this.gameOver())
    this.physics.add.collider(this.player, this.player, () => this.gameOver())

    // Place the nutrience
    this.nutrience = this.physics.add.group({
      classType: NutrientSprite,
    })

    this.nutrience.get(22 * this.tilesize, 72 * this.tilesize).setOrigin(0)
    this.nutrience.get(28 * this.tilesize, 57 * this.tilesize).setOrigin(0)
    this.nutrience.get(37 * this.tilesize, 50 * this.tilesize).setOrigin(0)
    this.nutrience.get(28 * this.tilesize, 49 * this.tilesize).setOrigin(0)
    this.nutrience.get(26 * this.tilesize, 54 * this.tilesize).setOrigin(0)
    this.nutrience.get(18 * this.tilesize, 30 * this.tilesize).setOrigin(0)
    this.nutrience.get(5 * this.tilesize, 28 * this.tilesize).setOrigin(0)
    this.nutrience.get(4 * this.tilesize, 22 * this.tilesize).setOrigin(0)
    this.nutrience.get(7 * this.tilesize, 18 * this.tilesize).setOrigin(0)
    this.nutrience.get(14 * this.tilesize, 11 * this.tilesize).setOrigin(0)

    // Collect the nutrience
    this.physics.add.overlap(
      this.player,
      this.nutrience,
      this.collectNutrient,
      undefined,
      this,
    )

    // Place the beauty
    this.beauty = this.physics.add.group({
      classType: BeautySprite,
    })

    this.beauty.get(27 * this.tilesize, 69 * this.tilesize).setOrigin(0)
    this.beauty.get(25 * this.tilesize, 59 * this.tilesize).setOrigin(0)
    this.beauty.get(32 * this.tilesize, 51 * this.tilesize).setOrigin(0)
    this.beauty.get(23 * this.tilesize, 37 * this.tilesize).setOrigin(0)
    this.beauty.get(12 * this.tilesize, 31 * this.tilesize).setOrigin(0)
    this.beauty.get(15 * this.tilesize, 3 * this.tilesize).setOrigin(0)
    this.beauty.get(47 * this.tilesize, 49 * this.tilesize).setOrigin(0)
    this.beauty.get(45 * this.tilesize, 43 * this.tilesize).setOrigin(0)
    this.beauty.get(45 * this.tilesize, 35 * this.tilesize).setOrigin(0)
    this.beauty.get(47 * this.tilesize, 28 * this.tilesize).setOrigin(0)

    // Collect the beauty
    this.physics.add.overlap(
      this.player,
      this.beauty,
      this.collectBeauty,
      undefined,
      this,
    )

    // Keyboard
    this.cursors = this.input.keyboard.createCursorKeys()

    // Camera
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05)

    this.scene.launch('UIScene')
  }

  // Gameover
  public gameOver() {
    this.gameBgm.stop()
    this.hitwall.play()
    this.scene.pause()
    this.scene.stop('UIScene')
    this.scene.launch('GameOverScene')
  }

  update() {
    //Check if user presses arrow keys
    //Then move and play animations
    if (this.cursors.left.isDown) {
      this.player.moveLeft()
    } else if (this.cursors.right.isDown) {
      this.player.moveRight()
    } else if (this.cursors.down.isDown) {
      this.player.moveDown()
    } else if (this.cursors.up.isDown) {
      this.player.moveUp()
    }

    if (this.cursors.space.isDown) {
      this.player.setVelocity(0, 0)
    }

    // Ending A
    // Check if player takes route A
    if (this.player.x < 1248 && this.player.y < 200) {
      this.gameBgm.stop()
      this.scene.stop('LevelOneScene')
      this.scene.stop('UIScene')
      this.scene.start('EndingA')
    }

    // Ending B
    // Check if player takes route B
    // Check if energy < beauty
    if (
      this.player.x > 2000 &&
      this.player.y < 200 &&
      this.UIScene.energy < this.UIScene.beauty
    ) {
      this.gameBgm.stop()
      this.scene.stop('LevelOneScene')
      this.scene.stop('UIScene')
      this.scene.start('EndingB')
    }

    // Ending C
    // Check if player takes route B
    // Check if energy >= beauty
    if (
      this.player.x > 2000 &&
      this.player.y < 200 &&
      this.UIScene.energy >= this.UIScene.beauty
    ) {
      this.gameBgm.stop()
      this.scene.stop('LevelOneScene')
      this.scene.stop('UIScene')
      this.scene.start('EndingC')
    }
  }

  private collectNutrient(
    _player: Phaser.GameObjects.GameObject,
    nutrient: Phaser.GameObjects.GameObject,
  ) {
    this.energyBgm.play()
    this.events.emit('nutrientPickedUp')

    nutrient.destroy()
  }

  private collectBeauty(
    _player: Phaser.GameObjects.GameObject,
    beauty: Phaser.GameObjects.GameObject,
  ) {
    this.beautyBgm.play()
    this.events.emit('beautyPickedUp')

    beauty.destroy()
  }
}
