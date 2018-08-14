import { CANVAS, IMAGES } from 'constants';

export default class LOGOLADY extends Phaser.Image {
  constructor(game) {
    super(game, 50, 50, IMAGES.LOGOLADY);

    const scale = 0.4;

    this.scale.setTo(scale);
  }
}
