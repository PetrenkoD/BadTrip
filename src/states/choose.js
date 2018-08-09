import { IMAGES, STATES, PALETTE } from 'constants';

import Player1 from 'objects/button-menu';
import Player2 from 'objects/button-menu-pers2';
import Gradient from 'objects/gradient';

export default class Pers extends Phaser.State {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClicks = this.handleClicks.bind(this);
  }


  create() {
    const { game } = this;

    const background = new Gradient(game);
    game.add.existing(background);

    const player = new Phaser.Sprite(game, game.world.centerX, game.world.centerY - 20, IMAGES.PLAYER)
    player.anchor.setTo(0.5, 0.5);
    const text = new Phaser.Text(game, game.world.centerX, game.world.centerY - 150, `Выберите персонажа`, { font: '25px Pixeled', fill: PALETTE.SHADOW });
    text.anchor.setTo(0.5, 0.5);

    const player1 = new Player1(game, this.handleClicks); //Chick
    const player2 = new Player2(game, this.handleClick); //Bible
    
    const objects = [
      text,
      player2,
      player1
    ];

    objects.forEach(game.add.existing, this);
  }

  handleClick() {
    this.game.state.start(STATES.BIBLE);
  }
  handleClicks() {
    this.game.state.start(STATES.CHICK);
  }
}
