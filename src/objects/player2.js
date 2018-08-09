import { IMAGES, PALETTE, SFX } from 'constants';

const walkingVelocity = 400;

export default class Player extends Phaser.Sprite {
  constructor(game) {
    const image = game.cache.getImage(IMAGES.PLAYER1);
    const floorImage = game.cache.getImage(IMAGES.FLOOR);
    const x = game.world.centerX;
    const jumpTimer = 0;
    const y = game.world.bottom - image.height * 0.5 - floorImage.height; // half because of anchor

    super(game, x, y, IMAGES.PLAYER1);

    game.physics.arcade.enable(this);

    this.anchor.setTo(0.5, 0.5);

    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;

    this.keys = {
      ...game.input.keyboard.createCursorKeys(),
      space: game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
    };
  }

  updateMovement() {
    const { left, right } = this.keys;

    // if (this.keys.space.isDown && this.body.onFloor() && game.time.now > jumpTimer)
    // {
    //     this.body.velocity.y = -250;
    //     jumpTimer = game.time.now + 750;
    // }
    // if ((this.keys.space.isDown) ) {
    //   this.body.velocity.y = -100;
    //   this.scale.y = 1;
    //   // this.timerText.y = this.y;
    //   return;
    // }

    if (left.isDown) {
      this.body.velocity.x = -(walkingVelocity);
      this.scale.x = 1;
      return;
    }
    if (right.isDown) {
      this.body.velocity.x = walkingVelocity;
      this.scale.x = -1;
      return;
    }

    this.body.velocity.x = 0;
    this.body.velocity.y = 300;
  }

  update() {
    this.updateMovement();
  }
}
