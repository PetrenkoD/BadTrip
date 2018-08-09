import { IMAGES } from 'constants';

export default class Food extends Phaser.Sprite {
  constructor(game) {
    const randomNumber = game.rnd.between(0, 3);
    const healthy = randomNumber === 3;
    const sprite = healthy ? IMAGES.EGGPLANT : randomNumber % 2 === 0 ? IMAGES.PIZZA : IMAGES.BURGER;
    const image = game.cache.getImage(sprite);

    const x = game.rnd.between(0, game.width - image.width)
    const y = -image.height

    super(game, x, y, sprite);
    this.healthy = healthy;

    game.physics.arcade.enable(this);

    this.body.gravity.y = 130; //скорость падения
    if (game.score.lives >= 5 ) {
      this.body.gravity.y = 430;
    }
   
    if (game.score.lives >= 10 ) {
      this.body.gravity.y = 1000; //скорость падения
    };
    this.animations.add('destroy', [0, 1, 2, 3, 4, 5], 1);
  }
}
