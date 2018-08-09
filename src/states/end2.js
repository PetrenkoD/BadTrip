import { ASSETS, IMAGES, PALETTE, STATES } from 'constants';

import Button from 'objects/button';
import Button2 from 'objects/button2';
// import Heading from 'objects/heading';
// import Instructions from 'objects/instructions';

export default class End extends Phaser.State {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClicks = this.handleClicks.bind(this);
  }

  create() {
    const { game } = this;
    const textmenu = new Phaser.Text(game, game.world.centerX, game.world.centerY - 75, `Вы можете выбрать другого персонажа`.toUpperCase(), { font: '18px Pixeled', fill: PALETTE.SECONDARY });
    textmenu.anchor.setTo(0.5, 0.5);
    const textgame = new Phaser.Text(game, game.world.centerX, game.world.centerY + 215, `Начать заново`.toUpperCase(), { font: '18px Pixeled', fill: PALETTE.SECONDARY });
    textgame.anchor.setTo(0.5, 0.5);

    const text = new Phaser.Text(game, game.world.centerX, game.world.centerY - 200, `Вы набрали ${game.score.counter}`.toUpperCase(), { font: '30px Pixeled', fill: PALETTE.SHADOW });
    text.anchor.setTo(0.5, 0.5);

    const objects = [
      text,
      textmenu,
      textgame,
      new Button(game, this.handleClick),
      new Button2(game, this.handleClicks )
    ];

    objects.forEach(game.add.existing, this);
  }

  handleClick() {
    this.game.state.start(STATES.MAIN2);
  }
  handleClicks() {
    this.game.state.start(STATES.CHOOSE);
  }
}
