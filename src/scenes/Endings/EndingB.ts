export default class EndingB extends Phaser.Scene {
  endingB!: Phaser.GameObjects.Image
  endingBBgm!: Phaser.Sound.BaseSound

  constructor() {
    super('EndingB')
  }

  preload() {}

  create() {
    this.endingB = this.add.image(0, 0, 'endingB').setOrigin(0, 0)
    this.endingBBgm = this.sound.add('endingB_bgm', { volume: 0.4 })
    this.endingBBgm.play()

    // Next Button
    let nextButton = this.add
      .image(244, 491, 'nextButton')
      .setOrigin(0)
    let nextHover = this.add
      .image(244, 491, 'nextButton-hover')
      .setOrigin(0)
    nextHover.setVisible(false)

    // Next button interaction
    nextButton.setInteractive()
    nextButton.on('pointerover', () => {
      nextHover.setVisible(true)
    })
    nextButton.on('pointerout', () => {
      nextHover.setVisible(false)
    })
    nextButton.on('pointerup', () => {
      this.scene.stop()
      this.endingBBgm.stop()
      this.scene.start('EndScene')
    })
  }
}
