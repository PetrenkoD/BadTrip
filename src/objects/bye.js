import { CANVAS, IMAGES } from 'constants';

export default class BYE extends Phaser.Image {
  constructor(game) {
    super(game, 350, 100, IMAGES.BYE);

    const scale = 0.5;

    this.scale.setTo(scale);
  }
}
