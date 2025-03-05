import {update as updateSnake, draw as 
    drawSnake, SNAKE_SPEED} from './snake.js';
    import {update as updateFood, draw as drawFood} from './food.js';
    import {outsideGrid} from './grid.js';

let lastRenderTime=0;
const SNAKE_SPEED=2;

function main(currentTime){
    window.requestAnimationFrame(main);
    const secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
    if(secondsSinceLastRender<1/SNAKE_SPEED) return;
    console.log('Render');
    lastRenderTime=currentTime;

    update();
    draw();
    
}
    
window.requestAnimationFrame(main);
const secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
if(secondsSinceLastRender<1/SNAKE_SPEED) return;

console.log('Render');
lastRenderTime=currentTime;
update();
draw();




function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML='';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}


function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}