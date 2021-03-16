class Game {
  constructor() {
  }
  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }
  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }
  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    character1 = new Character1(100, 400, 10, 20);
    character2 = new Character2(100, 400, 10, 20);

    ball = new Ball(Math.round(random(1, displayWidth)), 0);
    ball.lifetime = 100;

  }
  play() {
    form.hide();

    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      var display_position = 100;

      //index of the array
      var index = 0;
      var score1 = 0;
      var score2 = 0;

      gameState = 1;
      this.update(1);





      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        if (ball.sprite.isTouching(character1.sprite)) {
          score1 += 1
          ball.scale = 0;

        }
        if (ball.sprite.isTouching(character2.sprite)) {
          score2 += 1
          ball.scale = 0;
        }

        text("Player 1 score:" + score1, 10, 20);
        text("Player 2 score:" + score2, 10, 40);

        if (index === 1 && score1 === 5) {
          var name = getText(this.input);

          textSize(25);
          stroke(0);
          strokeWeight(8);

          text(name + "wins", displayWidth / 2, displayHeight / 2)
          gameState = 2;
          this.update(2);
          this.end();
        }
        if (index === 2 && score2 === 5) {
          var name = getText(this.input);

          textSize(25);
          stroke(0);
          strokeWeight(8);

          text(name + "wins", displayWidth / 2, displayHeight / 2)
          gameState = 2;
          this.update(2);
          this.end();
        }
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, display_position)
      }

    }

    if (keyIsDown(LEFT_ARROW) && player.index !== null) {
      player.position.x = player.position.x - 10;
      player.update();
    }
    if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
      player.position.x = player.position.x + 10;
      player.update();
    }
    drawSprites()
  }
  end() {
    if (gameState === 2) {
      console.log("GAME OVER :")
    }
  }


}