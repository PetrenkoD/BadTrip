import { ASSETS, IMAGES, PALETTE, STATES } from 'constants';

// import Button from 'objects/button';
import Buttonzan from 'objects/button2';
import Background from 'objects/background';
import BYE from 'objects/bye';
// import Heading from 'objects/heading';
// import Instructions from 'objects/instructions';

export default class End extends Phaser.State {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    // this.handleClicks = this.handleClicks.bind(this);
  }

  create() {

    const { game } = this;
    const background = new Background(game);
    game.add.existing(background);


    const bye = new BYE(game);
  

    const text = new Phaser.Text(game, game.world.centerX - 7, game.world.centerY + 40 , `Вы набрали ${game.score.counter}`.toUpperCase(), { font: '30px Pixeled', fill: PALETTE.SHADOW });
    text.anchor.setTo(0.5, 0.5);

    // const text2 = new Phaser.Text(game, game.world.centerX - 7, game.world.centerY + 50 , `Теперь ты можешь начать`, { font: '20px Pixeled', fill: PALETTE.HIGHLIGHT });
    // text.anchor.setTo(0.5, 0.5);

    const objects = [
      text,
      // text2,
      new Buttonzan(game, this.handleClick),
      bye
    ];

    objects.forEach(game.add.existing, this);
  }

  handleClick() {
    this.game.state.start(STATES.MAIN);
  }
  // handleClicks() {
  //   this.game.state.start(STATES.MAIN);
  // }
}
