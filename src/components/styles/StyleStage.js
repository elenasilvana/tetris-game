import styled from 'styled-components';

export const StyledStage = styled.div`
    display: grid;
    /* is going to repeat what we're graving from props */ 
    grid-template-rows: repeat(
        ${props => props.height},
        /* css calculation to make the grid look good 
        and keep the aspect ratio of the grid cells*/
        calc(25vw / ${props => props.width})
    );
    /*this calculation is for keep perfect squares */
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px, solid #333;
    width: 100%
    max-width: 25vw;
    background: #111;
`