import { IMAGES } from 'constants';

const walkingVelocity = 800;

export default class Floor extends Phaser.Sprite {
  constructor(game) {
    const image = game.cache.getImage(IMAGES.FLOOR);
    const x = game.world.left;
    const y = game.world.bottom - image.height; // half because of anchor

    super(game, x, y, IMAGES.FLOOR);

    game.physics.arcade.enable(this);

    this.body.immovable = true;
  }
}
