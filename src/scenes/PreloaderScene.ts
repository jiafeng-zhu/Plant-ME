export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' })
  }

  preload() {
    this.load.image('start-background', 'assets/img/start-background.png')
    this.load.image('credits-background', 'assets/img/credits-background.png')
    this.load.image('collection-background', 'assets/img/collection-background.png')
    this.load.image('routes-background', 'assets/img/routes-background.png')
    this.load.image('background', 'assets/img/background.png')
    this.load.image('tail', 'assets/img/tail.png')

    //UI
    this.load.image('startButton', 'assets/img/UI/startButton.png')
    this.load.image('startButton-hover', 'assets/img/UI/startButton-hover.png')
    this.load.image('collectionButton', 'assets/img/UI/collectionButton.png')
    this.load.image('creditsButton', 'assets/img/UI/creditsButton.png')
    this.load.image('smallButton-hover', 'assets/img/UI/smallButton-hover.png')
    this.load.image('menuButton', 'assets/img/UI/menuButton.png')
    this.load.image('menuButton-hover', 'assets/img/UI/menuButton-hover.png')
    this.load.image('endingButton', 'assets/img/UI/endingButton.png')
    this.load.image('endingButton-hover','assets/img/UI/endingButton-hover.png',)
    this.load.image('routesButton', 'assets/img/UI/routesButton.png')
    this.load.image('routesButton-hover','assets/img/UI/routesButton-hover.png',)

    this.load.image('energy-icon', 'assets/img/UI/energy-icon.png')
    this.load.image('beauty-icon', 'assets/img/UI/beauty-icon.png')
    this.load.image('water-icon', 'assets/img/UI/water-icon.png')

    this.load.image('bar-background', 'assets/img/UI/bar-background.png')

    this.load.image('energy-left-cap', 'assets/img/UI/energy-left-cap.png')
    this.load.image('energy-right-cap', 'assets/img/UI/energy-right-cap.png')
    this.load.image('energy-middle', 'assets/img/UI/energy-middle.png')

    this.load.image('beauty-left-cap', 'assets/img/UI/beauty-left-cap.png')
    this.load.image('beauty-right-cap', 'assets/img/UI/beauty-right-cap.png')
    this.load.image('beauty-middle', 'assets/img/UI/beauty-middle.png')

    // audio
    this.load.audio('start_bgm', ['assets/audio/start_bgm.mp3'])
    this.load.audio('game_bgm', ['assets/audio/game_bgm.mp3'])
    this.load.audio('hitwall', ['assets/audio/hitwall.mp3'])

    //Tileset & Tilemap
    this.load.image('tiles', 'assets/tiles/plant_u_tileset.png')
    this.load.tilemapTiledJSON('plant_u_1', 'assets/tiles/plant_u_1.json')

    //Sprites
    this.load.atlas(
      'character',
      'assets/img/me.png',
      'assets/img/me.json')

    this.load.atlas(
      'sleep',
      'assets/img/sleep.png',
      'assets/img/sleep.json')

    this.load.spritesheet(
      'god_of_plants',
      'assets/img/god_of_plants.png',
      {frameWidth: 256,frameHeight: 256,})

    this.load.atlas(
      'nutrient',
      'assets/img/nutrient.png',
      'assets/img/nutrient.json',)

    this.load.atlas(
      'beauty',
      'assets/img/beauty.png',
      'assets/img/beauty.json')
  }

  create() {
    this.scene.start('StartScene')
  }
}
