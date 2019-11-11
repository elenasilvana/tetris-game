import React, { useState } from "react";

import { createStage, checkCollision } from "../gameHelpers";

//styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

//custom hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

//Components

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

import { randomTetromino, TETROMINOS } from "../tetrominos";

const Tetris = () => {
  //create a drop time: actual speed that we're going to modify
  //depending on the level we're on
  const [dropTime, setDropTime] = useState(null);

  //game over, just to tell us if game is over or not
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log("re-render");
  //take direction as a parameter

  const movePlayer = dir => {
    //if we're not colliding with anything we'll do the move
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      //moving left or right
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    //reset everything
    setStage(createStage());
    //custom hook
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      //increase the Y value on 1 and make the
      //tetromino go down
      //custom hook
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      //game over
      if (player.pos.y < 1) {
        console.log("Game over!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  //callback function for check de keyboard presses
  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        //moving to the left
        movePlayer(-1);
      } else if (keyCode === 39) {
        //moving to the right
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
