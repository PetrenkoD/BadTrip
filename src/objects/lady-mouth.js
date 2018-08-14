import { CANVAS, IMAGES } from 'constants';

export default class LADYMOUTH extends Phaser.Image {
  constructor(game) {
    super(game, 100, 250, IMAGES.LADYMOUTH);

    const scale = 1;

    this.scale.setTo(scale);
  }
}
