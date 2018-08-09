import { IMAGES, STATES, PALETTE } from 'constants';

import Gradient from 'objects/gradient';
import Button from 'objects/button';

export default class Pers extends Phaser.State {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }


  create() {
    const { game } = this;

    const background = new Gradient(game);
    game.add.existing(background);

    const player = new Phaser.Sprite(game, game.world.centerX, game.world.centerY - 20, IMAGES.PLAYER1)
    player.anchor.setTo(0.5, 0.5);
    const text = new Phaser.Text(game, game.world.centerX, game.world.centerY - 150, `Граф Чик кушает только брокколи`, { font: '15px Pixeled', fill: PALETTE.SHADOW, width: '50px' });
    text.anchor.setTo(0.5, 0.5);

    const button = new Button(game, this.handleClick); //Chick

    const objects = [
      button,
      player,
      text
    ];

    objects.forEach(game.add.existing, this);
  }

  handleClick() {
    this.game.state.start(STATES.MAIN2);
  }
 
}
