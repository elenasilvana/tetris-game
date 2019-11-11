//here we're going to create the stage

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

//create a multi dimensional array that represent the grid
//rows and columns

export const createStage = () =>
  //we're creating new array from an array we create with the height
  Array.from(Array(STAGE_HEIGHT), () =>
    //with each row create a new array with our cells
    //and fill .fill() with an array
    //0 = clean cell
    //'clear' = for now no tetrominos has collided in this cell

    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

/* with this collision detection we can detect if we're outside a stage
  and also if we collide with any of the tetrominos.  
  We're looping through the tetromino that we have in play
  and check if any of the cells inside the tetromino collide with 
  any of the cells collide with the play field  */

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      /*tetromino we're looping through */
      //1. check that we're on an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. check that our move is inside the game areas height (y)
          //we shouldn't go trhough the bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          //3. Check that our move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //4. check that the cell we're moving to isn't set to clear
          //because if it is clear we're not colliding
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
