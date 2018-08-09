// import { IMAGES, STATES } from 'constants';



// export default class Preload extends Phaser.State {

// create() {

//   this.game.stage.backgroundColor = '#182d3b';

//     //	You can listen for each of these events from Phaser.Loader
//     this.game.load.onLoadStart.add(loadStart, this);
//     this.game.load.onFileComplete.add(fileComplete, this);
//     this.game.load.onLoadComplete.add(loadComplete, this);

//     //	Just to kick things off
//     // button = game.add.button(game.world.centerX - 95, 400, 'button', start, this, 2, 1, 0);

//     //	Progress report
//     text = this.game.add.text(32, 32, 'Click to start load', { fill: '#ffffff' });

// }

// start() {
//   this.game.state.start(STATES.TITLE);
//     // game.load.start();
// }

// loadStart() {

// 	text.setText("Loading ...");

// }

// //	This callback is sent the following parameters:
// fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

// 	text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
// }

// loadComplete() {

// 	text.setText("Load Complete");

// }


//   preload() {

//     // this.message = this.game.loader.querySelector('.loader__message');
// //   //     var progressBar = this.game.add.graphics();
// //   //     var progressBox = this.game.add.graphics();
// //   //     // progressBox.fillStyle(0x222222, 0.8);
// //   //     // progressBox.fillRect(240, 270, 320, 50);
      
// //   //     var width = this.game.cameras.main.width;
// //   //     var height = this.game.cameras.main.height;
// //   //     var loadingText = this.game.make.text({
// //   //         x: width / 2,
// //   //         y: height / 2 - 50,
// //   //         text: 'Loading...',
// //   //         style: {
// //   //             font: '20px monospace',
// //   //             fill: '#ffffff'
// //   //         }
// //   //     });
// //   //     loadingText.setOrigin(0.5, 0.5);
      
// //   //     // var percentText = this.game.make.text({
// //   //     //     x: width / 2,
// //   //     //     y: height / 2 - 5,
// //   //     //     text: '0%',
// //   //     //     style: {
// //   //     //         font: '18px monospace',
// //   //     //         fill: '#ffffff'
// //   //     //     }
// //   //     // });
// //   //     // percentText.setOrigin(0.5, 0.5);
      
      
// //   //     this.game.load.on('progress', function (value) {
// //   //         // percentText.setText(parseInt(value * 100) + '%');
// //   //         progressBar.clear();
// //   //         progressBar.fillStyle(0xffffff, 1);
// //   //         progressBar.fillRect(250, 280, 300 * value, 30);
// //   //     });
      
      
// //   //     this.game.load.on('complete', function () {
// //   //         progressBar.destroy();
// //   //         progressBox.destroy();
// //   //         loadingText.destroy();
// //   //         // percentText.destroy();
// //   //     });
      
// //   //     // this.load.image('logo', 'zenvalogo.png');
// //   //     // for (var i = 0; i < 5000; i++) {
// //   //     //     this.load.image('logo'+i, 'zenvalogo.png');
// //   //     // }
//   }

//   create() {
//     this.game.state.start(STATES.BOOT);
//     // this.game.canvas.oncontextmenu = e => e.preventDefault(); // Disables right click

//     // this.game.sound.play(SFX.SOUNDTRACK, 0.8, true);
// //     // this.game.canvas.oncontextmenu = e => e.preventDefault(); // Disables right click
// //       // var logo = IMAGES.PIZZA;
// //       const player = new Phaser.Sprite(game, game.world.centerX, game.world.centerY - 20, IMAGES.PLAYER)
//   }
// }
