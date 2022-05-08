import CharacterSprite from '../objects/CharacterSprite'
import SleepSprite from '../objects/SleepSprite'

export default class StartScene extends Phaser.Scene {
  startbackground!: Phaser.GameObjects.Image
  sleep!: SleepSprite
  startBgm!: Phaser.Sound.BaseSound
  title!: Phaser.GameObjects.Text
  bgmtest = 0

  constructor() {
    super('StartScene')
  }

  preload() {}

  create() {
    this.startbackground = this.add
      .image(0, 0, 'start-background')
      .setOrigin(0, 0)

    this.sleep = new SleepSprite(this, 236, 471).setOrigin(0)

    // Bgm
    this.startBgm = this.sound.add('start_bgm', { volume: 1 })

    // Check whether bgm has already been on
    if (this.bgmtest == 0) {
      this.startBgm.play()
    }

    // Title
    this.title = this.add
      .text(288, 150, `Plant ME`, {
        fontFamily: 'Dosis',
        fontSize: '60px',
        color: '#FFF2CC',
      })
      .setOrigin(0.5, 0.5)

    // Start button
    let startButton = this.add.image(200, 278, 'startButton').setOrigin(0)
    let startHover = this.add.image(200, 278, 'startButton-hover').setOrigin(0)
    startHover.setVisible(false)

    // Start button interaction
    startButton.setInteractive()
    startButton.on('pointerover', () => {
      startHover.setVisible(true)
    })
    startButton.on('pointerout', () => {
      startHover.setVisible(false)
    })
    startButton.on('pointerup', () => {
      this.startBgm.stop()
      this.scene.start('LevelOneScene')
    })

    // Collection button
    let collectionButton = this.add
      .image(218, 349, 'collectionButton')
      .setOrigin(0)
    let collectionHover = this.add
      .image(218, 349, 'smallButton-hover')
      .setOrigin(0)
    collectionHover.setVisible(false)

    // Collection button interaction
    collectionButton.setInteractive()
    collectionButton.on('pointerover', () => {
      collectionHover.setVisible(true)
    })
    collectionButton.on('pointerout', () => {
      collectionHover.setVisible(false)
    })
    collectionButton.on('pointerup', () => {
      this.bgmtest = 1
      this.scene.start('CollectionScene')
    })

    // Credits button
    let creditsButton = this.add.image(218, 403, 'creditsButton').setOrigin(0)
    let creditsHover = this.add
      .image(218, 403, 'smallButton-hover')
      .setOrigin(0)
    creditsHover.setVisible(false)

    // Credits button interaction
    creditsButton.setInteractive()
    creditsButton.on('pointerover', () => {
      creditsHover.setVisible(true)
    })
    creditsButton.on('pointerout', () => {
      creditsHover.setVisible(false)
    })
    creditsButton.on('pointerup', () => {
      this.bgmtest = 1
      this.scene.start('CreditsScene')
    })
  }
}
