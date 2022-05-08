
export default class CreditsScene extends Phaser.Scene {
  creditsbackground!: Phaser.GameObjects.Image

  constructor() {
    super('CreditsScene')
  }

  preload() {}

  create() {
    this.creditsbackground = this.add
      .image(0, 0, 'credits-background')
      .setOrigin(0, 0)

    // Menu button
    let menuButton = this.add.image(244, 461, 'menuButton').setOrigin(0)
    let menuHover = this.add.image(244, 461, 'menuButton-hover').setOrigin(0)
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
      this.scene.bringToTop('StartScene')
    })
  }
}
