import { SFX, STATES } from 'constants';

import Background from 'objects/background';
import Food from 'objects/food';
import Floor from 'objects/floor';
import Player from 'objects/player2';
// import LikeCounter from 'objects/like-counter';
import LifeCounter2 from 'objects/life-counter2';

export default class Main extends Phaser.State {
  constructor() {
    super();

    this.endGame = this.endGame.bind(this);
    this.destroyFood = this.destroyFood.bind(this);
  }

  create() {
    const { game } = this;

    this.game.score.reset();

    const background = new Background(game);
    game.add.existing(background);

    this.floor = new Floor(game);
    game.add.existing(this.floor);

    this.player = new Player(game);
    game.add.existing(this.player);

    const counters = [
      new LifeCounter2(game)
    ];

    counters.forEach(counter => game.add.existing(counter));

    this.foodGroup = game.add.group();

    game.physics.arcade.collide(this.foodGroup);

    game.time.events.repeat(Phaser.Timer.SECOND * 1.5, Infinity, this.createFood, this);
    this.game.world.setBounds(0, 0, 600, 600);
  };

  endGame() {
    const { state } = this.game;
    state.start(STATES.END2);
  }

  createFood() {
    const food = new Food(this.game);
    this.foodGroup.add(food);
  }

  destroyFood(floor, food) {
    this.foodGroup.remove(food, true);
  }

  update() {
    const { physics, score } = this.game;

    physics.arcade.collide(this.floor, this.player);

    physics.arcade.collide(this.foodGroup, this.floor, this.destroyFood);

    physics.arcade.overlap(this.player, this.foodGroup, (player, food) => {
      this.foodGroup.remove(food, true);
      score.lives += food.healthy ? + 1 : this.endGame();
      score.counter += food.healthy ? + 1 : + 0;
      if (score.lives >= 10 ) {
        this.game.time.events.repeat(Phaser.Timer.SECOND * 0.5, Infinity, this.createFood, this);
      } 
      this.game.sound.play(food.healthy ? SFX.TRUMPET : SFX.BITE);
    }, (player, food) => !food.destroying);
  }
}
