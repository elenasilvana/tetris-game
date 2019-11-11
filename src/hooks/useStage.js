/* on react name the custom hooks with 'use'before the actual name */
import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

//create custom hook
export const useStage = (player, resetPlayer) => {
  //generate the clean board
  const [stage, setStage] = useState(createStage());

  /* without the useCallback on usePlayer this would go on an infinit loop */
  useEffect(
    () => {
      const updateStage = prevStage => {
        //first flush the stage, clear it from the
        //previous render
        const newStage = prevStage.map(row =>
          row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
        );
        // };

        //then draw the tetromino
        player.tetromino.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value !== 0) {
              newStage[y + player.pos.y][x + player.pos.x] = [
                value /* is the tetromino */,
                `${player.collided ? "merged" : "clear"}`
              ];
            }
          });
        });

        //check if we collided
        if (player.collided) {
          resetPlayer();
        }

        return newStage;
      };

      setStage(prev => updateStage(prev));
    },
    [
      player,
      resetPlayer
      /*  
      player.collided,
      player.pos.x,
      player.pos.y,
      player.tetromino*/
    ] /* <= dependency array needed for the use effect */
  );

  return [stage, setStage];
};
