export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' })
  }

  preload() {
    this.load.image('background', 'assets/img/background.png')
    this.load.image('tail', 'assets/img/tail.png')

    //UI
    this.load.image('energy-icon', 'assets/img/energy-icon.png')
    this.load.image('beauty-icon', 'assets/img/beauty-icon.png')
    this.load.image('water-icon', 'assets/img/water-icon.png')

    this.load.image('bar-background', 'assets/img/bar-background.png')

    this.load.image('energy-left-cap', 'assets/img/energy-left-cap.png')
    this.load.image('energy-right-cap', 'assets/img/energy-right-cap.png')
    this.load.image('energy-middle', 'assets/img/energy-middle.png')

    this.load.image('beauty-left-cap', 'assets/img/beauty-left-cap.png')
    this.load.image('beauty-right-cap', 'assets/img/beauty-right-cap.png')
    this.load.image('beauty-middle', 'assets/img/beauty-middle.png')

    // audio
    this.load.audio('game_bgm', ['assets/audio/game_bgm.mp3'])

    //Tileset & Tilemap
    this.load.image('tiles', 'assets/tiles/plant_u_tileset.png')
    this.load.tilemapTiledJSON('plant_u_1', 'assets/tiles/plant_u_1.json')

    //Sprites
    // this.load.spritesheet('character', 'assets/img/me.png', {
    //   frameWidth: 48,
    //   frameHeight: 55,
    // })

    this.load.atlas('character', 'assets/img/me.png', 'assets/img/me.json')

    this.load.spritesheet('god_of_plants', 'assets/img/god_of_plants.png', {
      frameWidth: 256,
      frameHeight: 256,
    })

    this.load.atlas(
      'nutrient',
      'assets/img/nutrient.png',
      'assets/img/nutrient.json',
    )

    this.load.atlas('beauty', 'assets/img/beauty.png', 'assets/img/beauty.json')
  }

  create() {
    this.scene.start('LevelOneScene')
  }
}
