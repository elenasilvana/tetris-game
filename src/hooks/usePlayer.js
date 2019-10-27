import { useState } from 'react';
import { randomTetormino } from '../tetrominos';

//important to name use because is a custom hook
export const usePlayer = () => {
    //create an state that return an array with two items
    
    const [player, setPlayer] = useState({
        //set an initial state for a player
        pos: { x: 0, y: 0},
        tetromino: randomTetormino().shape,
        collided: false
    });
    
    return [player];
}