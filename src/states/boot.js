import { IMAGES, SFX, STATES } from 'constants';

export default class Boot extends Phaser.State {
  preload() {
    const { load } = this.game;

    load.image(IMAGES.SUNSET, 'assets/img/back.jpg');
    load.image(IMAGES.GRADIENT, 'assets/img/grad.png');
    load.image(IMAGES.BUTTON, 'assets/img/button.png');
    load.image(IMAGES.FLOOR, 'assets/img/floor.png');
    load.image(IMAGES.HEART, 'assets/img/heart.png');
    load.image(IMAGES.LIFE, 'assets/img/life.png');
    load.image(IMAGES.LIFE2, 'assets/img/life2.png');
    load.image(IMAGES.TITLE, 'assets/img/title.png');
    load.image(IMAGES.LOGO, 'assets/img/badtrip_logo.png');
    load.image(IMAGES.BYE, 'assets/img/byeguy.png');
    load.image(IMAGES.LEFTMENU, 'assets/img/left_menu.png');
    load.image(IMAGES.LADYMOUTH, 'assets/img/mouth-2.png');
    load.image(IMAGES.LOGOLADY, 'assets/img/lady_logo_bg.png');
    load.image(IMAGES.LOVI, 'assets/img/lovi1.png');
    load.image(IMAGES.NELOVI, 'assets/img/nelovi1.png');
    load.image(IMAGES.SMETR, 'assets/img/topovoe.png');
    load.image(IMAGES.NOO, 'assets/img/no.png');

    load.spritesheet(IMAGES.BURGER, 'assets/img/2.png', 30, 30);  
    load.spritesheet(IMAGES.PIR5, 'assets/img/7.png', 30, 28);
    load.spritesheet(IMAGES.PIR6, 'assets/img/8.png', 30, 41);
    load.spritesheet(IMAGES.PIR7, 'assets/img/10.png', 30, 46);
    load.spritesheet(IMAGES.PLAYER, 'assets/img/player66.png', 90, 90);
    // load.spritesheet(IMAGES.PLAYER, 'assets/img/player.png', 90, 111);
    load.spritesheet(IMAGES.PLAYER1, 'assets/img/player2.png', 200, 200);
    load.spritesheet(IMAGES.PIZZA, 'assets/img/3.png', 30, 40);
    load.spritesheet(IMAGES.EGGPLANT, 'assets/img/11.png', 30, 26);
    load.spritesheet(IMAGES.PLAY, 'assets/img/sprite_buttons2.png', 350, 77);
    load.spritesheet(IMAGES.ZAN, 'assets/img/sprite_zan1.png', 347, 77);

    load.audio(SFX.BITE, 'assets/audio/bite.mp3');
    load.audio(SFX.TRUMPET, 'assets/audio/trumpet.mp3'); 
    load.audio(SFX.SOUNDTRACK, 'assets/audio/fox.mp3'); 
  }

  create() {
    this.game.state.start(STATES.TITLE);
    this.game.canvas.oncontextmenu = e => e.preventDefault(); // Disables right click

    this.game.sound.play(SFX.SOUNDTRACK, 0.8, true);
  }
}
