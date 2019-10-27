import React, { useState } from 'react';

import { createStage } from '../gameHelpers';

//styled components
import {StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

//custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

//Components

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import { randomTetromino, TETROMINOS } from '../tetrominos';

const Tetris = () => {

    //create a drop time: actual speed that we're going to modify
    //depending on the level we're on
    const [dropTime, setDropTime] = useState(null);

    //game over, just to tell us if game is over or not
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');
    //take direction as a parameter
    const movePlayer = dir => {

    }

    const startGame = () => {

    }

    const drop = () => {

    }

    const dropPlayer = () => {

    }

    //callback function for check de keyboard presses
    const move = ({ keyCode }) => {

    }

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={stage}/>
            <aside>
                {
                    gameOver ? ( 
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : ( 
                    <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    )
                }
                <StartButton />
            </aside> 
            </StyledTetris>
        </StyledTetrisWrapper>

    );
}

export default Tetris;