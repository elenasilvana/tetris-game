/* on react name the custom hooks with 'use'before the actual name */
import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

//create custom hook
export const useStage = (player, resetPlayer) => {

    //generate the clean board
    const [stage, setStage] = useState(createStage());
    
    useEffect(() => {
        const updateStage = prevStage => {
            //first flush the stage, clear it from the 
            //previous render
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell )),
            );
        };

        //then draw the tetromino
        player.tetromino.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0){
                    newStage[y + player.pos.y][x + player.pos.x] = [
                        value,
                        `${player.collided ? 'merged' : 'clear' }`,
                    ]
                }

            })
        })

        setStage(prev => updateStage(prev))

    }, [] /* <= dependency array */)

    return [stage, setStage];
}