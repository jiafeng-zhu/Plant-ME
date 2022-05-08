import GodOfPlantsSprite from '../objects/GodOfPlantsSprite'

export default class GameOverScene extends Phaser.Scene {
  god_of_plants!: GodOfPlantsSprite

  constructor() {
    super('GameOverScene')
  }

  preload() {}

  create() {
    this.add.image(0, 0, 'gameover-background').setOrigin(0)

    this.god_of_plants = new GodOfPlantsSprite(this, 160, 161).setOrigin(0)
    this.god_of_plants.sad()

    this.add
      .text(
        147,
        74,
        `I'm so sorry
      you didn't make it...`,
        {
          fontFamily: 'Dosis',
          fontSize: '30px',
          color: '#FFF2CC',
          align: 'center',
        },
      )
      .setOrigin(0)

    // Retry button
    let retryButton = this.add.image(183, 461, 'retryButton').setOrigin(0)
    let retryHover = this.add.image(183, 461, 'retryButton-hover').setOrigin(0)
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
    this.scene.start('LevelOneScene')
    })

    // Menu button
    let menuButton = this.add.image(305, 461, 'menuButton').setOrigin(0)
    let menuHover = this.add.image(305, 461, 'menuButton-hover').setOrigin(0)
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
      this.scene.start('CreditsScene')
      this.scene.start('CollectionScene')
      this.scene.start('CollectionScene1')
      this.scene.start('StartScene')
      this.scene.bringToTop('StartScene')
    })
  }

  update() {}
}
