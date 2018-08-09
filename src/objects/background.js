import { CANVAS, IMAGES } from 'constants';

export default class Background extends Phaser.Image {
  constructor(game) {
    super(game, 0, 100, IMAGES.SUNSET);

    // const scale = CANVAS.WIDTH / this.width;

    // this.scale.setTo(scale);
  }
}
