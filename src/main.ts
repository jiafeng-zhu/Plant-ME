import 'phaser'
import LevelOneScene from './scenes/LevelOneScene'
import PreloaderScene from './scenes/PreloaderScene'
import UIScene from './scenes/UIScene'
import GameOverScene from './scenes/GameOverScene'

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 576,
    height: 576,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: [
    PreloaderScene,
    LevelOneScene,
    UIScene,
    GameOverScene,
  ],
}

new Phaser.Game(config)
