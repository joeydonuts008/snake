import { expandSnake, onSnake } from "./snake.js";

let food = { x: 10, y: 4 };
const EXPANSION_RATE = 1;

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}



export function draw(gameBoard){
    const foodElement = document.createElement('div');
    snakeElement.style.gridRowStart = food.y;
    snakeElement.style.gridColumnStart = food.x;
    snakeElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}