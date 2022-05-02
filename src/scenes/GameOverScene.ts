import GodOfPlantsSprite from '../objects/GodOfPlantsSprite'

export default class GameOverScene extends Phaser.Scene {
  god_of_plants!: GodOfPlantsSprite

  constructor() {
    super('GameOverScene')
  }

  preload() {}

  create() {

    this.god_of_plants = new GodOfPlantsSprite(this, 288, 288).setOrigin(0.5).setScale(0.7)

    this.add.text(288,288,
        `Sorry you didn't make it...`,
        {
          fontFamily: 'Dosis',
          fontSize: '48px',
          color: '#FFFFFF',
          align: 'center',
        },
      )
      .setOrigin(0.5)
  }

  update() {}
}
