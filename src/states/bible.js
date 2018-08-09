import { IMAGES, STATES, PALETTE } from 'constants';

import Gradient from 'objects/gradient';
import Button from 'objects/button';
// import Instructions from 'objects/instructions';
// import Heading from 'objects/heading';

export default class Pers extends Phaser.State {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }


  create() {
    const { game } = this;

    const background = new Gradient(game);
    game.add.existing(background);

    // Static img.
    const player = new Phaser.Sprite(game, game.world.centerX, game.world.centerY - 20, IMAGES.PLAYER)
    player.anchor.setTo(0.5, 0.5);
    const text = new Phaser.Text(game, game.world.centerX, game.world.centerY - 150, `Граф БиблеТум очень любит кушать всё вредное`, { font: '25px Pixeled', fill: PALETTE.SHADOW });
    text.anchor.setTo(0.5, 0.5);

    // const button = new Button(game, this.handleClick);
    const button = new Button(game, this.handleClick); //Chick
  
    // button.alpha = 0.5;
    // button2.alpha = 1;
   


    const objects = [
      button,
      player,
      text
    ];

    objects.forEach(game.add.existing, this);
  }

  handleClick() {
    this.game.state.start(STATES.MAIN);
  }
 
}
