import { IMAGES, STATES,PALETTE } from 'constants';

import Button from 'objects/button';

export default class Title extends Phaser.State {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }


  create() {
    const { game } = this;
    const text = new Phaser.Text(game, game.world.centerX, game.world.centerY, `BADTRIP`.toUpperCase(), { font: '38px Pixeled', fill: PALETTE.SECONDARY });
    text.anchor.setTo(0.5, 0.5);

    const button = new Button(game, this.handleClick);
    button.alpha = 0.5;
   


    const objects = [
      button,
      text 
    ];

    objects.forEach(game.add.existing, this);
  }

  handleClick() {
    this.game.state.start(STATES.CHOOSE);
  }
}
