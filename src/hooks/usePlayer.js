import { useState, useCallback } from "react";
import { randomTetromino, TETROMINOS } from "../tetrominos";
import { STAGE_WIDTH } from "../gameHelpers";

//important to name use because is a custom hook
export const usePlayer = () => {
  //create an state that return an array with two items

  const [player, setPlayer] = useState({
    //set an initial state for a player
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    //set state because we're moving the player
    // with an update function
    setPlayer(prev => ({
      ...prev,
      pos: {
        //adding the values to the state
        x: (prev.pos.x += x),
        y: (prev.pos.y += y)
      },
      collided
    }));
  };

  //useCallback is a hook, we will use to prevent an infinite loop
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: {
        x: STAGE_WIDTH / 2 - 2,
        y: 0
      },
      tetromino: randomTetromino().shape,
      collided: false
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};
