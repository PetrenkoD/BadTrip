import { IMAGES, PALETTE, SFX } from 'constants';

export default class Player2 extends Phaser.Button {
  constructor(game, onClick) {
    const { world } = game;

    const fn = () => {
      game.sound.play(SFX.TWINKLE);
      onClick();
    };
    
    super(game, world.centerX + 100, game.height - 300, IMAGES.PLAYER, fn, null, 1, 1, 0);
    this.anchor.setTo(0.5, 0);
  }
}
