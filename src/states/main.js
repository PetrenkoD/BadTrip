import { SFX, STATES } from 'constants';

import Background from 'objects/background';
import LEFTMENU from 'objects/left-menu';
import Food from 'objects/food';
import Food50 from 'objects/food50';
import Floor from 'objects/floor';
import Player from 'objects/player';
import LifeCounter from 'objects/life-counter';

export default class Main extends Phaser.State {
  constructor() {
    super();

    this.endGame = this.endGame.bind(this);
    this.destroyFood = this.destroyFood.bind(this);
    this.destroyFood50 = this.destroyFood50.bind(this);
  }

  create() {
    const { game } = this;

    this.game.score.reset();

    const background = new Background(game);
    game.add.existing(background);
    const leftmenu = new LEFTMENU(game);
    game.add.existing(leftmenu);

    this.floor = new Floor(game);
    game.add.existing(this.floor);

    this.player = new Player(game);
    game.add.existing(this.player);

    const counters = [
      new LifeCounter(game)
    ];

    counters.forEach(counter => game.add.existing(counter));

    this.foodGroup = game.add.group();
    this.foodGroup50 = game.add.group();

    game.physics.arcade.collide(this.foodGroup);
    game.physics.arcade.collide(this.foodGroup50);
    game.time.events.repeat(Phaser.Timer.SECOND * 1.7, Infinity, this.createFood, this);
    game.time.events.repeat(Phaser.Timer.SECOND * 2.3, Infinity, this.createFood50, this);
    this.game.world.setBounds(0, 0, 990, 600); //игровое поле
    // this.player.animations.play('walk');
    
  //   player.animations.add('right', [5, 6, 7, 8], 10, true);
  };

  endGame() {
    const { state } = this.game;
    state.start(STATES.END);
  }

  createFood() {
    const food = new Food(this.game);
    this.foodGroup.add(food);
  }
  createFood50() {
    const food50 = new Food50(this.game);
    this.foodGroup50.add(food50);
  }
  destroyFood(floor, food) {
    this.foodGroup.remove(food, true);
  }
  destroyFood50(floor, food50) {
    this.foodGroup50.remove(food50, true);
  }
  // animPlay(player) {
  //   player.animations.add('left', [0, 1, 2, 3], 10, true);
  //   player.animations.add('right', [5, 6, 7, 8], 10, true);
  // }

  update() {
    
    const { physics, score } = this.game;
    // player.animations.add('left', [0, 1, 2, 3], 10, true);
    // player.animations.add('right', [5, 6, 7, 8], 10, true);
    // this.player.animations.play('left');
    // this.player.animations.play('right');

    physics.arcade.collide(this.floor, this.player, this.animPlay);

    physics.arcade.collide(this.foodGroup, this.floor, this.destroyFood);
    physics.arcade.collide(this.foodGroup50, this.floor, this.destroyFood50);

    physics.arcade.overlap(this.player, this.foodGroup, (player, food) => {
      this.foodGroup.remove(food, true);
      score.lives += food.healthy ? this.endGame() : + 10;
      score.counter += food.healthy ? + 0 : + 10;

      if (score.lives >= 500 ) {
        this.game.time.events.repeat(Phaser.Timer.SECOND * 1.4, Infinity, this.createFood, this);
      } 

      this.game.sound.play(food.healthy ? SFX.TRUMPET : SFX.BITE);
    }, (player, food) => !food.destroying);

    physics.arcade.overlap(this.player, this.foodGroup50, (player, food50) => {

      this.foodGroup50.remove(food50, true);
      score.lives += food50.healthy50 ? + 50 : - 10;
      score.counter += food50.healthy50 ? + 50 : - 10;
      
        // this.game.time.events.repeat(Phaser.Timer.SECOND * 2.3, Infinity, this.createFood50, this);
   
      this.game.sound.play(food50.healthy50 ? SFX.TRUMPET : SFX.BITE);
    }, (player, food50) => !food50.destroying);

    if (score.counter < 0) {
      this.endGame();
    }
  }
}
