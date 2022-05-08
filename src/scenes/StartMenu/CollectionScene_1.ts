
export default class CollectionScene_1 extends Phaser.Scene {
  collectionbackground!: Phaser.GameObjects.Image

  constructor() {
    super('CollectionScene1')
  }

  preload() {}

  create() {
    this.collectionbackground = this.add
      .image(0, 0, 'routes-background')
      .setOrigin(0, 0)

    // Menu button
    let menuButton = this.add.image(77, 31, 'menuButton').setOrigin(0)
    let menuHover = this.add.image(77, 31, 'menuButton-hover').setOrigin(0)
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

    // Endings button
    let endingButton = this.add.image(181, 31, 'endingButton').setOrigin(0)
    let endingHover = this.add.image(181, 31, 'endingButton-hover').setOrigin(0)
    endingHover.setVisible(false)

    // Routes button
    let routesButton = this.add.image(323, 31, 'routesButton').setOrigin(0)
    let routesHover = this.add.image(323, 31, 'routesButton-hover').setOrigin(0)
    routesHover.setVisible(true)

    // Endings button interaction
    endingButton.setInteractive()
    endingButton.on('pointerover', () => {
      endingHover.setVisible(true)
    })
    endingButton.on('pointerout', () => {
      endingHover.setVisible(false)
    })
    endingButton.on('pointerup', () => {
      this.scene.bringToTop('CollectionScene')
    })
  }
}
