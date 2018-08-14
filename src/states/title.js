import { IMAGES, STATES,PALETTE } from 'constants';

import Button from 'objects/button';
import Background from 'objects/background';
import LOGO from 'objects/logo';

export default class Title extends Phaser.State {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  create() {
    const { game } = this;

   const logo = new LOGO(game);
  //  game.add.existing(background);
   // player.anchor.setTo(0.5, 0.5);

    const background = new Background(game);
    game.add.existing(background);

    const button = new Button(game, this.handleClick);
    button.alpha = 0.5;

    const objects = [
      button,
      logo
    ];

    objects.forEach(game.add.existing, this);
  }

  handleClick() {
    this.game.state.start(STATES.CHOOSE);
  }
}
