import {Boot} from './scenes/Boot';
import {Game} from './scenes/Game';
import {GameOver} from './scenes/GameOver';
import {MainMenu} from './scenes/MainMenu';
import Phaser from 'phaser';
import {Preloader} from './scenes/Preloader';

// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver
    ],
    scale: {
        // Or set parent divId here
        parent: 'game-container',

        mode: Phaser.Scale.FIT,

        // Or put game size here
        // width: 1024,
        // height: 768,

        // Minimum size
        min: {
            width: 400,
            height: 300
        },
        // Or set minimum size like these
        // minWidth: 800,
        // minHeight: 600,

        // Maximum size
        max: {
            width: 1024,
            height: 768
        },
        // Or set maximum size like these
        // maxWidth: 1600,
        // maxHeight: 1200,

        zoom: 1,  // Size of game canvas = game size * zoom
    },
};

const StartGame = (containerId) => {
    config.parent = containerId;
    config.scale.parent = containerId;
    return new Phaser.Game(config);
}

export default StartGame;
export { StartGame }