let blueScore = 0;
let redScore = 0;
let isGameOver = false

const inputValue = document.querySelector('#scoreLevel');




let limit = 5;

const redHead = document.querySelector('.firstPlayerScore');
const blueHead = document.querySelector('.secondPlayerScore');



const btnRed = document.querySelector('.redPlus');



const btnBlue = document.querySelector('.bluePlus');


btnRed.addEventListener('click', function(){
    

    if(redScore < limit && isGameOver === false){
        redScore++;
        redHead.textContent = redScore;
    }
    else if (redScore === limit && isGameOver === false){
        redHead.textContent = redScore;
        redHead.classList.add("Green");
        blueHead.classList.add("Red");
        isGameOver = true;
    }

})



btnBlue.addEventListener('click', function(){
    

    if(blueScore < limit && isGameOver === false){
        blueScore++;
        blueHead.textContent = blueScore;
    }
    else if (blueScore === limit && isGameOver === false){
        blueHead.textContent = blueScore;
        blueHead.classList.add("Green");
        redHead.classList.add("Red");
        isGameOver = true;
    }
})

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', function(){
    
    if(blueScore === limit){
        blueHead.classList.remove('Green');
        redHead.classList.remove('Red');
    }
    else if(redScore === limit)  {
        blueHead.classList.remove('Red');
        redHead.classList.remove('Green');

    }  
    
    blueScore = 0;
    redScore = 0
    blueHead.textContent = blueScore;
    redHead.textContent = redScore;
    isGameOver = false;
    
})

inputValue.addEventListener('change', function(){
    limit = parseInt(this.value);
});