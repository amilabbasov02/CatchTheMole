let moles = document.querySelectorAll('.mole');
let score = document.querySelector('#score');
let audio = document.querySelector('audio');
let timer = document.querySelector('#timer');
let gameArea = document.querySelector('.game-area');

let startBtn = document.querySelector('#start-btn');
let startDiv = document.querySelector('.start');
let reset = document.querySelectorAll('#reset');
let highScore = document.querySelector('#high-score');
let high = document.querySelector('#high');

var game = true;
var gameScore = 0;
var gameTimer = 60;
let lastMole;


function randomTime(min, max){
return (Math.round(Math.random() * (max-min)) + min);
}

function randomMole(){
    let i = Math.floor(Math.random() * moles.length)
    let mole = moles[i];
    if( lastMole === mole){
        return randomMole();
    }else{
        lastMole = mole;
    }
    return mole;
}
randomMole()

function show(status = 'continue'){
    if(status == 'continue') {

        let time = randomTime(700, 1200);
        let mole = randomMole();
        mole.classList.add('active');
        if(gameScore > 8){
            let time = randomTime(600, 1000);
        };
        setTimeout(() => {
            mole.classList.remove('active');
    
        }, time)
    }

    else{

    }

}

function game_Timer(){
    if(gameTimer <= 10 && gameTimer > 0){
        gameTimer--;
        timer.innerText = `00:0${gameTimer}`;
    }else if( gameTimer > 10){
        gameTimer--;
        timer.innerText = `00:${gameTimer}`;
    }else{
        // timer.classList.

    }
   
   if(gameTimer < 1){
    startDiv.style.opacity = '1';
    startDiv.style.zIndex = '10';
    show('stop')
   }
   else{
    show()
   }
}

moles.forEach( mole => {
    mole.addEventListener('mousedown', () => {
        gameArea.style.cursor = "url(images/img4.png), auto";
       if(mole.classList.contains('active')){
           mole.classList.remove('active');
           gameScore++;
           score.innerText = `Score: ${gameScore}`
           let highScore = localStorage.getItem("highScore")
           if(gameScore>highScore){
               localStorage.clear()
               localStorage.setItem("highScore",gameScore)
               high.innerText=localStorage.getItem("highScore")
           }
           audio.play();
       } 
      
    });
    high.innerText=localStorage.getItem("highScore")
    mole.addEventListener('mouseup', () => {
        gameArea.style.cursor = "url(images/img3.png), auto";
    });
});


 startBtn.addEventListener('click', () => {
    game = true;
    gameTimer = 60;
    gameScore = 0;
    score.innerText = `Your Score is ${gameScore}`;
    show();
    // setInterval(game_Timer,1000)
    setTimeout(() => {
        game = false;
    }, 60000);

    startDiv.style.opacity = '0';
    startDiv.style.zIndex = '-1';
 })


 $("#reset").click(function(){
    game = true;
    gameTimer = 60;
    gameScore = 0;
    score.innerText = `Your Score is ${gameScore}`;
    show();
    // setInterval(game_Timer,1000)
    setTimeout(() => {
        game = false;
    }, 60000);

    startDiv.style.opacity = '0';
    startDiv.style.zIndex = '-1';
 })
