import 'pixi';
import 'p2';
import 'phaser';

import { CANVAS, STATES } from 'constants';

import Boot from 'states/boot';
import Preload from 'states/preload';
import Choose from 'states/choose';
import Main from 'states/main';
// import Main2 from 'states/main2';
import End from 'states/end';
// import End2 from 'states/end2';
import Title from 'states/title';
// import Chick from 'states/chick';
import Bible from 'states/bible';

import score from 'score';

const config = {
  width: CANVAS.WIDTH,
  height: CANVAS.HEIGHT,
  renderer: Phaser.AUTO,
  parent: '',
  state: null,
  transparent: false,
  antialias: false,
  physicsConfig: { arcade: true },
};

const game = new Phaser.Game(config);

game.score = score;

game.state.add(STATES.BOOT, Boot);
game.state.add(STATES.PRELOAD, Preload);
game.state.add(STATES.TITLE, Title);
game.state.add(STATES.CHOOSE, Choose);
// game.state.add(STATES.CHICK, Chick);
game.state.add(STATES.BIBLE, Bible);
game.state.add(STATES.MAIN, Main);
// game.state.add(STATES.MAIN2, Main2);
game.state.add(STATES.END, End);
// game.state.add(STATES.END2, End2);


game.state.start(STATES.BOOT);
