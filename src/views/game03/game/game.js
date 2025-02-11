import Phaser from 'phaser'
import BootScene from './scenes/BootScene'
import PlayScene from './scenes/PlayScene'

function launch(containerId) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: containerId,
        physics: {
           default: 'arcade',
           arcade: {
               gravity: { y: 300 },
               debug: false
           }
        },
        scene: [BootScene, PlayScene],
        scale: {
           // Or set parent divId here
           parent: containerId,

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
               width: 800,
               height: 600
           },
           // Or set maximum size like these
           // maxWidth: 1600,
           // maxHeight: 1200,

           zoom: 1,  // Size of game canvas = game size * zoom
        },
   })
}

export default launch
export { launch }
