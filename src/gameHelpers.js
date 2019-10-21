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
    
        new Array(STAGE_WIDTH).fill([0, 'clear'])
        )


