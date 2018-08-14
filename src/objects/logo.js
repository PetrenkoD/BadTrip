import { CANVAS, IMAGES } from 'constants';

export default class LOGO extends Phaser.Image {
  constructor(game) {
    super(game, 310, 70, IMAGES.LOGO);

    const scale = 0.7;

    this.scale.setTo(scale);
  }
}
