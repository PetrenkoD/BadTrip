import { CANVAS, IMAGES } from 'constants';

export default class TOPOVOE extends Phaser.Image {
  constructor(game) {
    super(game, 650, 250, IMAGES.SMETR);

    const scale = 0.7;

    this.scale.setTo(scale);
  }
}
