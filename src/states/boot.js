import { IMAGES, SFX, STATES } from 'constants';

export default class Boot extends Phaser.State {
  preload() {
    const { load } = this.game;

    load.image(IMAGES.SUNSET, 'assets/img/back.png');
    load.image(IMAGES.GRADIENT, 'assets/img/grad.png');
    load.image(IMAGES.BUTTON, 'assets/img/button.png');
    load.image(IMAGES.FLOOR, 'assets/img/floor.png');
    load.image(IMAGES.HEART, 'assets/img/heart.png');
    load.image(IMAGES.LIFE, 'assets/img/life.png');
    load.image(IMAGES.LIFE2, 'assets/img/life2.png');
    load.image(IMAGES.TITLE, 'assets/img/title.png');

    load.spritesheet(IMAGES.BURGER, 'assets/img/burger.png', 48, 48);
    load.spritesheet(IMAGES.PLAYER, 'assets/img/player.png', 200, 200);
    load.spritesheet(IMAGES.PLAYER1, 'assets/img/player2.png', 200, 200);
    load.spritesheet(IMAGES.PIZZA, 'assets/img/pizza.png', 50, 48);
    load.spritesheet(IMAGES.EGGPLANT, 'assets/img/eggplant.png', 43, 48);

    load.audio(SFX.BITE, 'assets/audio/bite.mp3');
    load.audio(SFX.TRUMPET, 'assets/audio/trumpet.mp3'); 
    load.audio(SFX.SOUNDTRACK, 'assets/audio/isaak.mp3'); 
  }

  create() {
    this.game.state.start(STATES.TITLE);
    this.game.canvas.oncontextmenu = e => e.preventDefault(); // Disables right click

    this.game.sound.play(SFX.SOUNDTRACK, 0.8, true);
  }
}
