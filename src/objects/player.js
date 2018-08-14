import { IMAGES, PALETTE, SFX } from 'constants';

const walkingVelocity = 600;//скорость персонажа

export default class Player extends Phaser.Sprite {
  constructor(game) {
    const image = game.cache.getImage(IMAGES.PLAYER);
    const floorImage = game.cache.getImage(IMAGES.FLOOR);
    const x = game.world.centerX;
    const y = game.world.bottom - image.height * 0.5; // half because of anchor

    super(game, x, y, IMAGES.PLAYER);

    game.physics.arcade.enable(this);

    this.anchor.setTo(0.5, 0.5);

    this.animations.add('left', [0,1,2,3,4,5], 30);
    this.animations.add('right', [0,1,2,3,4,5], 30);

    this.body.gravity.y = 2000;
    this.body.collideWorldBounds = true;

    this.keys = {
      ...game.input.keyboard.createCursorKeys(),
      space: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
    };
    // this.animations.add('left', [0, 1, 2, 3, 4, 5], 10);
    // this.animations.add('right', [0, 1, 2, 3, 4, 5], 10);
  }
  updateMovement() {
    const { left, right, up } = this.keys;

    if (up.isDown && this.body.onFloor())
    { 
        this.body.velocity.y = -650;
        return;
    }
    if (left.isDown) {
      this.body.velocity.x = -(walkingVelocity);
      this.play('left');
      // this.animations.play('left');
      // this.animations.add('walk', [0, 1, 2, 3, 4, 5], 10);
      this.scale.x = 1;
      return;
    }
    if (right.isDown) {
      this.body.velocity.x = walkingVelocity;
      this.play('right');
      // this.body.add('walk', [0, 1, 2, 3, 4, 5], 10);
      // this.animations.play('right');
      this.scale.x = -1;
      return;
    }

    this.body.velocity.x = 0;
  }

  update() {
    this.updateMovement();
  }
}
