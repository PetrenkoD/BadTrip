import { CANVAS, IMAGES } from 'constants';

export default class NO extends Phaser.Image {
  constructor(game) {
    super(game, 650, 350, IMAGES.NOO);

    const scale = 0.7;

    this.scale.setTo(scale);
  }
}
