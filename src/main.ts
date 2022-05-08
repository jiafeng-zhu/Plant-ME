import 'phaser'
import StartScene from './scenes/StartScene'
import CreditsScene from './scenes/StartMenu/CreditsScene'
import CollectionScene from './scenes/StartMenu/CollectionScene'
import CollectionScene1 from './scenes/StartMenu/CollectionScene_1'
import LevelOneScene from './scenes/LevelOneScene'
import PreloaderScene from './scenes/PreloaderScene'
import UIScene from './scenes/UIScene'
import GameOverScene from './scenes/GameOverScene'
import EndingA from './scenes/Endings/EndingA'
import EndScene from './scenes/EndScene'
import EndingB from './scenes/Endings/EndingB'
import EndingC from './scenes/Endings/EndingC'

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
    EndingA,
    EndingB,
    EndingC,
    EndScene,
  ],
}

new Phaser.Game(config)
