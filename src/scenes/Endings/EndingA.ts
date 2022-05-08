export default class EndingA extends Phaser.Scene {
  endingA!: Phaser.GameObjects.Image
  endingABgm!: Phaser.Sound.BaseSound

  constructor() {
    super('EndingA')
  }

  preload() {}

  create() {
    this.endingA = this.add.image(0, 0, 'endingA').setOrigin(0, 0)
    this.endingABgm = this.sound.add('endingA_bgm', { volume: 0.2 })
    this.endingABgm.play()

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
      this.endingABgm.stop()
      this.scene.start('EndScene')
    })
  }
}
