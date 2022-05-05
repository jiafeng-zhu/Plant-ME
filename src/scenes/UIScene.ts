import CountdownController from './CountdownController'
import UIBar from './UIBar'

export default class UIScene extends Phaser.Scene {
  energy = 0
  energyUI!: Phaser.GameObjects.Text
  energyIcon!: Phaser.GameObjects.Image
  beauty = 0
  beautyUI!: Phaser.GameObjects.Text
  beautyIcon!: Phaser.GameObjects.Image
  barBackground!: Phaser.GameObjects.Image
  waterUI!: Phaser.GameObjects.Text
  waterIcon!: Phaser.GameObjects.Image
  countdown!: CountdownController

  constructor() {
    super({ key: 'UIScene' })
  }

  preload() {}

  create() {
    //UI align to the right
    const x = 20

    //EnergyUI
    this.energyUI = this.add.text(x + 25, 40, `Energy: ${this.energy}`, {
      fontFamily: 'Dosis',
      fontSize: '20px',
      color: '#61E8AF',
    })

    this.energyIcon = this.add
      .image(x, 40, 'energy-icon')
      .setOrigin(0)
      .setScale(0.5)

    this.barBackground = this.add
      .image(x, 74, 'bar-background')
      .setOrigin(0, 0.5)

    //BeautyUI
    this.beautyUI = this.add.text(x + 25, 85, `Beauty: ${this.beauty}`, {
      fontFamily: 'Dosis',
      fontSize: '20px',
      color: '#FFC3D1',
    })

    this.beautyIcon = this.add
      .image(x, 85, 'beauty-icon')
      .setOrigin(0)
      .setScale(0.5)

    this.barBackground = this.add
      .image(x, 119, 'bar-background')
      .setOrigin(0, 0.5)

    //Water Countdown
    this.waterUI = this.add.text(x + 25, 15, `Humidity:`, {
      fontFamily: 'Dosis',
      fontSize: '20px',
      color: '#52D5FF',
    })

    this.waterIcon = this.add
      .image(x, 15, 'water-icon')
      .setOrigin(0)
      .setScale(0.5)

    const timerLabel = this.add.text(x + 107, 15, `60`, {
      fontFamily: 'Dosis',
      fontSize: '20px',
      color: '#52D5FF',
    })

    this.countdown = new CountdownController(this, timerLabel)
    this.countdown.start(this.handleCountdownFinished.bind(this))

    //Activity send to LevelOneScene
    this.scene
      .get('LevelOneScene')
      .events.on('nutrientPickedUp', this.pickupNutrient, this)

    this.scene
      .get('LevelOneScene')
      .events.on('beautyPickedUp', this.pickupBeauty, this)
  }

  handleCountdownFinished() {
    this.scene.stop, this.scene.start('GameOverScene')
  }

  update() {
    this.countdown.update()
  }

  //Action of collect nutrient
  private pickupNutrient() {
    const energyBar = new UIBar(this, 20, 74, 150)
      .withLeftCap(this.add.image(0, 0, 'energy-left-cap'))
      .withMiddle(this.add.image(0, 0, 'energy-middle'))
      .withRightCap(this.add.image(0, 0, 'energy-right-cap'))
      .layout()

    this.energy += 10
    this.energyUI.setText(`Energy: ${this.energy}`)
    energyBar.animateToFill(this.energy / 100, 400)
  }

  //Action of collect beauty
  private pickupBeauty() {
    const beautyBar = new UIBar(this, 20, 119, 150)
      .withLeftCap(this.add.image(0, 0, 'beauty-left-cap'))
      .withMiddle(this.add.image(0, 0, 'beauty-middle'))
      .withRightCap(this.add.image(0, 0, 'beauty-right-cap'))
      .layout()

    this.beauty += 10
    this.beautyUI.setText(`Beauty: ${this.beauty}`)
    beautyBar.animateToFill(this.beauty / 100, 400)
  }
}
