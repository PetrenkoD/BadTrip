import { IMAGES, PALETTE, SFX } from 'constants';

export default class Buttonlady extends Phaser.Button {
  constructor(game, onClick) {
    const { world } = game;

    const fn = () => {
      game.sound.play(SFX.TWINKLE);
      onClick();
    };

    super(game, world.centerX + 300, game.height - 100, IMAGES.PLAY, fn, null, 1, 0);
    this.anchor.setTo(0.5, 0);
  }
}
