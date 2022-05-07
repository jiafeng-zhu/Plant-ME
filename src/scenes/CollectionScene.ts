
export default class CollectionScene extends Phaser.Scene {
  collectionbackground!: Phaser.GameObjects.Image

  constructor() {
    super('CollectionScene')
  }

  preload() {}

  create() {
    this.collectionbackground = this.add
      .image(0, 0, 'collection-background')
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
      this.scene.start('StartScene')
    })

    // Endings button
    let endingButton = this.add.image(181, 31, 'endingButton').setOrigin(0)
    let endingHover = this.add.image(181, 31, 'endingButton-hover').setOrigin(0)
    endingHover.setVisible(true)

    // Routes button
    let routesButton = this.add.image(323, 31, 'routesButton').setOrigin(0)
    let routesHover = this.add.image(323, 31, 'routesButton-hover').setOrigin(0)
    routesHover.setVisible(false)

    // Routes button interaction
    routesButton.setInteractive()
    routesButton.on('pointerover', () => {
      routesHover.setVisible(true)
    })
    routesButton.on('pointerout', () => {
      routesHover.setVisible(false)
    })
    routesButton.on('pointerup', () => {
      this.scene.start('CollectionScene1')
    })
  }
}
