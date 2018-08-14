// import { IMAGES, STATES, PALETTE } from 'constants';

// import Player1 from 'objects/button-menu';
// import Player2 from 'objects/button-menu-pers2';
// import Gradient from 'objects/gradient';

// export default class Pers extends Phaser.State {
//   constructor() {
//     super();
//     this.handleClick = this.handleClick.bind(this);
//     this.handleClicks = this.handleClicks.bind(this);
//   }


//   create() {
//     const { game } = this;

//     const background = new Gradient(game);
//     game.add.existing(background);

//     const player = new Phaser.Sprite(game, game.world.centerX, game.world.centerY - 20, IMAGES.PLAYER)
//     player.anchor.setTo(0.5, 0.5);
//     const text = new Phaser.Text(game, game.world.centerX, game.world.centerY - 150, `Выберите персонажа`, { font: '25px Pixeled', fill: PALETTE.SHADOW });
//     text.anchor.setTo(0.5, 0.5);

//     const player1 = new Player1(game, this.handleClicks); //Chick
//     const player2 = new Player2(game, this.handleClick); //Bible
    
//     const objects = [
//       text,
//       player2,
//       player1
//     ];

//     objects.forEach(game.add.existing, this);
//   }

//   handleClick() {
//     this.game.state.start(STATES.BIBLE);
//   }
//   handleClicks() {
//     this.game.state.start(STATES.CHICK);
//   }
// }

import { ASSETS, IMAGES, PALETTE, STATES } from 'constants';

// import Button from 'objects/button';
import Buttonlady from 'objects/buttonlady';
import Background from 'objects/background';
import LADYMOUTH from 'objects/lady-mouth';
import LOGOLADY from 'objects/logo-lady';
import LOVI from 'objects/lovi';
import NELOVI from 'objects/nelovi';
import TOPOVOE from 'objects/topovoe';
import NOO from 'objects/no';

// import Heading from 'objects/heading';
// import Instructions from 'objects/instructions';

export default class CHOOSE extends Phaser.State {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    // this.handleClicks = this.handleClicks.bind(this);
  }

  create() {

    const { game } = this;

    const background = new Background(game);
    game.add.existing(background);

    const Logolady = new LOGOLADY(game);
    game.add.existing(Logolady);

    const lovi = new LOVI(game);
    game.add.existing(lovi);
    const nelovi = new NELOVI(game);
    game.add.existing(nelovi);
    const topovoe = new TOPOVOE(game);
    game.add.existing(topovoe);
    const no = new NOO(game);
    game.add.existing(no);

    const Ladymouth = new LADYMOUTH(game);
    game.add.existing(Ladymouth);
  
  

    // const text2 = new Phaser.Text(game, game.world.centerX - 7, game.world.centerY + 50 , `Теперь ты можешь начать`, { font: '20px Pixeled', fill: PALETTE.HIGHLIGHT });
    // text.anchor.setTo(0.5, 0.5);

    const objects = [
      // text2,
      new Buttonlady(game, this.handleClick)
    ];

    objects.forEach(game.add.existing, this);
  }

  handleClick() {
    this.game.state.start(STATES.MAIN);
  }
  // handleClicks() {
  //   this.game.state.start(STATES.MAIN);
  // }
}
