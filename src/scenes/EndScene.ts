import GodOfPlantsSprite from '../objects/GodOfPlantsSprite'

export default class EndScene extends Phaser.Scene {
  god_of_plants!: GodOfPlantsSprite
  startBgm!: Phaser.Sound.BaseSound

  constructor() {
    super('EndScene')
  }

  preload() {}

  create() {
    this.add.image(0, 0, 'success-background').setOrigin(0)

    this.startBgm = this.sound.add('start_bgm', { volume: 1, loop: true })
    this.startBgm.play()

    this.god_of_plants = new GodOfPlantsSprite(this, 160, 161).setOrigin(0)
    this.god_of_plants.happy()

    this.add
      .text(132, 101, `It's nice to see you again`, {
        fontFamily: 'Dosis',
        fontSize: '30px',
        color: '#FFF2CC',
        align: 'center',
      })
      .setOrigin(0)

    // NextLevel Button
    let nextLevelButton = this.add
      .image(216, 461, 'nextLevelButton')
      .setOrigin(0)
    let nextLevelHover = this.add
      .image(216, 461, 'nextLevelButton-hover')
      .setOrigin(0)
    nextLevelHover.setVisible(false)

    // NextLevel button interaction
    nextLevelButton.setInteractive()
    nextLevelButton.on('pointerover', () => {
      nextLevelHover.setVisible(true)
    })
    nextLevelButton.on('pointerout', () => {
      nextLevelHover.setVisible(false)
    })
    nextLevelButton.on('pointerup', () => {
      this.scene.stop()
      this.startBgm.stop()
      this.scene.start('LevelOneScene')
    })

    // Retry button
    let retryButton = this.add.image(112, 461, 'retryButton').setOrigin(0)
    let retryHover = this.add.image(112, 461, 'retryButton-hover').setOrigin(0)
    retryHover.setVisible(false)

    // Retry button interaction
    retryButton.setInteractive()
    retryButton.on('pointerover', () => {
      retryHover.setVisible(true)
    })
    retryButton.on('pointerout', () => {
      retryHover.setVisible(false)
    })
    retryButton.on('pointerup', () => {
      this.scene.stop()
      this.startBgm.stop()
      this.scene.start('LevelOneScene')
    })

    // Menu button
    let menuButton = this.add.image(376, 461, 'menuButton').setOrigin(0)
    let menuHover = this.add.image(376, 461, 'menuButton-hover').setOrigin(0)
    menuHover.setVisible(false)

    // Menu button interaction
    menuButton.setInteractive()
    menuButton.on('pointerover', () => {
      menuHover.setVisible(true)
    })
    menuButton.on('pointerout', () => {
      menuHover.setVisible(false)
    })
    menuButton.on('pointerup', () => {
      this.scene.stop()
      this.startBgm.stop()
      this.scene.start('CreditsScene')
      this.scene.start('CollectionScene')
      this.scene.start('CollectionScene1')
      this.scene.start('StartScene')
      this.scene.bringToTop('StartScene')
    })
  }

  update() {}
}
