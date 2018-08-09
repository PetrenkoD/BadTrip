import { IMAGES, PALETTE } from 'constants';

export default class LifeCounter extends Phaser.Text {
  constructor(game) {
    const floorImage = game.cache.getImage(IMAGES.FLOOR);
    const lifeImage = game.cache.getImage(IMAGES.LIFE);
    const margin = (floorImage.height - lifeImage.height) / 2;
    const x = 0 + lifeImage.width + margin * 3;
    const y = game.height;

    super(game, x, y, game.score.lives, { font: '12px Pixeled', fill: PALETTE.HIGHLIGHT })
    this.anchor.setTo(0, 1);

    const lifeX = 0 + margin;

    this.life = new Phaser.Sprite(game, lifeX, y - margin, IMAGES.LIFE)
    this.life.anchor.setTo(0, 1);
    this.game.add.existing(this.life);
  }

  update() {
    this.setText(this.game.score.lives);
  }
}
