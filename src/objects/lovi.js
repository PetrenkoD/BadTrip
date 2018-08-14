import { CANVAS, IMAGES } from 'constants';

export default class LOVI extends Phaser.Image {
  constructor(game) {
    super(game, 650, 50, IMAGES.LOVI);

    const scale = 0.7;

    this.scale.setTo(scale);
  }
}
