import 'phaser'
import StartScene from './scenes/StartScene'
import CreditsScene from './scenes/CreditsScene'
import CollectionScene from './scenes/CollectionScene'
import CollectionScene1 from './scenes/CollectionScene_1'
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
    StartScene,
    CreditsScene,
    CollectionScene,
    CollectionScene1,
    LevelOneScene,
    UIScene,
    GameOverScene,
  ],
}

new Phaser.Game(config)
