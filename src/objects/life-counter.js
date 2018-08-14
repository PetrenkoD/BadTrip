import { IMAGES, PALETTE } from 'constants';

export default class LifeCounter extends Phaser.Text {
  constructor(game) {
    const floorImage = game.cache.getImage(IMAGES.FLOOR);
    const lifeImage = game.cache.getImage(IMAGES.LIFE);
    const margin = (floorImage.height - lifeImage.height) / 2;
    const x = 930 + margin * 2;
    const y = 50;

    super(game, x, y, game.score.lives, { font: '18px Pixeled', fill: PALETTE.HIGHLIGHT })
    this.anchor.setTo(0, 1); 
  }

  update() {
    this.setText(this.game.score.lives);
  }
}
