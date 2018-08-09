import { CANVAS, IMAGES } from 'constants';

export default class Gradient extends Phaser.Image {
  constructor(game) {
    super(game, 0, 100, IMAGES.GRADIENT);
  }
}
