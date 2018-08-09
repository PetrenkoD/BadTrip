import { IMAGES, PALETTE, SFX } from 'constants';

export default class Button extends Phaser.Button {
  constructor(game, onClick) {
    const { world } = game;

    const fn = () => {
      game.sound.play(SFX.TWINKLE);
      onClick();
    };

    super(game, world.centerX, game.height - 150, IMAGES.BUTTON, fn, null, 1, 1, 0);
    this.anchor.setTo(0.5, 0);
  }
}