import { CANVAS, IMAGES } from 'constants';

export default class LEFTMENU extends Phaser.Image {
  constructor(game) {
    super(game, 0, 0, IMAGES.LEFTMENU);

    const scale = 0.5;

    this.scale.setTo(scale);
  }
}
